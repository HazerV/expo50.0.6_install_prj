import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CartJs(props) {
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
                d="M31 31.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-10 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm7.382-5.5h-7.618l-1.637-6h12.255l-3 6zm4.701-7.052A1.986 1.986 0 0031.382 18h-12.8l-.617-2.263A1 1 0 0017 15h-2a1 1 0 100 2h1.236l2.799 10.263A1 1 0 0020 28h9c.379 0 .725-.214.895-.553l3.276-6.553a1.988 1.988 0 00-.088-1.946z"
                fill="#fff"
            />
        </Svg>
    )
}

export default CartJs
