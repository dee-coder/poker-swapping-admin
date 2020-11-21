import { Box, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Badge, Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import API from "../../apiUrl.json";

const SettingPage = () => {
  const [showEditDurability, setShowEditDurability] = useState(false);

  const [NewDurability, setNewDurability] = useState();
  const [Durability, setDurability] = useState(7);

  useEffect(() => {
    fetch(API.baseurl + API.fetchSettings, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setDurability(res.durability.durability);
      })
      .catch((err) => alert(err.message));
  }, []);

  const updateDurability = (e) => {
    e.preventDefault();
    fetch(API.baseurl + API.updateDurability, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ durability: NewDurability }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === "ok") {
          setDurability(json.newDurability);
          setShowEditDurability(false);
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <Box pg={5}>
      <Row style={{ marginTop: "10px" }}>
        <Col>
          <Typography variant="button" style={{ fontSize: "13px" }}>
            Tournament Durability
          </Typography>
        </Col>
      </Row>
      <Row style={{ marginTop: "10px" }}>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  Set the durability of each allotments regarding requirments of
                  sponsors in a tournament by player.
                  <Button
                    variant="secondary"
                    style={{ float: "right" }}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowEditDurability(true);
                    }}
                  >
                    Edit
                  </Button>
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col>
                  <Typography
                    variant="button"
                    style={{ fontWeight: "800", fontSize: "30px" }}
                    gutterBottom
                  >
                    {Durability} DAYS
                  </Typography>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showEditDurability}
        onHide={() => setShowEditDurability(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modify Durability
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Enter new value</Form.Label>
              <Form.Control
                type="number"
                placeholder="e.g. 14 days"
                onChange={(e) => setNewDurability(e.target.value)}
                value={NewDurability}
              ></Form.Control>
            </Form.Group>
          </Form>
          {NewDurability > 30 || NewDurability < 2 ? (
            <Typography variant="body" className="text-normal text-warning">
              {" "}
              Maximum days are 30 and minimum is 2 days.{" "}
            </Typography>
          ) : (
            <p></p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={(e) => {
              e.preventDefault();
              setShowEditDurability(false);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            disabled={NewDurability < 31 && NewDurability > 0 ? false : true}
            onClick={(e) => updateDurability(e)}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </Box>
  );
};

export default SettingPage;
