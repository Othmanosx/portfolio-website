import { useEffect } from "react"
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa"
import { FiX, FiMenu } from "react-icons/fi"
import Scrollspy from "react-scrollspy"
import { event } from "@/utils/gtag"
import GhostLogo from "./GhostLogo"

const SocialShare = [
  {
    title: "Facebook",
    Social: <FaFacebookF />,
    link: "https://www.facebook.com/iothmanosx",
  },
  {
    title: "LinkedinIn",
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/othmanosx",
  },
  {
    title: "Instagram",
    Social: <FaInstagram />,
    link: "https://www.instagram.com/othmanosx",
  },
  {
    title: "Twitter",
    Social: <FaTwitter />,
    link: "https://twitter.com/othmanosx",
  },
  {
    title: "Github",
    Social: <FaGithub />,
    link: "https://github.com/othmanosx",
  },
]

const Header = ({ color = "default-color", homeLink }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(".has-droupdown > a")
    for (const i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          parentElement.querySelector(".submenu").classList.toggle("active")
          classList.toggle("open")
        }
      }
    }

    window.addEventListener("scroll", function () {
      const value = window.scrollY
      if (value > 10) {
        document.querySelector(".header--fixed").classList.add("sticky")
      } else {
        document.querySelector(".header--fixed").classList.remove("sticky")
      }
    })
  }, [])

  const menuTrigger = () => {
    document.querySelector(".header-wrapper").classList.toggle("menu-open")
  }

  const closeMenuTrigger = () => {
    document.querySelector(".header-wrapper").classList.remove("menu-open")
  }
  const links = ["home", "portfolio", "service", "about", "contact"]
  return (
    <header className={`header-area header-style-two header--fixed ${color}`}>
      <div className="header-wrapper">
        <div className="header-left d-flex align-items-center">
          <div className="logo">
            <a
              href={homeLink}
              className="d-block"
              style={{ width: "30px", opacity: 0.8 }}
            >
              <GhostLogo />
            </a>
          </div>
          <nav className="mainmenunav d-lg-block ml--50">
            <Scrollspy
              className="mainmenu"
              items={links}
              currentClassName="is-current"
              offset={-200}
            >
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    onClick={() =>
                      event({
                        action: link + "_nav_click",
                        category: "navigation",
                      })
                    }
                  >
                    {link}
                  </a>
                </li>
              ))}
            </Scrollspy>
          </nav>
        </div>
        <div className="header-right">
          <div className="social-share-inner">
            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
              {SocialShare.map((val, i) => (
                <li key={i}>
                  <a
                    href={`${val.link}`}
                    onClick={() =>
                      event({
                        action: "social_nav_click_" + val.title,
                        category: "social links",
                      })
                    }
                  >
                    {val.Social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="header-btn"
            onClick={() =>
              event({
                action: "contact_nav_click",
                category: "nav buttons",
              })
            }
          >
            <a className="rn-btn ml-4" href="#contact">
              <span>Contact me</span>
            </a>
          </div>
          {/* Start Humberger Menu  */}
          <div className="humberger-menu d-block d-lg-none pl--20">
            <span onClick={menuTrigger} className="menutrigger text-white">
              <FiMenu />
            </span>
          </div>
          {/* End Humberger Menu  */}
          <div className="close-menu d-block d-lg-none">
            <span onClick={closeMenuTrigger} className="closeTrigger">
              <FiX />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
