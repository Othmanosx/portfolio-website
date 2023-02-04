import React, { Component } from "react"

const PortfolioListContent = [
  {
    image: "image-8",
    category: "Next JS, Javascript, Bootstrap, Redux Toolkit",
    title: "Monovat",
    link: "https://monovat.vercel.app/",
    info: "A landing page for a dental supplies and medical 3D printers company",
  },
  {
    image: "image-7",
    category: "React JS, Javascript, Material UI, Redux",
    title: "MyTV+ Ads",
    link: "https://mytvadz.com",
    info: "An enterprise grade advertisement platform for businesses to create and manage their own advertisement campaigns.",
  },
  {
    image: "image-4",
    category:
      "Next JS, Typescript, Nodejs, Mongodb, Bootstrap, Redux, Firebase, PWA",
    title: "Appollow",
    link: "https://www.appollow.net",
    info: "A PWA website and mobile app to help people share and find discounted apps and games.",
  },
  {
    image: "image-10",
    category: "HTML, CSS",
    title: "Appollow Teaser",
    link: "https://appollow-teaser.vercel.app/",
    info: "A teaser website for Appollow built with HTML and CSS with some animations.",
  },
  {
    image: "image-11",
    category:
      "Next JS, Typescript, GraphQL, Apollo, Web 3, Chakra UI, BigNumberjs, Framer-Motion",
    title: "GraphQL Web 3",
    link: "https://hal-othman.vercel.app/",
    repo: "https://github.com/Othmanosx/hal-web3-graphql",
    info: "A simple Web 3 app built with GraphQL API",
  },
  {
    image: "image-12",
    category: "TypeScript, Nextjs, Firebase, SASS",
    title: "Fullstack E-commerce POC",
    link: "https://bejamas-othman.vercel.app/",
    repo: "https://github.com/Othmanosx/bejamas-ecommerce-poc",
    info: "A simple Fullstack E-Commerce proof of concept",
  },
  {
    image: "image-5",
    category: "React JS, Javascript, Material UI, Context API",
    title: "FindYours",
    link: "https://findyours.netlify.app",
    repo: "https://github.com/murtaja1/find_yours",
    info: "A platform to help people post and find their missing stuff online",
  },
  {
    image: "image-1",
    category: "React JS , Javascript, HTML, CSS",
    title: "Weather App",
    link: "https://weather-app-othman.netlify.app/",
    repo: "https://github.com/Othmanosx/weather_app_js",
    info: "Weather forecasts over a 6 day period updated each day for more than 2000 cities in the world.",
  },
  {
    image: "image-3",
    category: "React JS, Javascript, HTML, CSS",
    title: "Hangman Game",
    link: "https://hangman-sand-team.netlify.app/",
    repo: "https://github.com/Othmanosx/hangman_react_js",
    info: "Word guessing game created using ReactJS",
  },
  {
    image: "image-2",
    category: "Javascript, HTML, CSS, Blogger CMS",
    title: "iTECH Website",
    link: "https://www.itechnopro.com/",
    info: "Technology blog with news, tips and tricks about mobile devices",
  },
]

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props
    const list = PortfolioListContent
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
                <div className={`thumbnail ${value.image}`}></div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  <p>{value.category}</p>
                  <h4>
                    <a href={value.link} rel="noreferrer" target="_blank">
                      {value.title}
                    </a>
                    <div
                      style={{
                        fontSize: "12px",
                        lineHeight: "normal",
                        color: "rgb(219, 219, 219)",
                      }}
                    >
                      {value.info}
                    </div>
                  </h4>
                  <div className="postButtons">
                    {value.link ? (
                      <div className="portfolio-button">
                        <a
                          className="rn-btn"
                          href={value.link}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Live
                        </a>
                      </div>
                    ) : null}
                    {value.repo ? (
                      <div className="portfolio-button">
                        <a
                          className="rn-btn"
                          href={value.repo}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Repo
                        </a>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    )
  }
}
export default PortfolioList
