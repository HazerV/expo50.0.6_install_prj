import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MenuJs(props) {
    return (
        <Svg
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.948 18h16.103c.522 0 .95.427.95.949v.102a.952.952 0 01-.95.949H15.948a.95.95 0 01-.948-.949v-.102a.95.95 0 01.948-.949zm16.103 5H15.948a.95.95 0 00-.948.949v.102a.95.95 0 00.948.949h16.103a.952.952 0 00.95-.949v-.102a.952.952 0 00-.95-.949zm0 5H15.948a.95.95 0 00-.948.949v.102a.95.95 0 00.948.949h16.103a.952.952 0 00.95-.949v-.102a.952.952 0 00-.95-.949z"
                fill="#fff"
            />
        </Svg>
    )
}

export default MenuJs
