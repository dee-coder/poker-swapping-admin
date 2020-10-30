import { Box, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import API from "../../apiUrl.json";
import { SubscriptionListTable } from "../tables/SubscriptionListTable";

const SubscriptionAll = () => {
  const history = useHistory();
  useEffect(() => {
    fetch(API.baseurl + API.getAllSubscription, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setSubscriptionList(json.list);
      });
  }, []);

  const handleModalOperation = (e) => {
    e.preventDefault();
    setShowModalForDelete(false);
  };

  const deletePlans = (e) => {
    e.preventDefault();
    fetch(API.baseurl + API.deleteSubsPlan, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: selectedForDelete }),
    })
      .then((res) => res.json())
      .then((json) => {
        //console.log(json);
        json.status === "ok" && window.location.reload(true);
      })
      .catch((err) => console.log(err));
  };

  const [SubscriptionList, setSubscriptionList] = useState([]);
  const [openAddNew, setOpenAddNew] = useState(false);
  const [selectedForDelete, setSelectedForDelete] = useState();
  const [showModalforDelete, setShowModalForDelete] = useState(false);

  if (openAddNew) {
    return <Redirect to="/subscription/new" />;
  } else {
    return (
      <Row>
        {SubscriptionList === null ||
        SubscriptionList === undefined ||
        SubscriptionList === [] ? (
          <div className="card card-custom " style={{ padding: "30px" }}>
            <Col lg={12}>
              <div className="d-flex justify-content-center align-items-center">
                <span style={{ marginRight: "20px" }}>
                  You dont have plans yet.
                </span>{" "}
                <Button variant="success" onClick={(e) => setOpenAddNew(true)}>
                  Create Plan +
                </Button>
              </div>
            </Col>
          </div>
        ) : (
          <SubscriptionListTable
            data={SubscriptionList}
            setShowModalForDelete={setShowModalForDelete}
            setSelectedForDelete={setSelectedForDelete}
          />
          // <CustomTableForNetworks data={data} />
        )}
        <Modal
          show={showModalforDelete}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Delete Page
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{selectedForDelete} </h4>
            <p>
              Are you sure about to delete {selectedForDelete}? This page will
              be deleted permanently.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={(e) => {
                handleModalOperation(e);
              }}
            >
              Cancel
            </Button>
            <Button onClick={(e) => deletePlans(e)}>Delete</Button>
          </Modal.Footer>
        </Modal>
      </Row>
    );
  }
};

export default SubscriptionAll;
