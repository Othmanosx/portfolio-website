import React, { Component } from "react";

class BrandTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "30px",
            textAlign: "center",
            color: "#6c757d"
          }}
        >
          I'm proud to have collaborated with some awesome companies
        </p>

        <ul style={{ filter: "invert(1)" }} className="brand-style-2">
          <li>
            <img src="/assets/images/brand/digiarty.png" alt="Logo Images" />
          </li>
          <li>
            <img src="/assets/images/brand/gearbest.svg" alt="Logo Images" />
          </li>
          <li>
            <img src="/assets/images/brand/imobie.svg" alt="Logo Images" />
          </li>
          <li>
            <img src="/assets/images/brand/imyfone.svg" alt="Logo Images" />
          </li>
          <li>
            <img src="/assets/images/brand/leawo.webp" alt="Logo Images" />
          </li>
          <li>
            <img src="/assets/images/brand/tenorshare.svg" alt="Logo Images" />
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
export default BrandTwo;
