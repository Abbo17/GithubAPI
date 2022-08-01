import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const StyledIcon = styled.div`
    cursor: ${(props) => (props.onClick ? "pointer" : "")};
`;

interface IconProps {
    fontSize: string;
    icon: any;
    color: string;
    onClick?: () => void;
    style?: any;
}

const Icon: React.FC<IconProps> = (props) => {
    const { fontSize, icon, color, onClick, style } = props;
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
                onClick={onClick}
            />
        </StyledIcon>
    );
};

export default Icon;
