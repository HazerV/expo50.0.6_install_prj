import * as React from "react"
import Svg, { Path } from "react-native-svg"

function NavigationJs(props) {
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
                d="M5.244 6.066l3.466.704a.664.664 0 01.52.52l.704 3.466L12.28 3.72 5.244 6.066zM9.778 14l-.04-.002a.667.667 0 01-.614-.532L8.012 7.988 2.534 6.875a.666.666 0 01-.078-1.285l10.666-3.556a.668.668 0 01.844.843L10.41 13.545a.666.666 0 01-.632.456z"
                fill="#474747"
            />
        </Svg>
    )
}

export default NavigationJs
