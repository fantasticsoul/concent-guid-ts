import * as timerUitl from "../utils/timer";
import * as numUitl from "../utils/number";
import { Book } from "../types/domain";

function mockBooks(): Book[] {
  return [
    {
      id: "1",
      name: "love concent " + numUitl.random(19),
      author: "zzk",
      summary:
        "Concent is a predictable、zero-cost-use、progressive、high performance's enhanced state management solution, power your react",
      publishTime: 1573970355691 + numUitl.random(100000)
    },
    {
      id: "2",
      name: "black hole " + numUitl.random(10),
      author: "link",
      summary:
        "an area in space that nothing, not even light, can escape from, because gravity (= the force that pulls objects in space towards each other) is so strong there",
      publishTime: 1573970353888 + numUitl.random(100000)
    }
  ];
}

export async function getBooks() {
  await timerUitl.delay();
  let loopCount = numUitl.random(8, 2);
  let books: Book[] = [];
  while (loopCount > 0) {
    books = books.concat(mockBooks());
    loopCount--;
  }

  return {
    code: 0,
    data: books
  };
}
