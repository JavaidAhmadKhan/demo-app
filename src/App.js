import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import Spam from "./Spam";
import Inbox from "./Inbox";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      <Router>
        {/* {!user ? (
          <Login />
        ) : (
          <> */}
        <Header />

        <div className="app__body">
          <Sidebar />
        </div>
        {/* </>
        )} */}
      </Router>
    </div>
  );
}

export default App;
