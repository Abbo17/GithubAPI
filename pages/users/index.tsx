import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Icon from "../../components/icon/Icon";
import { fetchUsers } from "../../redux/actions/users";

const StyledUsers = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`;

const StyledTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    border-bottom: 1px solid ${(props) => props.theme.border_color};
    span {
        font-size: ${(props) => props.theme.subtitle.fontSize};
        color: ${(props) => props.theme.subtitle.color};
        font-weight: ${(props) => props.theme.subtitle.fontWeight};
        cursor: pointer;
    }
`;

const StyledBody = styled.div`
    width: 100%;

`;

const Users = () => {
    const { list } = useSelector(
        (state: any) => ({
            list: state.Users.list,
        }),
        shallowEqual
    );
    const dispatch = useDispatch();

    useEffect(() => {
        let data = {
            name: "pedro",
        };
        dispatch(fetchUsers(data));
    }, [fetchUsers]);
    return (
        <StyledUsers>
            <StyledTitle>
                <span>Usuarios</span>
            </StyledTitle>
            <StyledBody>
                {JSON.stringify(list)}
            </StyledBody>
        </StyledUsers>
    );
};

export default Users;
