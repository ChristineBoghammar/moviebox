// @flow
import React, { Component } from "react";

type Props = {
  color: string,
  children: any
};
type State = {};

export default class Test extends Component<Props, State> {
  render() {
    const { color = "red", children } = this.props;
    return (
      <div style={{ color }} className="Test">
        {children}
      </div>
    );
  }
}