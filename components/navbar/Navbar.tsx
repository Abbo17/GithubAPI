import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Icon from "../icon/Icon";
import RateLimit from "./RateLimit";

const StyledNavbar = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${(props) => props.theme.navbar_background_color};
    padding-inline: 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledTitle = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    span{
        font-size: ${props => props.theme.title.fontSize};
        color: ${props => props.theme.title.color};
        margin-left: 10px;
        cursor: pointer;
    }
`;
const Navbar = () => {
    //const window = null;

    const router = useRouter()
    return (
        <StyledNavbar>
            <StyledTitle
                onClick={() => router.push("/")}
            >
                <Icon
                    icon={["fab", "github"]}
                    fontSize="32px"
                    color={"white"}
                />
                <span>Github API</span>
            </StyledTitle>
            <RateLimit />
        </StyledNavbar>
    );
};

export default Navbar;
