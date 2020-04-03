import * as React from "react";

export default ({ title, content }: { title: string, content: React.ReactNode }) => {
  return (
    <article className="message">
      <div className="message-header" style={{ borderRadius: "0px" }}>
        <p>{title}</p>
        <button className="delete" aria-label="open" />
      </div>
      <div className="message-body">{content}</div>
    </article>
  );
};