// src/components/Dashboard.js
import { Col, Row, Card } from "react-bootstrap";
import React from "react";
import "./styles.css";
import Graph from "../Graph/Graph";
import PieChart from "../PieChart";
import LineChart from "../LineChart";
import Dropdown from "../DropDown/DropDown";
import ColorBox from "../ColorBox/ColorBox";
import ProgressBarComp from "../ProgressBar/ProgressBar";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { IoIosPeople } from "react-icons/io";
import { LuWallet } from "react-icons/lu";
import { TbReceiptDollar } from "react-icons/tb";
import { TbNavigationDollar } from "react-icons/tb";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="chartPlus">
        <Row className="dashFirstSec m-0">
          <Col className="p-0" lg={8} md={8} sm={12}>
            <div className="graph">
              <div className="d-flex align-items-center gap-2">
                <h2>Universities</h2>
                <div className="ms-auto d-flex">
                  <div>
                    <Dropdown
                      options={[
                        { label: "January", value: "January" },
                        { label: "Feburary", value: "Feburary" }
                      ]}
                    ></Dropdown>
                  </div>
                  <div className="ms-2">
                    <Dropdown
                      options={[
                        { label: "2024", value: "2024" },
                        { label: "2025", value: "2026" }
                      ]}
                    ></Dropdown>
                  </div>
                </div>
              </div>
              <Graph
                inputData={{
                  labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
                  ],
                  datasets: [
                    {
                      data: [0, 0.3, 4, 4.5, 4.9, 6, 7, 4, 8.9, 9, 6, 3],
                      fill: true,
                      backgroundColor: "rgba(75,192,192,0.2)",
                      borderColor: "#9ed8b5"
                    }
                  ]
                }}
                className="graph"
              />
            </div>
          </Col>
          <Col
            lg={4}
            md={4}
            sm={12}
            className="cardSection d-flex flex-column justify-content-between p-2 "
          >
            <div className="card1 mt-2 mb-4">
              <div className="desc">
                <h4 className="descHead">Manage University</h4>
                <label className="descText1">
                  Lorem ipsum dolor sit <br />
                  amet consectetur.
                </label>
              </div>
            </div>
            <div className="mb-3 card2">
              <div className="desc d-flex flex-column justify-content-between h-100">
                <div>
                  <h4 className="descHead">Configure curriculum</h4>
                  <label className="descText">
                    Lorem ipsum dolor sit amet <br />
                    consectetur.
                  </label>
                </div>
                <label className="mb-4 descFoot">TOTAL CURRICULUM: 18</label>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="chartSection mt-1  mb-4">
          <Col lg={5} md={5} sm={12} className="piechart">
            <div className=" d-flex flex-row justify-content-between mt-4 p-2">
              <div>
                <span className="sms">SMS and Whatsapp</span>
                <br />
                <span className="mt-4 total">Total purchaced: 17260</span>
              </div>
              <div>
                <Dropdown
                  options={[
                    { label: "All", value: "all" },
                    { label: "Single", value: "single" }
                  ]}
                ></Dropdown>
              </div>
            </div>
            <PieChart />
          </Col>
          <Col lg={7} md={7} sm={12} className="proccebarSec">
            <div className=" d-flex flex-row justify-content-between mt-4 p-2">
              <div>
                <span className="prossText">
                  Top SMS/Whatsapp consumed university
                </span>
              </div>
              <div className="d-flex gap-2">
                <ColorBox color="green" label="SMS" className="fw-bold" />
                <ColorBox color="black" label="Whatsapp" className="fw-bold" />
              </div>
            </div>
            <ProgressBarComp
              bar1={138}
              bar2={124}
              label={"Amity University"}
              id={"HCCOLLEGE0001"}
              bar1Color="#00dc46"
              bar2Color="#01363a"
              barHeight="20px"
              borderRadius="4px"
            />
            <ProgressBarComp
              bar1={96}
              bar2={116}
              label={"Chitkara University"}
              id={"HCCOLLEGE0002"}
              bar1Color="#00dc46"
              bar2Color="#01363a"
              barHeight="20px"
              borderRadius="4px"
            />
            <ProgressBarComp
              bar1={156}
              bar2={324}
              label={"Delhi University"}
              id={"HCCOLLEGE0003"}
              bar1Color="#00dc46"
              bar2Color="#01363a"
              barHeight="20px"
              borderRadius="4px"
            />
          </Col>
        </Row>
      </div>
      <Row className="dashSecsec m-0 p-2">
        <Col className="" lg={8} md={8} sm={12}>
          <div className="graph">
            <div className="d-flex align-items-center gap-2">
              <h2>Employees</h2>
            </div>
            <Graph
              inputData={{
                labels: [
                  "2016",
                  "2017",
                  "2018",
                  "2019",
                  "2020",
                  "2021",
                  "2022",
                  "2023",
                  "2024"
                ],
                datasets: [
                  {
                    data: [0, 0.3, 4, 4.5, 4.9, 6, 7, 4, 8.9, 9, 6, 3],
                    fill: true,
                    backgroundColor: "rgba(75,192,192,0.2)",
                    borderColor: "#6245c5"
                  }
                ]
              }}
              className="graph"
            />
          </div>
        </Col>
        <Col
          lg={4}
          md={4}
          sm={12}
          className="cardSection d-flex flex-column justify-content-between mt-3 mb-3 "
        >
          <div className="card3 mt-2 mb-4">
            <div className="desc">
              <h4 className="descHead">Manage Employers</h4>
              <label className="descText1">
                Lorem ipsum dolor sit <br />
                amet consectetur.
              </label>
            </div>
          </div>
          <div className="mb-2 card4">
            <div className=" d-flex flex-row justify-content-between mt-2 p-2">
              <div>
                <span className="sms">Analytics</span>
              </div>
              <div>
                <Dropdown
                  options={[{ label: "2023-2024", value: "2023-2024" }]}
                ></Dropdown>
              </div>
            </div>
            <div className="p-2 d-flex flex-row justify-content-between border-bottom">
              <div>
                <div className="d-flex flex-column justify-content-between ">
                  <AiOutlineUsergroupDelete size={30} color="#b2b0a3" />
                  <span style={{ color: "#b2b0a3", fontSize: "10px" }}>
                    Total Students
                  </span>
                </div>
                <p className="fw-bold">1,34,877</p>
              </div>

              <div>
                <div className="d-flex flex-column justify-content-between ">
                  <LiaChalkboardTeacherSolid size={30} color="#65ba78" />
                  <span style={{ color: "#b2b0a3", fontSize: "10px" }}>
                    Total Teachers
                  </span>
                </div>
                <p className="fw-bold">12,126</p>
              </div>
              <div>
                <div className="d-flex flex-column justify-content-between ">
                  <IoIosPeople size={30} color="#998ebd" />
                  <span style={{ color: "#b2b0a3", fontSize: "10px" }}>
                    Total Employers
                  </span>
                </div>
                <p className="fw-bold">72,976</p>
              </div>
            </div>
            <div className="p-2 d-flex flex-row justify-content-between">
              <div>
                <div className="d-flex flex-column justify-content-between ">
                  <LuWallet size={30} color="#e59e6b" />
                  <span style={{ color: "#b2b0a3", fontSize: "10px" }}>
                    Total Earnings
                  </span>
                </div>
                <p className="fw-bold">1,34,877</p>
              </div>

              <div>
                <div className="d-flex flex-column justify-content-between ">
                  <TbReceiptDollar size={30} color="#9b8bc8" />
                  <span style={{ color: "#b2b0a3", fontSize: "10px" }}>
                    Total Expenses
                  </span>
                </div>
                <p className="fw-bold">12,126</p>
              </div>
              <div>
                <div className="d-flex flex-column justify-content-between ">
                  <TbNavigationDollar size={30} color="#c1bfb0" />
                  <span style={{ color: "#b2b0a3", fontSize: "10px" }}>
                    Total Profit
                  </span>
                </div>
                <p className="fw-bold">72,976</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
