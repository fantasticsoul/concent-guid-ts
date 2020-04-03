import * as React from "react";

interface IProps {
  isActive:boolean;
  label: string;
  onClick: (e:React.SyntheticEvent<HTMLElement>) => void;
  tabName:string;
}

export default ({ isActive, label, onClick, tabName = "" }:IProps) => (
  <li
    className={isActive ? "is-active" : ""}
    data-tab-name={tabName}
    onClick={onClick}
  >
    <a>
      <span>{label}</span>
    </a>
  </li>
);