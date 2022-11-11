import React, { FC, ReactNode } from "react";
type Props = {
  children: ReactNode;
  textColor: string;
};
const Button: FC<Props> = (props) => {
  return <button style={{ color: props.textColor }}>{props.children}</button>;
};

export default Button;
