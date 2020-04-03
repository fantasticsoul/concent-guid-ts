  
import * as React from "react";
import { IAnyObj } from "concent";

interface IProps {
  className?: string;
  bulmaIs?: string[];
  children?: React.ReactNode;
  style?: IAnyObj;
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * bulma button @see https://bulma.io/documentation/elements/button/
 * in:
 * <Button blumaIs={['small', 'dark']}>open menu</Button>
 * out:
 * <button class="button is-small is-dark">White</button>
 */

const Button: React.FC<IProps> = ({
  className = "",
  bulmaIs = [],
  children,
  onClick,
  style = {}
}) => {
  const mergedCls = `button ${bulmaIs
    .map(v => `is-${v}`)
    .join(" ")} ${className}`;
  return (
    <button style={style} className={mergedCls} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;