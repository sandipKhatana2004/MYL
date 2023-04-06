import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="hm-box">
        <h1 className="hm-main-time">Welcome To MYL.</h1>
        <h2 className="hm-shortform">MYL = Manage Your Life</h2>
        <h4 className="hm-2shortform">- MYL is life management tool.</h4>
        <h4 className="hm-use">
          - using MYL you can manage your time, plan your day, set goals, take
          notes and last but not least read qouats or motivatinal lines.
        </h4>

        <button className="hm-button">Sign In / Login</button>
      </div>

      <div className="footer">
        <h6 className="hm-rights">@All Rights Reserved By SandipKhatana.Org</h6>
        <h6 className="hm-developer">Developed By Sandip Khatana</h6>
      </div>
    </div>
  );
};

export default Home;
