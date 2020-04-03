import * as React from "react";
import Message from "../dumb/Message";
import { register, ICtxCommon, IRootBase } from "concent";
import * as bizCst from "../../base/constant/biz";
import * as e from "../../base/constant/event";
import { EvMap } from "../../types/eventMap";
import Button from "../dumb/Button";

const { PAGE_DEFAULT, PAGE_SETUP_DEMO } = bizCst;
const btnIs = ["small", "info"];

interface PathDesc {
  [key:string]:{title:string, content:React.ReactNode}
}

const pathname_desc_: PathDesc = {
 [PAGE_SETUP_DEMO]: {
    title: "now you are at setup-demo",
    content: (
      <>
        This case show you how to use setup in function component with
        useConcent api, and use setup in class component with register api, and
        what the awesome thing is you will find the class and function share the
        business logic code elegantly!!!
        <br />
        <span className="tag is-info is-light">
          <a href="https://codesandbox.io/s/concent-guide-xvcej">
            Here see source code
          </a>
        </span>
        <br />
        <span className="tag is-info is-light">
          <a href="https://github.com/concentjs/concent">More about Concent</a>
        </span>
      </>
    )
  }
};

const defaultPathname = window.location.pathname;

const setup = (ctx: ICtxCommon<{}, {pathname:string}>) => {
  ctx.on("onUrlChanged", params => {
    const pathname = params.pathname;
    ctx.setState({ pathname });
  });

  const user = {id:'1', name:'ok', age:22, email:['xxx']};

  return {
    emitFoo: () => {
      ctx.emit<EvMap, typeof e.CHANGE_USER_NAME>(e.CHANGE_USER_NAME, user, 'xxx');
    }
  };
};

type Ctx = ICtxCommon<{}, {pathname:string}, ReturnType<typeof setup>>;


export default register<{}, IRootBase>({ setup })(
  class extends React.Component {
    state = { pathname: defaultPathname };
    ctx =  {} as Ctx;
    getDesc = () => {
      const { pathname } = this.state;
      let desc = pathname_desc_[pathname];
      if (!desc) {
        if (pathname !== "/") {
          desc = {
            title: `${pathname}`,
            content: "no desc for current pathname"
          };
        } else {
          desc = pathname_desc_[PAGE_SETUP_DEMO];
        }
      }
      return desc;
    };

    render() {
      const desc = this.getDesc();
      return (
        <>
          <Message {...desc} />
          <Button
            className="cc_emitBtn"
            onClick={this.ctx.settings.emitFoo}
            bulmaIs={btnIs}
          >
            emit to change a book
          </Button>
        </>
      );
    }
  }
);
