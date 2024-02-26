import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HeartBlackJs(props) {
    return (
        <Svg
            width={20}
            height={17}
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.22 2c-.864 0-1.674.334-2.28.941a3.241 3.241 0 000 4.573L10 14.585l7.06-7.071a3.24 3.24 0 000-4.573c-1.212-1.215-3.348-1.213-4.56 0l-1.792 1.795a1.028 1.028 0 01-1.416 0L7.5 2.94A3.2 3.2 0 005.22 2zM10 17a.994.994 0 01-.707-.294l-7.768-7.78a5.245 5.245 0 010-7.399A5.19 5.19 0 015.22 0c1.399 0 2.712.543 3.695 1.527L10 2.614l1.085-1.086A5.187 5.187 0 0114.78 0c1.398 0 2.71.543 3.694 1.527a5.244 5.244 0 010 7.399l-7.767 7.781A1 1 0 0110 17z"
                fill="#000"
            />
        </Svg>
    )
}

export default HeartBlackJs
