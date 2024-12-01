"use client"

import React from "react";

const WIDTH = 1000;

type DiagonalProps = {
  color: string;
  ratio?: number;
  flip?: boolean;
};

export default class Diagonal extends React.PureComponent<DiagonalProps> {
  static defaultProps = {
    ratio: 0.2,
    flip: false,
  };

  computePoints() {
    const { ratio, flip } = this.props;
    const height = WIDTH * (ratio || 0.2);
    if (flip) {
      return [
        [0, height],
        [WIDTH, height],
        [WIDTH, 0],
      ];
    } else {
      return [
        [0, 0],
        [0, height],
        [WIDTH, height],
      ];
    }
  }

  render() {
    const { color, ratio, ...props } = this.props;

    const svgPoints = this.computePoints()
      .map(point => point.join(","))
      .join(" ");
    return (
      <svg {...props} viewBox={`0 0 ${WIDTH} ${ratio! * WIDTH}`}>
        <polygon points={svgPoints} style={{ fill: color }} />
      </svg>
    );
  }
}