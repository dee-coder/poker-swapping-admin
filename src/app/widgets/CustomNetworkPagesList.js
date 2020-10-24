/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export function CustomNetworkPagesList({ data }) {
  return (
    <>
      <div className={`card card-custom fluid`} width="100%">
        {/* Head */}
        <div className="card-header border-0">
          <h3 className="card-title font-weight-bolder text-dark">
            Pages of Networks
          </h3>
          <div className="card-toolbar">
            <Link to="/networks/newpage">
              <button className="btn btn-primary">Add New</button>
            </Link>
          </div>
        </div>
        {/* Body */}
        <div className="card-body pt-2">
          <Row style={{ marginBottom: "15px" }}>
            <Col lg={3}>
              <span className="text-dark font-weight-bold">TITLE</span>
            </Col>
            <Col lg={3}>
              <span className="text-dark font-weight-bold">NETWORK</span>
            </Col>
            <Col lg={3}>
              <span className="text-dark font-weight-bold">STATUS</span>
            </Col>
            <Col lg={3}>
              {" "}
              <span className="text-dark font-weight-bold">URL</span>
            </Col>
          </Row>
          {data.map((page) => {
            return (
              <Row>
                <Col lg={3}>
                  {page.title.length > 50
                    ? page.title.substring(0, 25 - 3) + "..."
                    : page.title}
                </Col>
                <Col lg={3}>
                  {" "}
                  {page.network.length > 50
                    ? page.network.substring(0, 25 - 3) + "..."
                    : page.network}
                </Col>
                <Col lg={3}>
                  {" "}
                  {page.status.length > 50
                    ? page.status.substring(0, 25 - 3) + "..."
                    : page.status}
                </Col>
                <Col lg={3}>
                  {" "}
                  <span className="text-primary">
                    <a
                      href={`https://pokerswapping.com/network/${page.url}`}
                      target="_blank"
                    >
                      {" "}
                      {page.url.length > 50
                        ? "https://pokerswapping.com/network/" +
                          page.url.substring(0, 25 - 3) +
                          "..."
                        : "https://pokerswapping.com/network/" + page.url}{" "}
                      <i
                        class="fas fa-external-link-alt"
                        style={{ fontSize: "14px", color: "#0275d8" }}
                      ></i>
                    </a>
                  </span>
                </Col>
              </Row>
            );
          })}
        </div>
      </div>
    </>
  );
}
