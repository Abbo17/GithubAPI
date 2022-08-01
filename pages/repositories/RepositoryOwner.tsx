import React, { useContext } from "react";
import { Avatar } from "rsuite";
import styled, { ThemeContext } from "styled-components";
import FieldLabel from "../../components/FieldLabel";

const StyledRepositoryOwner = styled.div`
    width: 100%;
    border-top: 1px solid ${(props) => props.theme.color_gris};
    padding-top: 10px;
    .owner-title {
        cursor: pointer;
        span:first-child {
            margin-right: 5px;
            font-weight: bold;
        }
        span {
            font-size: 18px;
        }
    }
    .owner-avatar{
        margin-top: 10px;
    }
`;

const RepositoryOwner = (props) => {
    const { data } = props;

    const themeContext = useContext(ThemeContext);

    function handleOpenOwner() {
        window.open(data?.html_url, "_blank");
    }
    return (
        <StyledRepositoryOwner>
            <div className="owner-title" onClick={handleOpenOwner}>
                <span>Dueño:</span>
                <span>{data?.login}</span>
            </div>
            <div className="owner-avatar">
                <Avatar src={data?.avatar_url} size={"lg"} />
            </div>
        </StyledRepositoryOwner>
    );
};

export default RepositoryOwner;
