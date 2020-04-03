import { Address } from "../../types/biz";

export function getInitialState(){
  return {
    fooKey1: '',
    fooKey2: '',
    addrList: [] as Address[],
  }
}

export default getInitialState()