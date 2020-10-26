import React, { useState, useEffect } from "react";
import API from "../../apiUrl.json";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { ListsWidget4 } from "../../_metronic/_partials/widgets/lists/ListsWidget4";
import { CustomNetworkPagesList } from "../widgets/CustomNetworkPagesList";
import { PagesListCustom } from "../tables/PagesListCustom";
import { CustomAffPagesList } from "../tables/CustomAffPagesList";

const CommonPagesAll = () => {
  const [data, setData] = useState([]);
  const [openAddNew, setOpenAddNew] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("");
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [status, setStatus] = useState("");
  const [url, setUrl] = useState("");

  const [selectedForDelete, setSelectedForDelete] = useState();

  const [showModalforDelete, setShowModalForDelete] = useState(false);

  useEffect(() => {
    fetch(API.baseurl + API.getAllPage, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.result);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleModalOperation = (e) => {
    e.preventDefault();
    setShowModalForDelete(false);
  };

  const deletePages = (e) => {
    e.preventDefault();
    fetch(API.baseurl + API.deletePages, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: selectedForDelete }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.status === "ok") {
          window.location.reload(false);
          setShowModalForDelete(false);
        } else {
          alert(json.message);
          setShowModalForDelete(false);
        }
      });
  };

  //   const onFileUpload = async (e) => {
  //     e.preventDefault();
  //     try {
  //       if (selectedIcon !== "") {
  //         // Creating a FormData object
  //         let fileData = new FormData();
  //         // Setting the 'image' field and the selected file
  //         fileData.set(
  //           "image",
  //           selectedIcon[0],
  //           `${selectedIcon[0].lastModified}-${selectedIcon[0].name}`
  //         );
  //         fileData.append("name", name);
  //         fileData.append("slug", slug);
  //         fileData.append("url", url);
  //         fileData.append("status", status);

  //         console.log(API.baseurl + API.addNewNetwork);
  //         await fetch(API.baseurl + API.addNewNetwork, {
  //           method: "POST",
  //           body: fileData,
  //         })
  //           .then((res) => res.json())
  //           .then((json) => {
  //             console.log(json);
  //             setOpenAddNew(false);
  //             window.location.reload(false);
  //           })
  //           .catch((err) => console.log(err));
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  if (openAddNew) {
    return <Redirect to="/networks/newpage" />;
  } else {
    return (
      <Row>
        {data === null || data === undefined || data === [] ? (
          <div className="card card-custom " style={{ padding: "30px" }}>
            <Col lg={12}>
              <div className="d-flex justify-content-center align-items-center">
                <span style={{ marginRight: "20px" }}>
                  You dont have any page yet.
                </span>{" "}
                <Button variant="success" onClick={(e) => setOpenAddNew(true)}>
                  Create Page +
                </Button>
              </div>
            </Col>
          </div>
        ) : (
          <CustomAffPagesList
            data={data}
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
            <Button onClick={(e) => deletePages(e)}>Delete</Button>
          </Modal.Footer>
        </Modal>
      </Row>
    );
  }
};

export default CommonPagesAll;
