import React from "react";
import Header from "./Header";

class InboxEmail extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          mId: "guid-3",
          unread: true,
          subject: "Pre Approved Loan",
          content:
            "Congratulations ! <u>Credit card<u> is being shipped to you today!",
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
      <div className="inbox-api">
        {this.state.sections.map(({ mId, unread, subject, content }) => (
          <Header key={mId} title={subject} content={content} unread={true} />
        ))}
      </div>
    );
  }
}

export default InboxEmail;
