import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function AccountJs(props) {
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
                d="M31 32.889c0 .613-.479 1.111-1.071 1.111-.593 0-1.072-.498-1.072-1.111 0-3.063-2.403-5.556-5.357-5.556s-5.357 2.493-5.357 5.556c0 .613-.48 1.111-1.072 1.111C16.48 34 16 33.502 16 32.889c0-4.289 3.365-7.778 7.5-7.778S31 28.6 31 32.89zm-7.5-16.667c1.182 0 2.143.997 2.143 2.222 0 1.226-.961 2.223-2.143 2.223s-2.143-.997-2.143-2.223c0-1.225.961-2.222 2.143-2.222zm0 6.667c2.364 0 4.286-1.993 4.286-4.445 0-2.45-1.922-4.444-4.286-4.444s-4.286 1.993-4.286 4.444c0 2.452 1.922 4.445 4.286 4.445z"
                fill="#fff"
            />
            <Rect x={16} y={32} width={15} height={2} rx={1} fill="#fff" />
        </Svg>
    )
}

export default AccountJs
