import * as React from "react";
import { register } from "concent";
import { setup, iState, IDemoProps, Ctx } from "./FnDemo";
import View from "./View";
import { RootState, SetupDemoM } from "types/store";
import { SetupDemo } from "base/constant/moduleName";

class ClazzDemo extends React.Component<IDemoProps> {
  state = iState();

  ctx = {} as Ctx;

  render() {
    console.log(
      "%c SetupDemoClazzComp " + this.ctx.ccUniqueKey,
      "color:green;"
    );
    const {
      // state: { books, loading }
      state: { loading },
      moduleComputed: { books },
      settings: { getBooks }
    } = this.ctx;
    const renderBy = this.props.renderBy;

    return <View {...{ loading, books, getBooks, renderBy }} />;
  }
}

export default register<IDemoProps, RootState, SetupDemoM>({
  module: SetupDemo,
  setup
})(ClazzDemo);
