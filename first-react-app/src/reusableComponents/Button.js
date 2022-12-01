import React from "react";

const Button = ({name, width, height, bgColor, border, color, marginLeft,
    borderTopLeft, borderBottomLeft, borderBottomRight,borderLeftRadius, borderTopRight, 
    borderRightRadius}) => {
    return(
        <button style={{
            width: width,
            height: height,
            borderTopLeft: borderTopLeft,
            borderBottomLeft: borderBottomLeft,
            borderBottomRight: borderBottomRight,
            borderRightRadius: borderRightRadius,
            borderLeftRadius: borderLeftRadius,
            borderTopRight: borderTopRight,
            color: color,
            backgroundColor: bgColor,
            border: border,
            marginLeft: marginLeft
            

        }}
        >
            {name}
        </button>
    );
}

export default Button