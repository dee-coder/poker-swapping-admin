/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React from "react";
import { Image } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../_metronic/_helpers";

export function SubscriptionListTable({
  className,
  data,
  setShowModalForDelete,
  setSelectedForDelete,
}) {
  return (
    <div
      className={`card card-custom ${className}`}
      style={{ minWidth: "100%" }}
    >
      {/* Head */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            All Subscriptions Plans
          </span>
          {/* <span className="text-muted mt-3 font-weight-bold font-size-sm">
            More than 400+ new members
          </span> */}
        </h3>
        <div className="card-toolbar">
          <Link
            to="/subscription/new"
            className="btn btn-primary font-weight-bolder font-size-sm"
          >
            Add New Plan +
          </Link>
        </div>
      </div>
      {/* Body */}
      <div className="card-body pt-0 pb-3">
        <div className="tab-content">
          <div className="table-responsive">
            <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
              <thead>
                <tr className="text-left text-uppercase">
                  <th style={{ minWidth: "130px" }}>Plan Title</th>

                  <th style={{ minWidth: "100px" }}>Description</th>
                  <th style={{ minWidth: "100px" }}>Stripe API Code</th>

                  <th style={{ minWidth: "100px" }}>Type</th>
                  <th style={{ minWidth: "130px" }}>Amount</th>
                  <th style={{ minWidth: "130px" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => {
                  return (
                    <tr>
                      <td>
                        {" "}
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {row.title}
                        </span>
                      </td>
                      <td>
                        {" "}
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {row.description}
                        </span>
                      </td>
                      <td>
                        {" "}
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {row.stripe_product_id}
                        </span>
                      </td>
                      <td>
                        {" "}
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {row.subscription_type}
                        </span>
                      </td>
                      <td>
                        {" "}
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {row.currency}
                          {row.plan_amount}
                        </span>
                      </td>

                      <td className="text-left pr-0">
                        <Link
                          to={{ pathname: "/subscription/edit", obj: row }}
                          className="btn btn-icon btn-light btn-sm mx-3"
                        >
                          <span className="svg-icon svg-icon-md svg-icon-primary">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/icons/Communication/Write.svg"
                              )}
                            ></SVG>
                          </span>
                        </Link>
                        <a
                          href="#"
                          className="btn btn-icon btn-light btn-sm"
                          onClick={(e) => {
                            setSelectedForDelete(row.id);
                            setShowModalForDelete(true);
                          }}
                        >
                          <span className="svg-icon svg-icon-md svg-icon-primary">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/icons/General/Trash.svg"
                              )}
                            ></SVG>
                          </span>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
