import React, { useState, useRef } from "react";
import { Col, Row, Form, Card, Button, InputGroup } from "react-bootstrap";
import { Editor } from "@tinymce/tinymce-react";
import API from "../../apiUrl.json";
import { Box } from "@material-ui/core";
const CommonPagesNew = () => {
  //const [editorState, setEditorState] = useState("");
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [network, setNetwork] = useState("");
  const [title, setTitle] = useState("");

  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
    setContent(content);
  };

  // const handleEditorChange = (e) => {
  //   setContent(e.target.value);
  // };

  const handleSlug = (e) => {
    var slug = convertToSlug(e.target.value);
    console.log(slug);
    setUrl(slug);
  };
  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
  }

  const updateData = (e) => {
    e.preventDefault();

    fetch(API.baseurl + API.uploadPage, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
        network: network,
        content: content,
        title: title,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };
  return (
    <div>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Add New Page</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    onChange={(e) => {
                      setTitle(e.target.value);
                      handleSlug(e);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>URL slug</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        https://pokerswapping.com/networks/
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="text"
                      placeholder="slug"
                      aria-describedby="inputGroupPrepend"
                      value={url}
                      required
                      onChange={(e) => handleSlug(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter slug
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Content [HTML Format]</Form.Label>
                  {/* <Form.Control
                    type="email"
                    placeholder="url"
                    onChange={(e) => setContent(e.target.value)}
                  /> */}

                  <Editor
                    initialValue="<p>This is the initial content of the editor</p>"
                    init={{
                      height: 500,
                      menubar: false,
                      plugins: [
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste code help wordcount",
                      ],
                      toolbar:
                        "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
                    }}
                    onEditorChange={handleEditorChange}
                  />
                </Form.Group>
                <Form.Group>
                  {/* <Form.Label>Logo/Icon</Form.Label>
                  <Form.File
                    id="custom-file"
                    label="Select Icon"
                    custom
                    onChange={(e) => setSelectedIcon(e.target.files)}
                  /> */}
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Box style={{ padding: "30px" }}>
            <Row>
              <Col lg={12}>
                <div style={{ float: "right" }}>
                  <Button variant="primary" onClick={(e) => updateData(e)}>
                    Save Changes
                  </Button>
                </div>
              </Col>
            </Row>
          </Box>
        </Col>
      </Row>
    </div>
  );
};

export default CommonPagesNew;
