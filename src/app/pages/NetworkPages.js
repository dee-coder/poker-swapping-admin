import React, { useState, useEffect } from "react";
import { CustomNetworksListWidget } from "../widgets/CustomNetworksListWidget";
import API from "../../apiUrl.json";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";

const NetworkPages = () => {
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
  }, []);

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
  return (
    <div
      className="card card-custom card-strech gutter-b"
      style={{ padding: "30px" }}
    >
      {openAddNew && <Redirect to="/networks/newpage" />}
      <Row>
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
      </Row>
    </div>
  );
};

export default NetworkPages;
