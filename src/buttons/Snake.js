import React, { Component } from 'react';
import Svg,{
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Use,
  Defs,
  Stop
} from 'react-native-svg';

export default class Refresh extends Component {
    render() {
      return (
        <Svg
          height="35"
          width="35"
          backgroundColor='red'
          >
          <Defs>
              <G id="shape">
                  <G>
                      <Circle cx="5" cy="20" r="10" />
                      <Rect x="5" y="20" width="10" height="10" />
                      <Circle cx="5" cy="20" r="1" fill="blue" />
                  </G>
              </G>
          </Defs>
          <Use href="#shape" x="20" y="0"/>
          <Use href="#shape" x="170"y="0" />
        </Svg>
      );
  }
}
