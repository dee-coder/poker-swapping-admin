import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  InputGroup,
  Image,
  ButtonGroup,
} from "react-bootstrap";
import { Editor } from "@tinymce/tinymce-react";
import API from "../../apiUrl.json";
import { Box, Divider, Paper } from "@material-ui/core";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const EditNetwork = (props) => {
  const history = useHistory();
  const [networkName, setNetworkName] = useState();
  const [slug, setSlug] = useState();
  const [icon, setIcon] = useState(null);
  const [website, setWebsite] = useState();
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState();
  const [bannerTop, setBannerTop] = useState();
  const [bannerBottom, setBannerBottom] = useState();
  const [bannersList, setBannersList] = useState([]);
  //const [obj, setObj] = useState();
  useEffect(() => {
    var obj = props.location.obj;
    console.log(props.location.obj);
    //setObj(obj);
    setNetworkName(obj.name);
    setSlug(obj.slug);
    //setIcon(obj.icon);
    setWebsite(obj.url);
    setUrl(obj.page_slug);
    setContent(obj.content);
    setTitle(obj.title);
    setStatus(obj.status);
    setBannerTop(obj.banner_top);
    setBannerBottom(obj.banner_bottom);
    fetch(API.baseurl + API.getAllBanners, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setBannersList(json.result);
      });
  }, []);

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

  const onFileUpload = (e) => {
    e.preventDefault();
    console.log(icon);
    try {
      if (icon === null) {
        var body = {
          name: networkName,
          slug: slug,
          website: website,
          content: content,
          url: url,
          title: title,
          status: status,
          banner_top: bannerTop,
          banner_bottom: bannerBottom,
        };
        fetch(API.baseurl + API.updateNetworkWithoutLogo, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        })
          .then((res) => res.json())

          .then((json) => {
            console.log(json);
            history.push("/networks/all");
            //window.location.reload(false);
          })
          .catch((err) => console.log(err));
      } else {
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
        fileData.append("banner_top", bannerTop);
        fileData.append("banner_bottom", bannerBottom);

        console.log(API.baseurl + API.updateNetworkWithLogo);
        fetch(API.baseurl + API.updateNetworkWithLogo, {
          method: "POST",

          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          body: fileData,
        })
          .then((res) => res.json())

          .then((json) => {
            console.log(json);
            history.push("/networks/all");

            //window.location.reload(false);
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
            <Card.Header>Edit This Network</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Network Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name of Network"
                    value={networkName}
                    onChange={(e) => setNetworkName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Network Slug</Form.Label>
                  <Form.Control
                    type="text"
                    value={slug}
                    placeholder="Slug"
                    onChange={(e) => setSlug(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Network Website</Form.Label>
                  <Form.Control
                    type="text"
                    value={website}
                    placeholder="Webiste"
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form inline>
                    <Form.Group col>
                      <Image
                        style={{ marginTop: "20px" }}
                        src={props.location.obj.icon}
                        roundedCircle
                        style={{ maxHeight: "50px", maxWidth: "50px" }}
                      />
                    </Form.Group>
                    <Form.Group style={{ marginLeft: "20px" }}>
                      <Form.Label>Reset Icon</Form.Label>
                      <Form.File
                        style={{ marginTop: "20px" }}
                        id="custom-file"
                        label="Select Icon"
                        custom
                        onChange={(e) => setIcon(e.target.files)}
                      />
                    </Form.Group>
                  </Form>
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
              <Divider />
              <Form>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    value={title}
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
                    initialValue={content}
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
      <Row style={{ marginTop: "30px" }}>
        <Col lg={12}>
          <Card>
            <Card.Header>Banners</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Banner Top</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setBannerTop(e.target.value);
                    }}
                    value={bannerTop}
                  >
                    <option>Select Top Banner</option>
                    {bannersList.map((banner) => {
                      return <option value={banner.id}>{banner.title}</option>;
                    })}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Banner Bottom</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setBannerBottom(e.target.value);
                    }}
                    value={bannerBottom}
                  >
                    <option> Select Bottom Banner</option>
                    {bannersList.map((banner) => {
                      return <option value={banner.id}>{banner.title}</option>;
                    })}
                  </Form.Control>
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
                  <Link to="/networks/all">
                    <Button variant="secondary" style={{ marginRight: "30px" }}>
                      Cancel
                    </Button>
                  </Link>
                  <Button variant="primary" onClick={(e) => onFileUpload(e)}>
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

export default EditNetwork;
