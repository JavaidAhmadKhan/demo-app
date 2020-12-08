import React, { Component } from "react";
import "./Inbox.css";
import InboxData from "./inbox.json";

class Inbox extends Component {
  render() {
    return (
      <div className="inbox">
        {InboxData.map((inboxDetail, index) => {
          return (
            <div>
              <h2>{inboxDetail.mId}</h2>
              <h3>{inboxDetail.subject}</h3>
              <p>{inboxDetail.content}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Inbox;
