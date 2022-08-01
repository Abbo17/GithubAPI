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

/*
Example of UserJSON
{
    "login": "abb",
    "id": 58188429,
    "node_id": "MDQ6VXNlcjU4MTg4NDI5",
    "avatar_url": "https://avatars.githubusercontent.com/u/58188429?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/abb",
    "html_url": "https://github.com/abb",
    "followers_url": "https://api.github.com/users/abb/followers",
    "following_url": "https://api.github.com/users/abb/following{/other_user}",
    "gists_url": "https://api.github.com/users/abb/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/abb/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/abb/subscriptions",
    "organizations_url": "https://api.github.com/users/abb/orgs",
    "repos_url": "https://api.github.com/users/abb/repos",
    "events_url": "https://api.github.com/users/abb/events{/privacy}",
    "received_events_url": "https://api.github.com/users/abb/received_events",
    "type": "User",
    "site_admin": false,
    "score": 1
}
*/
const UserDetail = (props) => {
    const { data } = props;
    const { rateLimit } = useSelector(
        (state: any) => ({
            rateLimit: state.Global.rateLimit,
        }),
        shallowEqual
    );


    const themeContext = useContext(ThemeContext);
    const dispatch = useDispatch();

    const { rate } = rateLimit;

    const [fetchingFollowers, setFetchingFollowrs] = useState(false);
    const [fetchingFollowing, setFetchingFollwing] = useState(false);
    const [fetchingRepos, setFetchingRepos] = useState(false);

    function fetchData() {
        if (rate.used < rate.limit) {
            if (data?.followers == undefined) {
                dispatch(
                    fetchUserInfo({
                        url: data?.followers_url,
                        code: "followers",
                        user: data?.login,
                    })
                );
                setFetchingFollowrs(true);
            }
            if (data?.following == undefined) {
                dispatch(
                    fetchUserInfo({
                        url: data?.following_url,
                        code: "following",
                        user: data?.login,
                    })
                );
                setFetchingFollwing(true);
            }

            if (data?.repos == undefined) {
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
        if (data?.followers !== undefined && fetchingFollowers) {
            setFetchingFollowrs(false);
        }

        if (data?.following !== undefined && fetchingFollowing) {
            setFetchingFollwing(false);
        }

        if (data?.repos !== undefined && fetchingRepos) {
            setFetchingRepos(false);
        }
    }, [data?.followers, data?.following, data?.repos]);
    return (
        <StyledUserDetail>
            <FieldLabel label={"Score"} value={data?.score} />
            <FieldLabel
                label={"Tipo"}
                value={data?.type == "User" ? "Usuario" : "Organización"}
            />
            <FieldLabel
                label={"Seguidores"}
                value={data?.followers}
                loading={fetchingFollowers}
            />
            <FieldLabel
                label={"Siguiendo"}
                value={data?.following}
                loading={fetchingFollowing}
            />
            <FieldLabel
                label={"Repositorios"}
                value={data?.repos}
                loading={fetchingRepos}
            />
        </StyledUserDetail>
    );
};

export default UserDetail;
