import React, { useState, useRef } from "react";
import { Col, Row, Form, Card, Button, InputGroup } from "react-bootstrap";
import { Editor } from "@tinymce/tinymce-react";
import API from "../../apiUrl.json";
import { Box, Divider } from "@material-ui/core";
import axios from "axios";
const NewNetworkPage = () => {
  const [networkName, setNetworkName] = useState();
  const [slug, setSlug] = useState();
  const [icon, setIcon] = useState(null);
  const [website, setWebsite] = useState();
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState();

  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
    setContent(content);
  };

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

  const onFileUpload = async (e) => {
    e.preventDefault();
    try {
      if (icon !== "" || icon !== null) {
        let fileData = new FormData();
        // Setting the 'image' field and the selected file
        fileData.set(
          "image",
          icon[0],
          `${icon[0].lastModified}-${icon[0].name}`
        );
        fileData.append("name", networkName);
        fileData.append("slug", slug);
        fileData.append("website", website);
        fileData.append("content", content);
        fileData.append("url", url);
        fileData.append("title", title);
        fileData.append("status", status);

        console.log(API.baseurl + API.addNewNetwork);
        fetch(API.baseurl + API.addNewNetwork, {
          method: "POST",

          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          body: fileData,
        })
          .then((res) => res.json())

          .then((json) => {
            console.log(json);
            window.location.reload(false);
          })
          .catch((err) => console.log(err));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };
  return (
    <div>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>Add New Network</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Network Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name of Network"
                    onChange={(e) => setNetworkName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Network Slug</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Slug"
                    onChange={(e) => setSlug(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Network Website</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Webiste"
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Icon</Form.Label>
                  <Form.File
                    id="custom-file"
                    label="Select Icon"
                    custom
                    onChange={(e) => setIcon(e.target.files)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option>active</option>
                    <option>inactive</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col lg={12}>
          <Card>
            <Card.Header>Network Page</Card.Header>
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
                  <Button variant="primary" onClick={(e) => onFileUpload(e)}>
                    Add Networks
                  </Button>
                </div>
              </Col>
            </Row>
          </Box>
        </Col>
      </Row>
      {/* <Row>
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
                  <Form.Label>Network</Form.Label>
                  <Form.Control
                    as="select"
                    value={network}
                    onChange={(e) => setNetwork(e.target.value)}
                  >
                    <option>PartyPoker</option>
                    <option>SkyPoker</option>
                    <option>FullTilt</option>
                    <option>PokerStars</option>
                    <option>888Poker</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Content [HTML Format]</Form.Label>
                  

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
                  <Button onClick={(e) => updateData(e)}>Convert </Button>
                </Form.Group>
                <Form.Group>
                  
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </div>
  );
};

export default NewNetworkPage;
