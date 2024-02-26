import * as React from "react"
import Svg, { Path } from "react-native-svg"

function OpenAllBlackJs(props) {
    return (
        <Svg
            width={10}
            height={6}
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 5.917a.831.831 0 01-.59-.245L1.078 2.34a.832.832 0 111.179-1.178L5.01 3.915l2.744-2.65a.834.834 0 011.159 1.2L5.579 5.681A.831.831 0 015 5.917z"
                fill="#131313"
            />
        </Svg>
    )
}

export default OpenAllBlackJs
