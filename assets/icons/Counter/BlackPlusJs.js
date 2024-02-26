import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BlackPlusJs(props) {
    return (
        <Svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.667 7.333h-4v-4a.666.666 0 10-1.334 0v4h-4a.666.666 0 100 1.334h4v4a.666.666 0 101.334 0v-4h4a.667.667 0 100-1.334z"
                fill="#131313"
            />
        </Svg>
    )
}

export default BlackPlusJs
