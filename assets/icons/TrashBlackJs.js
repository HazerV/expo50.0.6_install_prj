import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TrashBlackJs(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 16c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4zm6 0c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4zm2 3c0 .551-.448 1-1 1H7c-.552 0-1-.449-1-1V8h12v11zM10 4.328c0-.155.214-.328.5-.328h3c.286 0 .5.173.5.328V6h-4V4.328zM21 6h-5V4.328C16 3.044 14.879 2 13.5 2h-3C9.121 2 8 3.044 8 4.328V6H3c-.55 0-1 .45-1 1s.45 1 1 1h1v11c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3V8h1c.55 0 1-.45 1-1s-.45-1-1-1z"
                fill="#000"
            />
        </Svg>
    )
}

export default TrashBlackJs
