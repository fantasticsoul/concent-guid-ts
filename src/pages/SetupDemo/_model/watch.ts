import { defWatch, IFnCtx, ICtxBase } from "concent";
import { SetupDemoState, SetupDemoCu } from "../../../types/store";

type FnCtx = IFnCtx<ICtxBase, SetupDemoState, SetupDemoCu>;


// better than export function books(){}

export const books = defWatch<SetupDemoState, FnCtx>(({ books }, _, fnCtx) => {
  console.log('books.length ', books.length);
  if (books.length > 5) {
    fnCtx.commitCu({ invalidBookCount: 3 * Math.ceil(Math.random() * 8) });
  } else if (books.length > 10) {
    fnCtx.commitCu({ invalidBookCount: 100 });
  }
}, { compare: false, immediate: true });
