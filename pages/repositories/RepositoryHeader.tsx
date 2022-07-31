import React, { useContext } from "react";
import { Avatar } from "rsuite";
import styled, { ThemeContext } from "styled-components";
import FieldLabel from "../../components/FieldLabel";
import Icon from "../../components/icon/Icon";
import Tooltip from "../../components/Tooltip";
import moment from "moment";

const StyledRepositoryHeader = styled.div`
    .repository-title {
        border-bottom: 1px solid ${(props) => props.theme.color_gris};
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding-bottom: 10px;
        .title{
            display:flex;
            width: 100%;
            justify-content: space-between;
        }
        .right-title {
            display: flex;
            align-items: center;
            span {
                font-size: 22px;
                color: ${(props) => props.theme.color_background};
                font-weight: bold;
                margin-right: 10px;
                cursor: pointer;
            }
        }
        .description {
        }
        .repository-date-info {
            
            
        }
    }
`;

const RepositoryHeader = (props) => {
    const { data } = props;

    const {
        name,
        full_name,
        description,
        html_url,
        created_at,
        updated_at,
    } = data;

    const themeContext = useContext(ThemeContext);

    function handleOpenRepository() {
        window.open(html_url, "_blank");
    }

    const created_at_date = new Date(created_at);
    console.log("created_at : ", created_at_date);
    return (
        <StyledRepositoryHeader>
            <div className="repository-title">
                <div className="title">
                    <div className="right-title">
                        <span onClick={handleOpenRepository}>{full_name}</span>
                        <Tooltip
                            text={
                                data.private
                                    ? "El repositorio es privado"
                                    : "El repositorio es publico"
                            }
                        >
                            <Icon
                                icon={
                                    data.private
                                        ? ["fas", "lock"]
                                        : ["fas", "lock-open"]
                                }
                                fontSize="14px"
                                color={themeContext.color_background}
                            />
                        </Tooltip>
                    </div>
                    <div className="left-title">
                        <div className="repository-date-info">
                            <FieldLabel
                                label={"Creado"}
                                value={moment(created_at).format('MM/DD/YYYY')}
                            />
                             <FieldLabel
                                label={"Última actualización"}
                                value={moment(updated_at).format('MM/DD/YYYY')}
                            />
                        </div>
                    </div>
                </div>
                <span className="description">{description}</span>
            </div>
        </StyledRepositoryHeader>
    );
};

export default RepositoryHeader;
