import state from "./state";
import * as computed from "./computed";
import { SetupDemoState } from 'types/store';

export default {
  state,
  computed,
  init: async function():Promise<Partial<SetupDemoState>> {
    return { flag: 1 };
  },
  // init: function():Partial<SetupDemoState> {
  //   return {
  //     flag: 1,
  //   }
  // }
}
