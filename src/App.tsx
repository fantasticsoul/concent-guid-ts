import * as React from "react";
import { emit } from "concent";
import "reactbulma";
import "bulma/css/bulma.css";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import { ConnectRouter } from "react-router-concent";
import Button from "./components/dumb/Button";
import NotFound from "./components/dumb/NotFound";
import Menu from "./components/biz-smart/Menu";
import Header from "./components/biz-smart/Header";
import SetupDemo from "./pages/SetupDemo";
import * as bizCst from "./base/constant/biz";

const { PAGE_SETUP_DEMO } = bizCst;

class Layout extends React.Component {
  state = {
    visible: false
  };
  openMenu = () => {
    emit("openMenu");
  };
  openRecordLogDrawer = () => {
    this.setState({ visible: true });
  };
  render() {
    return (
      <div>
        <Button
          bulmaIs={["small", "info"]}
          onClick={this.openMenu}
          className="cc_openMenuBtn"
        >
          open menu
        </Button>
        <Header />
        <div className="box">
          <Switch>
            <Route exact path="/" component={SetupDemo} />
            <Route path={PAGE_SETUP_DEMO} component={SetupDemo} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Menu />
      </div>
    );
  }
}

export default () => (
  <HashRouter>
    <ConnectRouter>
      <Route path="/" component={Layout} />
    </ConnectRouter>
  </HashRouter>
);
