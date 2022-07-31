import React, { useContext, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { InputNumber } from "rsuite";
import styled, { ThemeContext } from "styled-components";
import Search from "../../components/search/Search";
import { clearSearch, fetchUsers } from "../../redux/actions/users";

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

const HeaderSearch = (props) => {
    const { title, perPage, onSearch, onChangePerPage } = props;

    const themeContext = useContext(ThemeContext);

    console.log("Hola per ", perPage);
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
