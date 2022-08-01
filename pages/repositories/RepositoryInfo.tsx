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
            flex-wrap: wrap;
        }
    }
`;


interface RepositoryInfoProps {
    data: any;
}


const RepositoryInfo:React.FC<RepositoryInfoProps> = (props) => {
    const { data } = props;


    return (
        <StyledRepositoryInfo>
            <FieldLabel label={"Score"} value={data?.score} />
            <FieldLabel label={"Lenguaje"} value={data?.language} />
            {data?.topics.length > 0 && (
                <div className="topics">
                    <span className="topic-title">Topicos</span>
                    <div className="topic-body">
                        {data?.topics.map((topic: string, index: number) => (
                            <span key={index + "topic"}>{topic}</span>
                        ))}
                    </div>
                </div>
            )}
            <FieldLabel
                label={"Visibilidad"}
                value={data?.visibility == "public" ? "Publica" : "Privada"}
            />
            <FieldLabel label={"Rama por defecto"} value={data?.default_branch} />
            <FieldLabel label={"Issues abiertos"} value={data?.open_issues} />
        </StyledRepositoryInfo>
    );
};

export default RepositoryInfo;
