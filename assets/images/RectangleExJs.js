import * as React from "react"
import Svg, { Rect } from "react-native-svg"

function RectangleExJs(props) {
    return (
        <Svg
            width={132}
            height={180}
            viewBox="0 0 132 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect
                x={1}
                y={1}
                width={130}
                height={178}
                rx={7}
                fill="#F5F5F5"
                stroke="#E1E1E1"
                strokeWidth={2}
            />
        </Svg>
    )
}

export default RectangleExJs
