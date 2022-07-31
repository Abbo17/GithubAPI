import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledIcon = styled.div`
     cursor: ${(props) => props.onClick ? "pointer" : ""};
`;

const Icon = (props) => {
    const { fontSize, rotation, icon, color, onClick, style } = props;
    return (
        <StyledIcon
        onClick={onClick}
            style={{
           
                ...style,
            }}
        >
            <FontAwesomeIcon
                icon={icon}
                color={color}
                fontSize={fontSize}
                rotation={rotation || undefined}
                onClick={onClick}
            />
        </StyledIcon>
    );
};

export default Icon;
