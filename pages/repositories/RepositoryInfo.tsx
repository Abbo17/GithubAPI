import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import FieldLabel from "../../components/FieldLabel";

const StyledRepositoryInfo = styled.div`
    .field-label-container {
    }
    .topics {
        .topic-title {
            font-weight: bold;
        }
        .topic-body {
            margin-top: 10px;
            gap: 10px;
            display: flex;
        }
    }
`;

const RepositoryInfo = (props) => {
    const { data } = props;

    const {
        language,
        topics,
        visibility,
        score,
        open_issues,
        default_branch,
    } = data;

    const themeContext = useContext(ThemeContext);

    console.log("Topics ", topics.length);

    return (
        <StyledRepositoryInfo>
            <FieldLabel label={"Score"} value={score} />
            <FieldLabel label={"Lenguaje"} value={language} />
            {topics.length > 0 && (
                <div className="topics">
                    <span className="topic-title">Topicos</span>
                    <div className="topic-body">
                        {topics.map((topic) => (
                            <span>{topic}</span>
                        ))}
                    </div>
                </div>
            )}
            <FieldLabel
                label={"Visibilidad"}
                value={visibility == "public" ? "Publica" : "Privada"}
            />
            <FieldLabel label={"Rama por defecto"} value={default_branch} />
            <FieldLabel label={"Issues abiertos"} value={open_issues} />
        </StyledRepositoryInfo>
    );
};

export default RepositoryInfo;
