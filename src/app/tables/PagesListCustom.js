/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React from "react";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../_metronic/_helpers";

export function PagesListCustom({
  className,
  data,
  setShowModalForDelete,
  setSelectedForDelete,
}) {
  return (
    <div className={`card card-custom ${className}`}>
      {/* Head */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            All Networks
          </span>
          {/* <span className="text-muted mt-3 font-weight-bold font-size-sm">
            More than 400+ new members
          </span> */}
        </h3>
        <div className="card-toolbar">
          <Link
            to="/networks/new"
            className="btn btn-danger font-weight-bolder font-size-sm"
          >
            New +
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
                  <th style={{ minWidth: "100px" }}>Icon</th>

                  <th style={{ minWidth: "100px" }}>Network</th>
                  <th style={{ minWidth: "100px" }}>Page</th>

                  <th style={{ minWidth: "130px" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => {
                  return (
                    <tr>
                      <td className="pl-0 py-8">
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-50 symbol-light mr-4">
                            <span className="symbol-label">
                              <span className="svg-icon h-75 align-self-end">
                                <img
                                  src={row.icon}
                                  alt="icon"
                                  style={{
                                    maxHeight: "40px",
                                    maxWidth: "40px",
                                  }}
                                />
                                {/* <SVG
                                  src={toAbsoluteUrl(
                                    "/media/svg/avatars/001-boy.svg"
                                  )}
                                /> */}
                              </span>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {row.name}
                        </span>
                        <a href={row.url}>
                          <span className="text-muted-75 font-weight-bold d-block font-size-lg text-hover-primary">
                            {row.url}
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
                          {row.title}
                        </span>
                        <a
                          href={`https://pokerswapping.com/networks/${row.page_slug}`}
                        >
                          <span className="text-muted-75 font-weight-bold d-block font-size-lg text-hover-primary">
                            {`https://pokerswapping.com/networks/${row.page_slug}`}
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
                        {/* <span className="text-muted font-weight-bold">Paid</span> */}
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
                            setSelectedForDelete(row.slug);
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
