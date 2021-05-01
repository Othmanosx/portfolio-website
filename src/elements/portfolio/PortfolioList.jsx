import React, { Component } from "react"

const PortfolioListContent = [
  {
    image: "image-1",
    category: "React JS",
    title: "Weather App",
    link: "https://weather-app-othman.netlify.app/",
    repo: "https://github.com/Othmanosx/weather_app_js",
    info:
      "Weather forecasts over a 6 day period updated each day for more than 2000 cities in the world.",
  },
  {
    image: "image-2",
    category: "Javascript",
    title: "iTECH Website",
    link: "https://www.itechnopro.com/",
    info: "Technology blog with news, tips and tricks about mobile devices",
  },
  {
    image: "image-3",
    category: "React JS",
    title: "Hangman Game",
    link: "https://hangman-sand-team.netlify.app/",
    repo: "https://github.com/Othmanosx/hangman_react_js",
    info: "Word guessing game created using ReactJS",
  },
  {
    image: "image-4",
    category: "Javascript",
    title: "iTECH APPS",
    link: "https://www.itechnoapps.com/",
    info: "Apps and games web store for iPhones and iPads",
  },
  {
    image: "image-5",
    category: "React JS",
    title: "FindYours",
    link: "https://findyours.netlify.app",
    repo: "https://github.com/murtaja1/find_yours",
    info: "A platform to help people post and find their missing stuff online",
  },
]

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props
    const list = PortfolioListContent.slice(0, this.props.item)
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
