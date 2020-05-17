import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AboutUs from "./pages/about-us/about-us";
import ContactUs from "./pages/contact-us/contact-us";
import Home from "./pages/home/home";
class MainRouter extends Component {
  componentDidMount() {
    const jssStyles = document.getElementById("jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/aboutUs" component={AboutUs} />
        </Switch>
      </div>
    );
  }
}
export default MainRouter;
