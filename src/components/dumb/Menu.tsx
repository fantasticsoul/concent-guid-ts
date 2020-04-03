import * as React from "react";

const cmap = React.Children.map;
const clone = React.cloneElement;

type onClick = (e: React.MouseEvent<HTMLElement>) => void

function isEl(child:React.ComponentElement<any, any>, elName:string) {
  return child.type.name === elName;
}

type ItemOnClick = (key:string, e: React.MouseEvent<HTMLElement>) => void

function attachUserProps(children:React.ComponentElement<any, any>[], onClick:ItemOnClick, activeKeys:string[] = []) {
  // return children;
  if (children) {
    const nv = cmap(children, child => {
      if (isEl(child, "List")) {
        const { children: listChildren, ...otherProps } = child.props;
        const clonedListCildren = cmap(listChildren, listChild => {
          if (isEl(listChild, "ListItem")) {
            const { children, ...otherProps } = listChild.props;
            const key = listChild.key;
            otherProps.isActive = activeKeys.indexOf(key) >= 0;
            otherProps.onClick = (e:React.MouseEvent<HTMLElement>) => onClick(key, e);
            return clone(listChild, otherProps);
          }
          return listChild;
        });

        return clone(child, otherProps, clonedListCildren);
      }
      return child;
    });

    return nv;
  }

  return "";
}

//MenuLabel ListItem
const Menu = ({ children, onClick, activeKeys = [] }: { onClick: ItemOnClick, children: React.ComponentElement<any, any>[], activeKeys: string[] }) => {
  return (
    <aside className="menu">
      {attachUserProps(children, onClick, activeKeys)}
    </aside>
  );
};

const Label = ({ children }: { children?: React.ReactNode }) => {
  return <p className="menu-label">{children}</p>;
};

// ListItem or SubList
const List = ({ children }: { children?: React.ReactNode }) => {
  return <ul className="menu-list">{children}</ul>;
};

type OnClick = (ev: React.ChangeEvent<EventTarget>) => void;
interface IListItemProps {
  children: React.ReactNode;
  isActive?: boolean;
}
const ListItem = (props: IListItemProps) => {
  //使用联合类型，临时加上onClick属性
  const { children, isActive = false, onClick } = props as (IListItemProps & {onClick?: OnClick});

  return (
    <li>
      <a className={isActive ? "is-active" : ""} onClick={onClick}>
        {children}
      </a>
    </li>
  );
};

// SubListLabel or SubListContent
const SubList = ({ children }: { children?: React.ReactNode }) => {
  return <li>{children}</li>;
};

const SubListLabel = ({ label, isActive = false }: {label?:string, isActive:boolean}) => {
  return <a className={isActive ? "is-active" : ""}>{label}</a>;
};

const SubListContent = ({ children }: { children?: React.ReactNode }) => {
  return <ul>{children}</ul>;
};

Menu.Label = Label;
Menu.List = List;
Menu.ListItem = ListItem;
Menu.SubList = SubList;
Menu.SubListLabel = SubListLabel;
Menu.SubListContent = SubListContent;

export default Menu;
