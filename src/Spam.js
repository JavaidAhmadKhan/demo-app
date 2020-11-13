import React from "react";
import "./Spam.css";

class Spam extends React.Component {
  constructor() {
    super();
    this.state = {
      spam: [
        {
          mId: "guid-3",
          unread: true,
          subject: "Pre Approved Loan",
          content:
            "Congratulations ! Credit card is being shipped to you today!",
        },
        {
          mId: "guid-4",
          unread: true,
          subject: "You won a lottery!",
          content:
            "You have just won the New York official lottery. Please send us your address so that we may start the transfer.",
        },
      ],
    };
  }
  render() {
    return (
      <div className="spam-api">
        {this.state.spam.map((spam) => (
          <p>
            {/* <div className="inbox__mId">{spam.mId}</div> */}
            {/* <div className="inbox__unread">{spam.unread}</div> */}
            <div className="spam__subject">{spam.subject}</div>
            <div className="spam__content">{spam.content}</div>
          </p>
        ))}
      </div>
    );
  }
}

export default Spam;
