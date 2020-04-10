import { Book } from "types/domain";

interface Test{
  a:number,
  b:string,
}

export default {
  books: [] as Array<Book>,
  books2: [] as Array<Test>,
  loading: false,
  flag: 1,
};
