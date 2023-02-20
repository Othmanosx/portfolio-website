import React, { Component } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { event } from "@/utils/gtag"

class TabsTwo extends Component {
  render() {
    const { tabStyle } = this.props
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>
                      <div
                        role="tab"
                        onClick={() =>
                          event({
                            action: "main_skills_tab_click",
                            category: "portfolio",
                          })
                        }
                      >
                        Main skills
                      </div>
                    </Tab>
                    <Tab>
                      <div
                        role="tab"
                        onClick={() =>
                          event({
                            action: "edu_cert_tab_click",
                            category: "portfolio",
                          })
                        }
                      >
                        Education & Certification
                      </div>
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <h6>
                            Web Development <span> - Development</span>
                          </h6>
                          I&apos;m primarily a Frontend Engineer, I love
                          building websites and web apps using javascript,
                          typescript and their frameworks. I use technologies
                          like HTML, CSS, Javascript, typescript, and tools
                          like: VSCode ,React JS ,Next JS, Redux, Mongodb, Git,
                          Github, Vite, and more.
                        </li>
                        <li>
                          <h6>
                            Web and user interface design<span> - Design</span>
                          </h6>
                          I have experience building UI, Websites, Apps, Photos,
                          Logos with tools like Photoshop, Illustrator, Figma,
                          Pen {"&"} Paper
                        </li>
                        <li>
                          <h6>
                            Mechanical Engineering <span> - Engineering</span>
                          </h6>
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
                          <h6>
                            Awwwards.com <span>- Winner</span>
                          </h6>{" "}
                          2019 - 2020
                        </li>
                        <li>
                          <h6>
                            CSS Design Awards <span>- Winner</span>
                          </h6>{" "}
                          2017 - 2018
                        </li>
                        <li>
                          <h6>
                            Design nominees <span>- site of the day</span>
                          </h6>{" "}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <h6>
                            Sr. Front-end Engineer<span> - Google</span>
                          </h6>{" "}
                          2018 - Current
                        </li>
                        <li>
                          <h6>
                            Front-end Engineer<span> - Microsoft</span>
                          </h6>{" "}
                          2017 - 2018
                        </li>
                        <li>
                          <h6>
                            Software Engineer<span> - Alibaba </span>
                          </h6>{" "}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel> */}

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <h6>
                            Mechanical Engineering
                            <span> - Mosul University, Iraq, 2019</span>
                          </h6>{" "}
                          Bachelor&apos;s degree in applied science from the
                          collage of mechanical engineering in Mosul, Iraq.
                        </li>
                        <li>
                          <h6>
                            Full-Stack web development certification
                            <span> - Kodluyoruz, Turkey, 2021</span>
                          </h6>{" "}
                          In-depth 2-month-long full-stack coding bootcamp in
                          Turkey with technologies like Python, Javascript and
                          Angular.
                        </li>
                        <li>
                          <h6>
                            React Development certification
                            <span> - Re:Coded, Iraq, 2021</span>
                          </h6>{" "}
                          Immersive 5-month-long course, with over 400 hours of
                          coding and an acceptance rate of {"<6%"}.<br />
                          HTML, CSS, Javascript, React Additional Coursework on
                          teamwork, project management, agile methodologies and
                          technologies and tools like Redux state management
                          library, Firebase Firestore Cloud database, Jest
                          testing framework, Figma prototype and UX/ UI design
                          tool, continuous integration and Agile software
                          development. Designed user interfaces using Figma and
                          converted sketches and wireframes to functional
                          reusable UI components using React JavaScript. Built
                          projects from zero to production level.
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
    )
  }
}

export default TabsTwo
