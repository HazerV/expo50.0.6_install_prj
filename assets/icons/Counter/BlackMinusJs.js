import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BlackMinusJs(props) {
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
                d="M12.667 8.667H3.333a.666.666 0 110-1.334h9.334a.666.666 0 110 1.334z"
                fill="#131313"
            />
        </Svg>
    )
}

export default BlackMinusJs
