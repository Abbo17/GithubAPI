import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Icon from "./icon/Icon";
import Tooltip from "./Tooltip";

const StyledMoreData = styled.div`
    //  position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    bottom: 50px;
`;
const MoreDataIcon = ({ onMoreData }) => {
    const themeContext = useContext(ThemeContext);

    return (
        <StyledMoreData>
            <Tooltip text="Buscar la siguiente página">
                <Icon
                    icon={["fas", "plus"]}
                    fontSize="32px"
                    color={themeContext.color_background}
                    onClick={onMoreData}
                />
            </Tooltip>
        </StyledMoreData>
    );
};

export default MoreDataIcon;
