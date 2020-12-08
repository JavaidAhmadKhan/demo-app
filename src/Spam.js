import React, { Component } from "react";
import "./Spam.css";
import SpamData from "./spam.json";

class Spam extends Component {
  render() {
    return (
      <div className="inbox">
        {SpamData.map((spamDetail, index) => {
          return (
            <div>
              <h2>{spamDetail.mId}</h2>
              <h3>{spamDetail.subject}</h3>
              <p>{spamDetail.content}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Spam;
