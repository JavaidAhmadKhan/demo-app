import React from "react";
import "./Inbox.css";

class Inbox extends React.Component {
  constructor() {
    super();
    this.state = {
      inbox: [
        {
          mId: "guid-1",
          unread: true,
          subject: "Training Program",
          content:
            "About Microsoft Virtual Academy.Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.",
        },
        {
          mId: "guid-2",
          unread: false,
          subject: "Empower your future",
          content:
            "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
        },
      ],
    };
  }
  render() {
    return (
      <div className="inbox-api">
        {this.state.inbox.map((inbox) => (
          <p>
            {/* <div className="inbox__mId">{inbox.mId}</div> */}
            {/* <div className="inbox__unread">{inbox.unread}</div> */}
            <div className="inbox__subject">{inbox.subject}</div>
            <div className="inbox__content">{inbox.content}</div>
          </p>
        ))}
      </div>
    );
  }
}

export default Inbox;
