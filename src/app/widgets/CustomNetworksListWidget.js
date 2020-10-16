/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import SVG from "react-inlinesvg";
import { Dropdown, Row, Col } from "react-bootstrap";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import {
  DropdownCustomToggler,
  DropdownMenu1,
  DropdownMenu2,
} from "../../_metronic/_partials/dropdowns";

export function CustomNetworksListWidget({ className, data }) {
  return (
    <>
      <div className={`card card-custom ${className}`}>
        {/* Head */}
        <div className="card-header border-0">
          <h3 className="card-title font-weight-bolder text-dark">Networks</h3>
          <div className="card-toolbar">
            <button className="btn btn-light-primary btn-sm font-weight-bolder ">
              Add New +
            </button>
          </div>
        </div>
        {/* Body */}
        <div className="card-body pt-2">
          {data.map((net) => {
            return (
              <Row style={{ marginTop: "20px" }}>
                <Col lg={4}>
                  <a
                    href="#"
                    className="text-dark text-hover-primary mb-1 font-size-lg font-weight-bolder"
                  >
                    {net.name}
                  </a>
                  <br />
                  <span className="text-muted font-weight-bolder">
                    {net.slug}
                  </span>
                </Col>
                <Col lg={4}>
                  <a
                    href="#"
                    className="text-dark text-hover-primary mb-1 font-size-lg font-weight-bolder"
                  >
                    Status
                  </a>
                  <br />
                  <span className="text-muted font-weight-bolder">
                    {net.status}
                  </span>
                </Col>
                <Col lg={4} style={{ alignItems: "right", textAlign: "right" }}>
                  <ItemDropdown item="" style={{ float: "right" }} />
                </Col>
              </Row>
            );
          })}
        </div>
      </div>
    </>
  );
}

const ItemDropdown = ({ item }) => {
  return (
    <>
      <Dropdown className="dropdown-inline" alignRight>
        <Dropdown.Toggle id="dropdown-toggle-top" as={DropdownCustomToggler}>
          <i className="ki ki-bold-more-hor" />
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
          <DropdownMenu1 />
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
