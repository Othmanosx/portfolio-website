import React, { Component } from "react";

const PortfolioListContent = [
  {
    image: "image-1",
    category: "React JS",
    title: "Weather App",
    link: "https://weather-app-othman.netlify.app/"
  },
  {
    image: "image-2",
    category: "Javascript",
    title: "iTECH Website",
    link: "https://www.itechnopro.com/"
  },
  {
    image: "image-3",
    category: "React JS",
    title: "Hangman Game",
    link: "https://hangman-sand-team.netlify.app/"
  }
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioListContent.slice(0, this.props.item);
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
                  </h4>
                  <div className="portfolio-button">
                    <a
                      className="rn-btn"
                      href={value.link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
