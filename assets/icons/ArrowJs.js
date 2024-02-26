import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowJs(props) {
    return (
        <Svg
            width={14}
            height={12}
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.167 6.833h9.887l-3.027 3.634a.833.833 0 101.28 1.066l4.167-5c.033-.039.048-.085.073-.128.02-.035.044-.065.059-.103a.821.821 0 00.06-.299V6v-.003a.821.821 0 00-.06-.299c-.015-.038-.04-.068-.06-.103-.024-.043-.04-.09-.072-.128l-4.167-5A.835.835 0 008.133.36a.833.833 0 00-.106 1.173l3.027 3.634H1.167a.834.834 0 000 1.666z"
                fill="#474747"
            />
        </Svg>
    )
}

export default ArrowJs
