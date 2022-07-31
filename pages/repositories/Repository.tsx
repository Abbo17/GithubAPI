import React, { useContext } from "react";
import { Avatar } from "rsuite";
import styled, { ThemeContext } from "styled-components";
import Icon from "../../components/icon/Icon";
import RepositoryHeader from "./RepositoryHeader";
import RepositoryInfo from "./RepositoryInfo";
import RepositoryOwner from "./RepositoryOwner";

const StyledRepository = styled.div`
    width: 100%;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.color_gris};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    box-sizing: content-box;
`;

const Repository = (props) => {
    const { data } = props;

    const { login, avatar_url, html_url, score } = data;

    function handleOpenGithubUser() {
        window.open(html_url, "_blank");
    }

    const themeContext = useContext(ThemeContext);
    return (
        <StyledRepository>
            <RepositoryHeader data={data} />
            <RepositoryInfo data={data} />
            <RepositoryOwner data={data.owner} />
        </StyledRepository>
    );
};

export default Repository;
