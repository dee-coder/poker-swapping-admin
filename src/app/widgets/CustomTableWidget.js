/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import _ from "lodash";

export function CustomTableWidgets({ className, playerList }) {
  const [key, setKey] = useState("All");

  return (
    <div className={`card card-custom ${className}`}>
      {/* Head */}
      <Tab.Container defaultActiveKey={key}>
        <div className="card-header border-0 pt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label font-weight-bolder text-dark">
              Players Profiles
            </span>
            <span className="text-muted mt-3 font-weight-bold font-size-sm">
              More than 400+ new players
            </span>
          </h3>

          <Nav
            as="ul"
            onSelect={(_key) => setKey(_key)}
            className="nav nav-pills nav-pills-sm nav-dark-75"
            style={{ float: "right" }}
          >
            <Nav.Item className="nav-item" as="li">
              <Nav.Link
                eventKey="All"
                className={`nav-link py-2 px-4 ${
                  key === "All" ? "active" : ""
                }`}
              >
                All
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item" as="li">
              <Nav.Link
                eventKey="pokerstars"
                className={`nav-link py-2 px-4 ${
                  key === "pokerstars" ? "active" : ""
                }`}
              >
                PokerStars
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item" as="li">
              <Nav.Link
                eventKey="partypoker"
                className={`nav-link py-2 px-4 ${
                  key === "partypoker" ? "active" : ""
                }`}
              >
                PartyPoker
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item" as="li">
              <Nav.Link
                eventKey="skypoker"
                className={`nav-link py-2 px-4 ${
                  key === "skypoker" ? "active" : ""
                }`}
              >
                SkyPoker
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item" as="li">
              <Nav.Link
                eventKey="888poker"
                className={`nav-link py-2 px-4 ${
                  key === "888poker" ? "active" : ""
                }`}
              >
                888Poker
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="card-body pt-3 pb-0" style={{ padding: "0px" }}>
            <Tab.Content>
              <Tab.Pane eventKey="All">
                <div className="table-responsive">
                  <table className="table table-borderless table-vertical-center">
                    <thead>
                      <tr>
                        <th className="p-0" style={{ width: "50px" }} />
                        <th className="p-0" style={{ minWidth: "200px" }} />
                        <th className="p-0" style={{ minWidth: "100px" }} />
                        <th className="p-0" style={{ minWidth: "125px" }} />
                        <th className="p-0" style={{ minWidth: "110px" }} />
                        <th className="p-0" style={{ minWidth: "150px" }} />
                      </tr>
                    </thead>
                    <tbody>
                      {playerList.map((player) => {
                        return (
                          <tr>
                            <td className="pl-0 py-4">
                              <div className="symbol symbol-50 symbol-light mr-1">
                                <span className="symbol-label">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/misc/006-plurk.svg"
                                    )}
                                    className="h-50 align-self-center"
                                  ></SVG>
                                </span>
                              </div>
                            </td>
                            <td className="pl-0">
                              <a
                                href="#"
                                className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                              >
                                {player.player_name}
                              </a>
                              <div>
                                <span className="font-weight-bolder">
                                  Email:
                                </span>{" "}
                                <a
                                  className="text-muted font-weight-bold text-hover-primary"
                                  href="#"
                                >
                                  {player.player_email}
                                </a>
                              </div>
                            </td>
                            <td className="text-right">
                              <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                Network
                              </span>
                              <span className="text-muted font-weight-bold">
                                {player.player_network}
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                Username
                              </span>
                              <span className="text-muted font-weight-bold">
                                {player.player_network_username}
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="label label-lg label-light-primary label-inline">
                                {player.player_status}
                              </span>
                            </td>
                            <td className="text-right pr-0">
                              <a
                                href="#"
                                className="btn btn-icon btn-light btn-sm"
                              >
                                <span className="svg-icon svg-icon-md svg-icon-primary">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/icons/General/Settings-1.svg"
                                    )}
                                  ></SVG>
                                </span>
                              </a>
                              <a
                                href="#"
                                className="btn btn-icon btn-light btn-sm mx-3"
                              >
                                <span className="svg-icon svg-icon-md svg-icon-primary">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/icons/Communication/Write.svg"
                                    )}
                                  ></SVG>
                                </span>
                              </a>
                              <a
                                href="#"
                                className="btn btn-icon btn-light btn-sm"
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
              </Tab.Pane>
              <Tab.Pane eventKey="pokerstars">
                <div className="table-responsive">
                  <table className="table table-borderless table-vertical-center">
                    <thead>
                      <tr>
                        <th className="p-0" style={{ width: "50px" }} />
                        <th className="p-0" style={{ minWidth: "200px" }} />
                        <th className="p-0" style={{ minWidth: "100px" }} />
                        <th className="p-0" style={{ minWidth: "125px" }} />
                        <th className="p-0" style={{ minWidth: "110px" }} />
                        <th className="p-0" style={{ minWidth: "150px" }} />
                      </tr>
                    </thead>
                    <tbody>
                      {_.filter(playerList, (o) => {
                        return o.player_network === "pokerstars";
                      }).map((player) => {
                        return (
                          <tr>
                            <td className="pl-0 py-4">
                              <div className="symbol symbol-50 symbol-light mr-1">
                                <span className="symbol-label">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/misc/006-plurk.svg"
                                    )}
                                    className="h-50 align-self-center"
                                  ></SVG>
                                </span>
                              </div>
                            </td>
                            <td className="pl-0">
                              <a
                                href="#"
                                className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                              >
                                {player.player_name}
                              </a>
                              <div>
                                <span className="font-weight-bolder">
                                  Email:
                                </span>{" "}
                                <a
                                  className="text-muted font-weight-bold text-hover-primary"
                                  href="#"
                                >
                                  {player.player_email}
                                </a>
                              </div>
                            </td>
                            <td className="text-right">
                              <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                Network
                              </span>
                              <span className="text-muted font-weight-bold">
                                {player.player_network}
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                Username
                              </span>
                              <span className="text-muted font-weight-bold">
                                {player.player_network_username}
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="label label-lg label-light-primary label-inline">
                                {player.player_status}
                              </span>
                            </td>
                            <td className="text-right pr-0">
                              <a
                                href="#"
                                className="btn btn-icon btn-light btn-sm"
                              >
                                <span className="svg-icon svg-icon-md svg-icon-primary">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/icons/General/Settings-1.svg"
                                    )}
                                  ></SVG>
                                </span>
                              </a>
                              <a
                                href="#"
                                className="btn btn-icon btn-light btn-sm mx-3"
                              >
                                <span className="svg-icon svg-icon-md svg-icon-primary">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/icons/Communication/Write.svg"
                                    )}
                                  ></SVG>
                                </span>
                              </a>
                              <a
                                href="#"
                                className="btn btn-icon btn-light btn-sm"
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
              </Tab.Pane>
              <Tab.Pane eventKey="partypoker">
                <div className="table-responsive">
                  <table className="table table-borderless table-vertical-center">
                    <thead>
                      <tr>
                        <th className="p-0" style={{ width: "50px" }} />
                        <th className="p-0" style={{ minWidth: "200px" }} />
                        <th className="p-0" style={{ minWidth: "100px" }} />
                        <th className="p-0" style={{ minWidth: "125px" }} />
                        <th className="p-0" style={{ minWidth: "110px" }} />
                        <th className="p-0" style={{ minWidth: "150px" }} />
                      </tr>
                    </thead>
                    <tbody>
                      {_.filter(playerList, (o) => {
                        return o.player_network === "partypoker";
                      }).map((player) => {
                        return (
                          <tr>
                            <td className="pl-0 py-4">
                              <div className="symbol symbol-50 symbol-light mr-1">
                                <span className="symbol-label">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/misc/006-plurk.svg"
                                    )}
                                    className="h-50 align-self-center"
                                  ></SVG>
                                </span>
                              </div>
                            </td>
                            <td className="pl-0">
                              <a
                                href="#"
                                className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                              >
                                {player.player_name}
                              </a>
                              <div>
                                <span className="font-weight-bolder">
                                  Email:
                                </span>{" "}
                                <a
                                  className="text-muted font-weight-bold text-hover-primary"
                                  href="#"
                                >
                                  {player.player_email}
                                </a>
                              </div>
                            </td>
                            <td className="text-right">
                              <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                Network
                              </span>
                              <span className="text-muted font-weight-bold">
                                {player.player_network}
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                Username
                              </span>
                              <span className="text-muted font-weight-bold">
                                {player.player_network_username}
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="label label-lg label-light-primary label-inline">
                                {player.player_status}
                              </span>
                            </td>
                            <td className="text-right pr-0">
                              <a
                                href="#"
                                className="btn btn-icon btn-light btn-sm"
                              >
                                <span className="svg-icon svg-icon-md svg-icon-primary">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/icons/General/Settings-1.svg"
                                    )}
                                  ></SVG>
                                </span>
                              </a>
                              <a
                                href="#"
                                className="btn btn-icon btn-light btn-sm mx-3"
                              >
                                <span className="svg-icon svg-icon-md svg-icon-primary">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/icons/Communication/Write.svg"
                                    )}
                                  ></SVG>
                                </span>
                              </a>
                              <a
                                href="#"
                                className="btn btn-icon btn-light btn-sm"
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
              </Tab.Pane>
              <Tab.Pane eventKey="skypoker">
                <div className="table-responsive">
                  <table className="table table-borderless table-vertical-center">
                    <thead>
                      <tr>
                        <th className="p-0" style={{ width: "50px" }} />
                        <th className="p-0" style={{ minWidth: "200px" }} />
                        <th className="p-0" style={{ minWidth: "100px" }} />
                        <th className="p-0" style={{ minWidth: "125px" }} />
                        <th className="p-0" style={{ minWidth: "110px" }} />
                        <th className="p-0" style={{ minWidth: "150px" }} />
                      </tr>
                    </thead>
                    <tbody>
                      {_.filter(playerList, (o) => {
                        return o.player_network === "skypoker";
                      }).map((player) => {
                        return (
                          <tr>
                            <td className="pl-0 py-4">
                              <div className="symbol symbol-50 symbol-light mr-1">
                                <span className="symbol-label">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/misc/006-plurk.svg"
                                    )}
                                    className="h-50 align-self-center"
                                  ></SVG>
                                </span>
                              </div>
                            </td>
                            <td className="pl-0">
                              <a
                                href="#"
                                className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                              >
                                {player.player_name}
                              </a>
                              <div>
                                <span className="font-weight-bolder">
                                  Email:
                                </span>{" "}
                                <a
                                  className="text-muted font-weight-bold text-hover-primary"
                                  href="#"
                                >
                                  {player.player_email}
                                </a>
                              </div>
                            </td>
                            <td className="text-right">
                              <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                Network
                              </span>
                              <span className="text-muted font-weight-bold">
                                {player.player_network}
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                Username
                              </span>
                              <span className="text-muted font-weight-bold">
                                {player.player_network_username}
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="label label-lg label-light-primary label-inline">
                                {player.player_status}
                              </span>
                            </td>
                            <td className="text-right pr-0">
                              <a
                                href="#"
                                className="btn btn-icon btn-light btn-sm"
                              >
                                <span className="svg-icon svg-icon-md svg-icon-primary">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/icons/General/Settings-1.svg"
                                    )}
                                  ></SVG>
                                </span>
                              </a>
                              <a
                                href="#"
                                className="btn btn-icon btn-light btn-sm mx-3"
                              >
                                <span className="svg-icon svg-icon-md svg-icon-primary">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/icons/Communication/Write.svg"
                                    )}
                                  ></SVG>
                                </span>
                              </a>
                              <a
                                href="#"
                                className="btn btn-icon btn-light btn-sm"
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
              </Tab.Pane>
              <Tab.Pane eventKey="888poker">
                <div className="table-responsive">
                  <table className="table table-borderless table-vertical-center">
                    <thead>
                      <tr>
                        <th className="p-0" style={{ width: "50px" }} />
                        <th className="p-0" style={{ minWidth: "200px" }} />
                        <th className="p-0" style={{ minWidth: "100px" }} />
                        <th className="p-0" style={{ minWidth: "125px" }} />
                        <th className="p-0" style={{ minWidth: "110px" }} />
                        <th className="p-0" style={{ minWidth: "150px" }} />
                      </tr>
                    </thead>
                    <tbody>
                      {_.filter(playerList, (o) => {
                        return o.player_network === "888poker";
                      }).map((player) => {
                        return (
                          <tr>
                            <td className="pl-0 py-4">
                              <div className="symbol symbol-50 symbol-light mr-1">
                                <span className="symbol-label">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/misc/006-plurk.svg"
                                    )}
                                    className="h-50 align-self-center"
                                  ></SVG>
                                </span>
                              </div>
                            </td>
                            <td className="pl-0">
                              <a
                                href="#"
                                className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                              >
                                {player.player_name}
                              </a>
                              <div>
                                <span className="font-weight-bolder">
                                  Email:
                                </span>{" "}
                                <a
                                  className="text-muted font-weight-bold text-hover-primary"
                                  href="#"
                                >
                                  {player.player_email}
                                </a>
                              </div>
                            </td>
                            <td className="text-right">
                              <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                Network
                              </span>
                              <span className="text-muted font-weight-bold">
                                {player.player_network}
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                Username
                              </span>
                              <span className="text-muted font-weight-bold">
                                {player.player_network_username}
                              </span>
                            </td>
                            <td className="text-right">
                              <span className="label label-lg label-light-primary label-inline">
                                {player.player_status}
                              </span>
                            </td>
                            <td className="text-right pr-0">
                              <a
                                href="#"
                                className="btn btn-icon btn-light btn-sm"
                              >
                                <span className="svg-icon svg-icon-md svg-icon-primary">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/icons/General/Settings-1.svg"
                                    )}
                                  ></SVG>
                                </span>
                              </a>
                              <a
                                href="#"
                                className="btn btn-icon btn-light btn-sm mx-3"
                              >
                                <span className="svg-icon svg-icon-md svg-icon-primary">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/icons/Communication/Write.svg"
                                    )}
                                  ></SVG>
                                </span>
                              </a>
                              <a
                                href="#"
                                className="btn btn-icon btn-light btn-sm"
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
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
        {/* Body */}
      </Tab.Container>
    </div>
  );
}
