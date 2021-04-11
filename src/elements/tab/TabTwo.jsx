import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Main skills",
      // tab2 = "Awards",
      // tab3 = "Experience",
      tab4 = "Education & Certification";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    {/* <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab> */}
                    <Tab>{tab4}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="#service">
                            Web Development <span> - Development</span>
                          </a>
                          Build websites and web apps using javascript and it's
                          frameworks. I use technologies like HTML, CSS,
                          Javascript, Python, and tools like: VSCode ,React JS
                          ,Angular, Redux, Codesandbox, Github
                        </li>
                        <li>
                          <a href="#service">
                            Web and user interface design<span> - Design</span>
                          </a>
                          I have experience building UI, Web, Apps, Photos,
                          Logos", tools: "Photoshop, Illustrator, Affinity,
                          Figma, Pen {"&"} Paper
                        </li>
                        <li>
                          <a href="#service">
                            Mechanical Engineering <span> - Engineering</span>
                          </a>
                          Mechanical Design, Problem Solving, Building, Fixing,
                          Designing. I use tools like AutoCAD, SolidWorks, Pen
                          {"&"} Paper, ToolBox.
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  {/* <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Awwwards.com <span>- Winner</span>
                          </a>{" "}
                          2019 - 2020
                        </li>
                        <li>
                          <a href="/service">
                            CSS Design Awards <span>- Winner</span>
                          </a>{" "}
                          2017 - 2018
                        </li>
                        <li>
                          <a href="/service">
                            Design nominees <span>- site of the day</span>
                          </a>{" "}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Sr. Front-end Engineer<span> - Google</span>
                          </a>{" "}
                          2018 - Current
                        </li>
                        <li>
                          <a href="/service">
                            Front-end Engineer<span> - Microsoft</span>
                          </a>{" "}
                          2017 - 2018
                        </li>
                        <li>
                          <a href="/service">
                            Software Engineer<span> - Alibaba </span>
                          </a>{" "}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel> */}

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            BSc In Mechanical Engineering
                            <span> - Mosul University, Iraq</span>
                          </a>{" "}
                          2019
                        </li>
                        <li>
                          <a href="/service">
                            Full-Stack web development certification
                            <span> - Kodluyoruz, Turkey</span>
                          </a>{" "}
                          2021
                        </li>
                        <li>
                          <a href="/service">
                            React Development certification
                            <span> - Re:Coded, IQ</span>
                          </a>{" "}
                          2021
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
