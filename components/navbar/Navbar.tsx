import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Icon from "../icon/Icon";
import Tooltip from "../Tooltip";
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
    .navbar-title {
        display: flex;
        span {
            font-size: ${(props) => props.theme.title.fontSize};
            color: ${(props) => props.theme.title.color};
            margin-left: 10px;
            cursor: pointer;
            @media only screen and (max-width: 768px) {
                font-size: ${(props) => props.theme.mobile.title.fontSize};
            }
        }
    }
`;
const Navbar = () => {
    //const window = null;

    const router = useRouter();

    return (
        <StyledNavbar>
            <StyledTitle>
                <div onClick={() => router.push("/")} className="navbar-title">
                    <Icon
                        icon={["fab", "github"]}
                        fontSize="32px"
                        color={"white"}
                    />
                    <span>Github API</span>
                </div>

                <Tooltip text={"Buscar usuarios"} placement={"bottom"}>
                    <Icon
                        icon={["fas", "users"]}
                        fontSize="24px"
                        color={"white"}
                        style={{
                            marginLeft: "25px",
                        }}
                        onClick={() => router.push("/users")}
                    />
                </Tooltip>
                <Tooltip text={"Buscar Repositorios"} placement={"bottom"}>
                    <Icon
                        icon={["fas", "box"]}
                        fontSize="24px"
                        color={"white"}
                        style={{
                            marginInline: "20px",
                        }}
                        onClick={() => router.push("/repositories")}
                    />
                </Tooltip>
            </StyledTitle>
            <RateLimit />
        </StyledNavbar>
    );
};

export default Navbar;
