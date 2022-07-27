import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = (props) => {
    const { fontSize, rotation, icon, color, onClick } = props;
    return (
        <FontAwesomeIcon
            icon={icon}
            color={color}
            fontSize={fontSize}
            rotation={rotation || undefined}
            onClick={onClick}
        />
    );
};

export default Icon;
