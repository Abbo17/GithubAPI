import React, { useContext } from "react";
import { Avatar } from "rsuite";
import styled, { ThemeContext } from "styled-components";
import Icon from "../../components/icon/Icon";
import UserDetail from "./UserDetail";

const StyledUserHeader = styled.div`
    padding: 10px;
    width: 100%;
    height: 40%;

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
            font-size: 18px;
            font-weight: bold;
            margin-right: 3px;
        }
    }
`;

const UserHeader = (props) => {
    const { data } = props;

    const { login, avatar_url, html_url, score } = data;

    function handleOpenGithubUser() {
        window.open(html_url, "_blank");
    }

    const themeContext = useContext(ThemeContext);
    return (
        <StyledUserHeader>
            <div className="avatar">
                <Avatar src={avatar_url} size={"lg"} circle/>
            </div>
            <div className="user-title" onClick={handleOpenGithubUser}>
                <span>{login}</span>
                <Icon
                    icon={["fab", "github"]}
                    fontSize="14px"
                    color={themeContext.color_background}
                />
            </div>
        </StyledUserHeader>
    );
};

export default UserHeader;
