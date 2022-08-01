import React, { useContext } from "react";
import { InputNumber } from "rsuite";
import styled, { ThemeContext } from "styled-components";
import Search from "../../components/search/Search";

const StyledHeaderSearch = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-block: 10px;
    padding-block: 10px;
    padding-inline: 5%;
    border-bottom: 1px solid ${(props) => props.theme.border_color};
    span {
        font-size: ${(props) => props.theme.subtitle.fontSize};
        color: ${(props) => props.theme.subtitle.color};
        font-weight: ${(props) => props.theme.subtitle.fontWeight};
        cursor: pointer;
    }
    .search-container {
        margin-inline: 10px;
    }
    .per-page-input {
        width: 70px;
    }
`;

interface HeaderSearchProps {
    title: string;
    perPage: string;
    onSearch: any;
    onChangePerPage: any;
}

const HeaderSearch: React.FC<HeaderSearchProps> = (props) => {
    const { title, perPage, onSearch, onChangePerPage } = props;

    const themeContext = useContext(ThemeContext);

    return (
        <StyledHeaderSearch>
            <span>{title}</span>
            <div className="search-container">
                <Search onSearch={onSearch} />
            </div>
            <div className="per-page-input">
                <InputNumber value={perPage} onChange={onChangePerPage} />
            </div>
        </StyledHeaderSearch>
    );
};

export default HeaderSearch;
