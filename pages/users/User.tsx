import React, { useContext } from "react";
import { Avatar } from "rsuite";
import styled, { ThemeContext } from "styled-components";
import Icon from "../../components/icon/Icon";

const StyledUser = styled.div`
    width: 150px;
    min-height: 100px;
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
    console.log("Hola" , data)
    return (
        <StyledUser>
            <div className="avatar">
                <Avatar src={avatar_url} size={"lg"} />
            </div>
            <div className="user-title" onClick={handleOpenGithubUser}>
                <span>{login}</span>
                <Icon
                    icon={["fab", "github"]}
                    fontSize="14px"
                    color={themeContext.color_background}
                />
            </div>
            <div className="information-container">
                <div className="information">
                    <span>Score:</span>
                    <span>{score}</span>
                </div>
            </div>
        </StyledUser>
    );
};

export default User;
