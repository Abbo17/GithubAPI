import React, { useContext, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled, { ThemeContext } from "styled-components";
import { showNotification } from "../../redux/actions/global";
import { fetchUserInfo } from "../../redux/actions/users";
import { NOTIFICATIONS_TYPES } from "../../utils/constants";
import FieldLabel from "../../components/FieldLabel";

const StyledUserDetail = styled.div`
    width: 100%;
    height: 60%;
    padding-block: 10px;
    padding-inline: 20px;
    background-color: ${(props) => props.theme.color_gris};
`;

const UserDetail = (props) => {
    const { data } = props;

    const { rateLimit, usersInfo } = useSelector(
        (state: any) => ({
            rateLimit: state.Global.rateLimit,
            usersInfo: state.Users.usersInfo,
        }),
        shallowEqual
    );

    const themeContext = useContext(ThemeContext);
    const dispatch = useDispatch();

    const { rate } = rateLimit;

    const [fetchingFollowers, setFetchingFollowrs] = useState(false);
    const [fetchingOrgs, setFetchingOrgs] = useState(false);
    const [fetchingRepos, setFetchingRepos] = useState(false);

    const userInfo = usersInfo?.[data.login]
    function fetchData() {
        if (true) {
            if (userInfo?.followers === undefined && !fetchingFollowers) {
                dispatch(
                    fetchUserInfo({
                        url: data?.followers_url,
                        code: "followers",
                        user: data?.login,
                    })
                );
                setFetchingFollowrs(true);
            }
            if (userInfo?.orgs === undefined && !fetchingOrgs) {
                dispatch(
                    fetchUserInfo({
                        url: data?.organizations_url,
                        code: "orgs",
                        user: data?.login,
                    })
                );
                setFetchingOrgs(true);
            }

            if (userInfo?.repos === undefined && !fetchingRepos) {
                dispatch(
                    fetchUserInfo({
                        url: data?.repos_url,
                        code: "repos",
                        user: data?.login,
                    })
                );
                setFetchingRepos(true);
            }
        }
    }
    useEffect(() => {
        fetchData();
    }, [rate, data?.followers, fetchData, fetchUserInfo, setFetchingFollowrs]);

    useEffect(() => {
        if (userInfo?.followers !== undefined) {
    
            setFetchingFollowrs(false);
        }

        if (userInfo?.orgs !== undefined) {
            setFetchingOrgs(false);
        }

        if (userInfo?.repos !== undefined) {
            setFetchingRepos(false);
        }
    }, [usersInfo]);


    return (
        <StyledUserDetail>
            <FieldLabel label={"Score"} value={data?.score} />
            <FieldLabel
                label={"Tipo"}
                value={data?.type == "User" ? "Usuario" : "Organización"}
            />
            <FieldLabel
                label={"Seguidores"}
                value={userInfo?.followers}
                loading={fetchingFollowers}
            />
            <FieldLabel
                label={"Siguiendo"}
                value={userInfo?.following}
                loading={fetchingOrgs}
            />
            <FieldLabel
                label={"Repositorios"}
                value={userInfo?.repos}
                loading={fetchingRepos}
            />
        </StyledUserDetail>
    );
};

export default UserDetail;
