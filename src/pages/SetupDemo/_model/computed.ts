import { BookCu } from "types/biz";
import { SetupDemoState } from "types/store";
import { defComputed, defComputedVal } from 'concent';

export function books({books}:SetupDemoState): BookCu[] {
  return books.map(v => {
    const clonedV = { ...v } as BookCu;
    clonedV._publishTimeLabel = new Date(v.publishTime).toLocaleString();
    return clonedV;
  });
}

export const val2 = defComputed(()=>{
  return 'gogogo';
}, []);

export const invalidBookCount = defComputedVal(0);
