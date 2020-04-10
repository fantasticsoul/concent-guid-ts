import * as React from "react";
import BookItem from "components/biz-dumb/BookItem";
import Button from "components/dumb/Button";
import { BookCu } from "types/biz";

interface IProps {
  loading: boolean;
  getBooks: ()=>void;
  books: BookCu[];
  renderBy: string;
}
export default ({ loading, getBooks, books, renderBy }: IProps) => {
  return (
    <>
      {loading ? (
        <progress className="progress is-small is-primary" max="100">
          60%
        </progress>
      ) : (
          ""
        )}
      <div>
        <Button bulmaIs={["small", "primary"]} onClick={getBooks}>
          refresh
        </Button>
        <span className="tag is-info is-light" style={{ float: "right" }}>
          current component is rendered by &nbsp;&nbsp;
          <span className="tag is-danger">{renderBy} </span>
          &nbsp;&nbsp; -- book total: {books.length}
        </span>
      </div>
      {books.map((v, idx) => (
        <BookItem key={idx} {...v} />
      ))}
    </>
  );
};
