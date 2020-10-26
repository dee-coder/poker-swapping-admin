import { Box, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { Badge, Form, Image, Row, Col, Button } from "react-bootstrap";
import API from "../../apiUrl.json";

const AddNewBanner = () => {
  const [title, setTitle] = useState();
  const [affiliateUrl, setAffiliateUrl] = useState();
  const [image, setImage] = useState(null);
  const [heading1, setHeading1] = useState();
  const [heading2, setHeading2] = useState();
  const [heading3, setHeading3] = useState();
  const [status, setStatus] = useState("Active");

  const handleDoEmpty = (e) => {
    e.preventDefault();
    setImage(null);
  };

  const addBanner = (e) => {
    e.preventDefault();
    try {
      if (image !== "" || image !== null) {
        let fileData = new FormData();
        // Setting the 'image' field and the selected file
        fileData.set("image", image, `${image.lastModified}-${image.name}`);
        fileData.append("title", title);
        fileData.append("aff_url", affiliateUrl);
        fileData.append("h1", heading1);
        fileData.append("h2", heading2);
        fileData.append("h3", heading3);
        fileData.append("status", status);

        //console.log(API.baseurl + API.addNewNetwork);
        fetch(API.baseurl + API.addNewBanner, {
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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <Row>
        <Col lg={12}>
          <Paper style={{ padding: "30px" }}>
            <span className="text-dark-75 font-weight-bold font-size-lg">
              Add Banner
            </span>
            <Form style={{ marginTop: "30px" }}>
              <Form.Group>
                <Form.Label>Image</Form.Label>
                <Form.File
                  id="custom-file"
                  label="Select Image"
                  custom
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </Form.Group>
              {image !== null && (
                <Form.Group>
                  <Image
                    style={{
                      margin: "15px",
                      maxHeight: "200px",
                      maxWidth: "auto",
                    }}
                    src={URL.createObjectURL(image)}
                    rounded
                  />
                  <Badge
                    variant="secondary"
                    className="text-hover-primary"
                    onClick={(e) => handleDoEmpty(e)}
                  >
                    <i class="fas fa-times"></i>
                  </Badge>
                </Form.Group>
              )}
              <Form.Group>
                <Form.Label>Title </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Affiliate Url </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Affiliate Url"
                  value={affiliateUrl}
                  onChange={(e) => setAffiliateUrl(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Heading 1 </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Heading 1"
                  value={heading1}
                  onChange={(e) => setHeading1(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Heading 2 </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Heading 2"
                  value={heading2}
                  onChange={(e) => setHeading2(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Heading 3 </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Heading 3"
                  value={heading3}
                  onChange={(e) => setHeading3(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Status </Form.Label>
                <Form.Control
                  as="select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Paper>
        </Col>
      </Row>
      <Row style={{ marginTop: "10px" }}>
        <Col lg={12}>
          <Box p={2}>
            <Button
              variant="primary"
              style={{ float: "right" }}
              onClick={(e) => addBanner(e)}
            >
              Create Banner
            </Button>
          </Box>
        </Col>
      </Row>
    </Box>
  );
};

export default AddNewBanner;
