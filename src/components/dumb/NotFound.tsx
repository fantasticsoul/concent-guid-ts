import React from "react";

export default ({ content = "Route not defined" }) => {
  return <div className="notification is-danger">{content}</div>;
};
