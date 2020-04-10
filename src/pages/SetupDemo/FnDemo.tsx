import * as React from "react";
import "./_model";
import { useConcent, NoMap } from "concent";
import View from "./View";
import { RootState, CtxMS, SetupDemoM } from "types/store";
import { SetupDemo } from "base/constant/moduleName";
import * as e from "base/constant/event";
import { EvMap } from "types/eventMap";

export interface IDemoProps{
  renderBy: string;
}
// private state
export const iState = () => ({
  startTime: 1,
  endTime: 2
});

export type CtxPre = CtxMS<IDemoProps, SetupDemoM, ReturnType<typeof iState>>;

export const setup = (ctx:CtxPre) => {
  ctx.on<EvMap, typeof e.CHANGE_USER_NAME>(e.CHANGE_USER_NAME, (user, name)=>{
    alert(JSON.stringify(user) + ' name:' + name);
  });

  // const getBooks = () => ctx.dispatch("getBooks", ctx.state.reqDate);

  //!!! better than dispatch
  const getBooks = () => { ctx.moduleReducer.getBooks(ctx.state.startTime) };

  ctx.effect(getBooks, []);
  ctx.effect(() => {
    // alert(`mount ${ctx.ccUniqueKey}`);
    // return ()=> alert(`unmount ${ctx.ccUniqueKey}`);
  }, []);

  return {
    getBooks
  };
};

export type Settings = ReturnType<typeof setup>;
export type Ctx = CtxMS<IDemoProps, SetupDemoM, ReturnType<typeof iState>, Settings>;

export default React.memo(function(props) {
  const ctx = useConcent<{}, Ctx, NoMap, RootState, SetupDemoM, typeof iState>({
    module: SetupDemo,
    state: iState,
    setup,
    props
  });
  console.log("%c SetupDemoFnComp " + ctx.ccUniqueKey, "color:green;");
  const {
    // state: { books, loading }
    state: { loading },
    moduleComputed: { books, invalidBookCount },
    settings: { getBooks }
  } = ctx;
  const renderBy = ctx.props.renderBy;

  return (
    <>
      invalidBookCount:{invalidBookCount}
      <View {...{ loading, books, getBooks, renderBy }} />
    </>
  );
}) as React.FC<IDemoProps>;

