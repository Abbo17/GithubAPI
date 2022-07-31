import React, { useContext } from "react";
import { Avatar } from "rsuite";
import styled, { ThemeContext } from "styled-components";
import Icon from "../../components/icon/Icon";
import UserDetail from "./UserDetail";
import UserHeader from "./UserHeader";

const StyledUser = styled.div`
    width: 200px;
    height: min-content;
    border: 1px solid ${(props) => props.theme.border_color};
    border-radius: 5px;

    .avatar {
        display: flex;
        justify-content: center;
        margin-block: 5px;
    }
    .user-title {
        color: black;

        justify-content: center;
        display: flex;
        align-items: center;
        cursor: pointer;
        span {
            font-size: 14px;
            font-weight: bold;
            margin-right: 3px;
        }
    }
    .information-container{
        display: flex;
        justify-content: center;
        margin-top: 10px;
        .information{
            span:first-child{
                margin-right: 2px;
            }
        }
    }
`;

const User = (props) => {
    const { data } = props;

    const { login, avatar_url, html_url, score } = data;

    function handleOpenGithubUser() {
        window.open(html_url, "_blank");
    }

    const themeContext = useContext(ThemeContext);
    return (
        <StyledUser>
            <UserHeader 
                data={data}
            />
            <UserDetail 
                data={data}
            />
        </StyledUser>
    );
};

export default User;
