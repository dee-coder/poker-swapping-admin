import React, { useState, useEffect } from "react";
import { CustomNetworksListWidget } from "../widgets/CustomNetworksListWidget";
import API from "../../apiUrl.json";
import { Col, Row } from "react-bootstrap";

const NetworksList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(API.baseurl + API.getAllNetworks)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.tournaments);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      <Row>
        <Col lg={6}>
          <CustomNetworksListWidget
            className="card-stretch gutter-b"
            data={data}
          />
        </Col>
      </Row>
    </div>
  );
};

export default NetworksList;
