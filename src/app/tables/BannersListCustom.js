/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React from "react";
import { Image } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../_metronic/_helpers";

export function BannersListCustom({
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
            All Banners
          </span>
          {/* <span className="text-muted mt-3 font-weight-bold font-size-sm">
            More than 400+ new members
          </span> */}
        </h3>
        <div className="card-toolbar">
          <Link
            to="/banners/new"
            className="btn btn-primary font-weight-bolder font-size-sm"
          >
            Add New Banner +
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
                  <th style={{ minWidth: "130px" }}>Image</th>

                  <th style={{ minWidth: "100px" }}>Title</th>
                  <th style={{ minWidth: "100px" }}>Affiliate Url</th>

                  <th style={{ minWidth: "100px" }}>Status</th>
                  <th style={{ minWidth: "130px" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => {
                  return (
                    <tr>
                      <td className="pl-0 py-8">
                        <div className="d-flex align-items-center">
                          <Image
                            src={row.path}
                            alt="icon"
                            style={{
                              maxHeight: "100px",
                              maxWidth: "100px",
                            }}
                            rounded
                          />
                          {/* <SVG
                                  src={toAbsoluteUrl(
                                    "/media/svg/avatars/001-boy.svg"
                                  )}
                                /> */}
                        </div>
                      </td>
                      <td>
                        {" "}
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {row.title}
                        </span>
                      </td>
                      <td>
                        <a href={row.aff_url} target="_blank">
                          <span className="text-muted-75 font-weight-bold d-block font-size-lg text-hover-primary">
                            {row.aff_url}
                            <i
                              class="fas fa-external-link-alt"
                              style={{
                                fontSize: "12px",
                                color: "#000",
                                margin: "5px",
                              }}
                            ></i>
                          </span>
                        </a>
                        {/* <span className="text-muted font-weight-bold">
                      In Proccess
                    </span> */}
                      </td>
                      <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {row.status}
                        </span>
                      </td>

                      {/* <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {row.content}
                        </span>
                        <img
                      src={toAbsoluteUrl("/media/logos/stars.png")}
                      alt="image"
                      style={{ width: "5.5rem" }}
                    />
                    <span className="text-muted font-weight-bold d-block font-size-sm">
                      Best Rated
                    </span>
                      </td> */}
                      <td className="text-left pr-0">
                        <Link
                          to={{ pathname: "/networks/edit", obj: row }}
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
