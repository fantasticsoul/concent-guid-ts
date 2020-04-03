import { registerHookComp } from "concent";
import * as React from "react";
import { history } from "react-router-concent";
import "./Menu.css";
import Menu from "../dumb/Menu";
import Button from "../dumb/Button";
import { CtxDeS } from 'types/store';

const { Label, List, ListItem } = Menu;
const btnIs = ["small", "info"];

const state = {
  visible: false,
  activeKeys: []
};
type CtxPre = CtxDeS<{}, typeof state>;

const setup = (ctx:CtxPre) => {
  ctx.on("openMenu", () => {
    ctx.setState({ visible: true });
  });
  return {
    handleMenuClick: (key:string) => {
      ctx.setState({ activeKeys: [key] });
      history.push(key);
    }
  };
};

type Ctx = CtxDeS<{}, typeof state, ReturnType<typeof setup>>;
const render = (ctx:Ctx) => {
  console.log("%c Menu", "color:green;");
  if (!ctx.state.visible) return "";

  return (
    <div className="ccMenu">
      <Button
        className="ccMenuCloseBtn"
        onClick={ctx.syncBool("visible")}
        bulmaIs={btnIs}
      >
        close
      </Button>
      <Menu
        activeKeys={ctx.state.activeKeys}
        onClick={ctx.settings.handleMenuClick}
      >
        <Label>code snippet</Label>
        <List>
          <ListItem key="/setup-demo">show setup</ListItem>
        </List>
        <Label>ref api course</Label>
        <List>
          <ListItem key="api_1">setState</ListItem>
          <ListItem key="api_2">dispatch</ListItem>
          <ListItem key="api_3">invoke</ListItem>
          <ListItem key="api_4">setup</ListItem>
        </List>
      </Menu>
    </div>
  );
};

export default registerHookComp<{}, Ctx>({
  state,
  setup,
  render,
});
