import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EditBlackJs(props) {
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
                d="M12.018 6.679L9.323 3.984l1.948-1.95 2.694 2.695-1.947 1.95zM5.08 13.625l-2.977.27.264-2.955 5.617-5.617 2.696 2.696-5.6 5.606zM15.403 3.338v-.001L12.663.599c-.74-.74-2.014-.774-2.716-.07L.952 9.527a1.973 1.973 0 00-.57 1.214l-.379 4.17a1.002 1.002 0 001.087 1.086l4.17-.38a1.974 1.974 0 001.214-.567l8.997-8.997c.728-.73.697-1.948-.068-2.714z"
                fill="#000"
            />
        </Svg>
    )
}

export default EditBlackJs
