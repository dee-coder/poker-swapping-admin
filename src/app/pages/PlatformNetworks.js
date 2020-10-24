import React, { useState, useEffect } from "react";
import { CustomNetworksListWidget } from "../widgets/CustomNetworksListWidget";
import API from "../../apiUrl.json";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import axios from "axios";

const AllNetworksPage = () => {
  const [data, setData] = useState([]);
  const [openAddNew, setOpenAddNew] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("");
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [status, setStatus] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetch(API.baseurl + API.getAllNetworks)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.tournaments);
      })
      .catch((err) => console.log(err.message));
  }, [onFileUpload]);

  const onFileUpload = async (e) => {
    e.preventDefault();
    try {
      if (selectedIcon !== "") {
        // Creating a FormData object
        let fileData = new FormData();
        // Setting the 'image' field and the selected file
        fileData.set(
          "image",
          selectedIcon[0],
          `${selectedIcon[0].lastModified}-${selectedIcon[0].name}`
        );
        fileData.append("name", name);
        fileData.append("slug", slug);
        fileData.append("url", url);
        fileData.append("status", status);

        console.log(API.baseurl + API.addNewNetwork);
        await fetch(API.baseurl + API.addNewNetwork, {
          method: "post",

          body: fileData,
        })
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            setOpenAddNew(false);
            window.location.reload(false);
          })
          .catch((err) => console.log(err));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Row>
        <Col lg={6}>
          <CustomNetworksListWidget
            className="card-stretch gutter-b"
            data={data}
            setOpenAddNew={setOpenAddNew}
          />
        </Col>
      </Row>
      <Modal show={openAddNew} onHide={() => setOpenAddNew(false)}>
        <Modal.Header>
          <Modal.Title>Add New Network</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Network Name</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Network Slug</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Slug"
                  onChange={(e) => setSlug(e.target.value)}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>URL</Form.Label>
              <Form.Control
                placeholder="url"
                onChange={(e) => setUrl(e.target.value)}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Logo/Icon</Form.Label>
                <Form.File
                  id="custom-file"
                  label="Select Icon"
                  custom
                  onChange={(e) => setSelectedIcon(e.target.files)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>Choose...</option>
                  <option>Actived</option>
                  <option>Deactivated</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Button
              variant="primary"
              type="submit"
              onClick={(e) => onFileUpload(e)}
            >
              Add New Network
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AllNetworksPage;
