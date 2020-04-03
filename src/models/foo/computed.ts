import { defComputed, defComputedVal, IFnCtxBase } from "concent";
import { FooState } from "../../types/store";

export const addrValidCount = defComputed<FooState, string, IFnCtxBase>(({ addrList }) => {
    console.log("--->", addrList);
    // const count = addrList.filter(v => v.isValid).length;
    return 'ssss';
  },
  ["addrList"]
);

export const addrValidCount2 = defComputed((_) => {
  // console.log("--->", addrList);
  // const count = addrList.filter(v => v.isValid).length;
  return 'ssss';
},
["addrList"]
);



export const aa = defComputedVal(22);