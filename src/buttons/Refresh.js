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
      <Svg style={this.props.style}
        height="32"
        width="32"
        >
        <Path d="M2470 5099 c-323 -37 -654 -157 -883 -320 -445 -316 -712 -793 -782
        -1394 -8 -71 -15 -153 -15 -182 l0 -52 -364 -3 -364 -3 -26 -24 c-32 -30 -42
        -73 -24 -108 17 -34 1148 -1485 1192 -1530 40 -41 82 -49 122 -24 30 18 1188
        1491 1218 1550 9 16 16 35 16 41 0 27 -33 78 -56 89 -17 7 -135 11 -378 11
        l-353 0 4 98 c26 684 207 1189 551 1539 90 91 184 164 320 248 50 31 95 61 98
        66 6 11 -173 10 -276 -2z"/>
        <Path d="M3794 3661 c-30 -18 -1188 -1491 -1218 -1550 -9 -16 -16 -35 -16 -41
        0 -27 33 -78 56 -89 17 -7 135 -11 378 -11 l353 0 -4 -97 c-31 -830 -295
        -1407 -793 -1737 -52 -35 -114 -74 -137 -87 -24 -13 -43 -27 -43 -31 0 -5 39
        -8 88 -8 190 0 423 40 621 106 620 207 1054 711 1200 1394 24 108 51 329 51
        407 l0 52 364 3 364 3 26 24 c32 30 42 73 24 108 -17 34 -1148 1485 -1192
        1530 -40 41 -82 49 -122 24z"/>
      </Svg>
    );
  }
}