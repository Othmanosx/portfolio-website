import Head from "next/head"
import HotJar from "@/components/HotJar"
import Header from "@/components/Header"
import PortfolioList from "@/components/PortfolioList"
import Particles from "@/components/Particles"
import { event } from "@/utils/gtag"
import ScrollToTop from "react-scroll-up"
import { FiChevronUp } from "react-icons/fi"
import Footer from "@/components/Footer"
import Tab from "@/components/Tab"
import Contact from "@/components/Contact"
import ServiceList from "@/components/ServiceList"
import Brand from "@/components/Brands"
import "bootstrap/dist/css/bootstrap.css"
import Image from "next/image"

export default function Home() {
  let title = "About Me",
    description =
      "Since beginning my journey nearly 8 years ago, I've done remote work for agencies and collaborated with talented people to create digital content for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one problem at a time."
  return (
    <main>
      <div className="active-dark">
        <HotJar />
        <Header homeLink="/" color="color-black" />
        {/* Start Hero Area   */}
        <div
          id="home"
          className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image"
        >
          <Image
            src="/assets/images/bg/portrait.jpg"
            fill
            style={{
              backgroundColor: "#101010",
              backgroundPosition: "50%",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
            }}
            alt="personal photo"
          />
          <Particles />
          <div
            className="container"
            style={{
              pointerEvents: "none",
            }}
          >
            <div className="inner text-left">
              <span>Welcome to my World</span>
              <h1 className="title header__hero--heading">
                <span>turning ideas into </span> <br />
                <span>real life </span>
                <span className="header__hero--heading-gradient">products</span>
                <br />
                <span>is my calling.</span>
              </h1>
              <div className="d-flex my-5">
                <div
                  role="button"
                  className="header-area color-black header-btn pointer-events-all"
                >
                  <a
                    className="rn-btn"
                    href={"/Othman_CV.pdf"}
                    onClick={() =>
                      event({
                        action: "download_cv",
                        category: "hero",
                        label: "download CV",
                      })
                    }
                    download="Frontend_Web_Developer_Othman_CV.pdf"
                  >
                    <span>Download CV</span>
                  </a>
                </div>
                <div
                  role="button"
                  className="header-area color-black header-btn pointer-events-all"
                >
                  <a
                    onClick={() =>
                      event({
                        action: "view_projects_btn_click",
                        category: "hero",
                        label: "View Projects",
                      })
                    }
                    className="rn-btn ml-4"
                    href="#portfolio"
                  >
                    <span>View Projects</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Hero Area   */}

        {/* Start Portfolio Area */}
        <div id="portfolio" className="fix z-10 position-relative">
          <div className="portfolio-area ptb--120 bg_color--1">
            <div className="portfolio-sacousel-inner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                      <h2 className="title">Some of my work</h2>
                      <p>
                        Here are a few projects I&apos;ve worked on recently.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <PortfolioList
                    styevariation="text-center mt--40"
                    column="col-lg-4 col-md-6 col-sm-6 col-12"
                  />
                </div>
                {/* <div className="row">
                <div className="col-lg-12">
                  <div className="view-more-btn mt--60 mt_sm--30 text-center">
                    <a className="rn-button-style--2 btn-solid" href="/blog">
                      <span>View More</span>
                    </a>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Area */}

        {/* Start Service Area  */}
        <div id="service" className="fix">
          <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                    <h2 className="title">Services</h2>
                  </div>
                </div>
              </div>
              <div className="row creative-service">
                <div className="col-lg-12">
                  <ServiceList
                    item="3"
                    column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Service Area  */}

        {/* Start About Area */}
        <div id="about" className="fix z-10 position-relative">
          <div className="about-area ptb--120  bg_color--1">
            <div className="about-wrapper">
              <div className="container about-container">
                <div className="row row--35 align-items-center">
                  <div className="col-lg-12">
                    <div className="about-inner inner">
                      <div className="section-title">
                        <h2 className="title">{title}</h2>
                        <div>
                          <div className="row row--35 align-items-center">
                            <div className="col-md-3">
                              <div className="thumbnail">
                                <Image
                                  className="w-100"
                                  src={"/avatar.jpg"}
                                  alt="About Images"
                                  width={170}
                                  height={158.29}
                                />
                              </div>
                            </div>
                            <div className="col-md-9">
                              <p className="description">{description}</p>
                            </div>
                          </div>

                          <div className="row mt--30">
                            <Tab tabStyle="tab-style--1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End About Area */}

        {/* Start Brand Area */}

        <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Brand />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}

        {/* Start COntact Area */}
        <div id="contact" className="fix z-10 position-relative">
          <div className="rn-contact-area ptb--120 bg_color--1">
            <Contact
              contactImages="/assets/images/about/about-9.jpg"
              contactTitle="Let's Talk."
            />
          </div>
        </div>
        {/* End COntact Area */}

        <Footer />
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </div>
    </main>
  )
}
