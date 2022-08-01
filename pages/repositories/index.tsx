import React, { useContext, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled, { ThemeContext } from "styled-components";
import HeaderSearch from "../../components/header/HeaderSearch";
import Icon from "../../components/icon/Icon";
import MoreDataIcon from "../../components/MoreDataIcon";
import ToolTip from "../../components/Tooltip";
import { fetchRepositories } from "../../redux/actions/repositories";
import {
    clearSearch,
    fetchUsers,
    setPerPageUsers,
} from "../../redux/actions/users";
import Repository from "./Repository";

const StyledRepositories = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const StyledMoreData = styled.div`
    //  position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    bottom: 50px;
`;

const StyledBody = styled.div`
    width: 100%;
    height: 80%;
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    gap: 20px;
`;

const Repositories = () => {
    const { list, page, total, perPage } = useSelector(
        (state: any) => ({
            list: state.Repositories.list,
            page: state.Repositories.page,
            perPage: state.Repositories.perPage,
            total: state.Repositories.total,
        }),
        shallowEqual
    );

    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (searchText !== "") {
            let data = {
                name: searchText,
                order: "desc",
                perPage: perPage,
                page: page,
            };
            dispatch(fetchRepositories(data));
        } else {
            dispatch(clearSearch());
        }
        // return () => dispatch(clearSearch());
    }, [fetchUsers, searchText]);

    function handleSearch(value) {
        setSearchText(value);
    }

    function handleMoreData(value) {
        if (searchText !== "") {
            let data = {
                name: searchText,
                order: "desc",
                perPage: perPage,
                page: page + 1,
            };
            dispatch(fetchUsers(data));
        }
    }

    const handleChangePerPage = (value) => {
        dispatch(setPerPageUsers(value));
    };

    const themeContext = useContext(ThemeContext);

    return (
        <StyledRepositories>
            <HeaderSearch
                title={"Repositorios"}
                perPage={perPage}
                onSearch={handleSearch}
                onChangePerPage={handleChangePerPage}
            />
            <StyledBody>
                {list?.map((repository, index) => (
                    <Repository data={repository} key={"user-" + index} />
                ))}
            </StyledBody>
            {list?.length > 0 && list?.length < total && (
                <MoreDataIcon onMoreData={handleMoreData} />
            )}
        </StyledRepositories>
    );
};

export default Repositories;
