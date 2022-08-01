import React, { useContext, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Loader } from "rsuite";
import styled, { ThemeContext } from "styled-components";
import HeaderSearch from "../../components/header/HeaderSearch";
import Icon from "../../components/icon/Icon";
import MoreDataIcon from "../../components/MoreDataIcon";
import ToolTip from "../../components/Tooltip";
import {
    clearSearch,
    fetchUsers,
    setPerPageUsers,
} from "../../redux/actions/users";
import User from "./User";

const StyledUsers = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const StyledBody = styled.div`
    width: 100%;
    height: 80%;
    padding: 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: auto;
    gap: 20px;
`;

const Users = () => {
    const { list, page, total, perPage } = useSelector(
        (state: any) => ({
            list: state.Users.list,
            page: state.Users.page,
            perPage: state.Users.perPage,
            total: state.Users.total,
        }),
        shallowEqual
    );

    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (searchText !== "") {
            let data = {
                name: searchText,
                order: "desc",
                perPage: perPage,
                page: page,
            };
            setLoading(true);
            dispatch(fetchUsers(data));
        } else {
            dispatch(clearSearch());
        }
        // return () => dispatch(clearSearch());
    }, [fetchUsers, searchText]);

    useEffect(() => {
        if (loading) {
            setLoading(false);
        }
    }, [list]);

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

    return (
        <StyledUsers>
            <HeaderSearch
                title={"Usuarios"}
                perPage={perPage}
                onSearch={handleSearch}
                onChangePerPage={handleChangePerPage}
            />
            <StyledBody>
                {loading ? (
                    <Loader size={"lg"} />
                ) : (
                    list?.map((user, index) => (
                        <User data={user} key={"user-" + index} />
                    ))
                )}
            </StyledBody>
            {list?.length > 0 && list?.length < total && (
                <MoreDataIcon onMoreData={handleMoreData} />
            )}
        </StyledUsers>
    );
};

export default Users;
