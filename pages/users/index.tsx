import React, { useContext, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled, { ThemeContext } from "styled-components";
import Icon from "../../components/icon/Icon";
import Search from "../../components/search/Search";
import ToolTip from "../../components/Tooltip";
import { clearSearch, fetchUsers } from "../../redux/actions/users";
import User from "./User";

const StyledUsers = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const StyledTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 10px;
    padding-block: 10px;
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

const Users = () => {
    const { list, page, total } = useSelector(
        (state: any) => ({
            list: state.Users.list,
            page: state.Users.page,
            total: state.Users.total,
        }),
        shallowEqual
    );

    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch();

    const PER_PAGE = 20;

    useEffect(() => {
        if (searchText !== "") {
            let data = {
                name: searchText,
                order: "desc",
                perPage: PER_PAGE,
                page: page,
            };
            dispatch(fetchUsers(data));
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
                perPage: PER_PAGE,
                page: page + 1,
            };
            dispatch(fetchUsers(data));
        }
    }

    const themeContext = useContext(ThemeContext);
    
    return (
        <StyledUsers>
            <StyledTitle>
                <span>Usuarios</span>
                <div className="search-container">
                    <Search text={searchText} onChange={handleSearch} />
                </div>
            </StyledTitle>
            <StyledBody>
                {list?.map((user, index) => (
                    <User data={user} key={"user-" + index} />
                ))}
            </StyledBody>
            {list?.length > 0 && list?.length < total && (
                <StyledMoreData>
                    <ToolTip text="Buscar la siguiente página">
                        <Icon
                            icon={["fas", "plus"]}
                            fontSize="32px"
                            color={themeContext.color_background}
                            onClick={handleMoreData}
                        />
                    </ToolTip>
                </StyledMoreData>
            )}
        </StyledUsers>
    );
};

export default Users;
