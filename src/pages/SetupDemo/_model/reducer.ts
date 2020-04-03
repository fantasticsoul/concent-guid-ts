import * as bookServ from "../../../services/book";
import { IActionCtx } from 'concent';
import { RootState, RootComputed, SetupDemoM } from '../../../types/store';

type Ac = IActionCtx<RootState, RootComputed, SetupDemoM>;

export async function getBooks(_:{}, moduleState:RootState[SetupDemoM], action:Ac) {
  await action.setState({ loading: true, books: [] });
  const { data: books } = await bookServ.getBooks();
  return { books, loading: false };
}
