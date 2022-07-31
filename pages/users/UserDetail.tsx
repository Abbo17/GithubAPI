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
    const {
        score,
        type,
        followers_url,
        followers,
        login,
        following,
        following_url,
        repos_url,
        repos,
    } = data;

    const themeContext = useContext(ThemeContext);
    const dispatch = useDispatch();

    const { rate } = rateLimit;

    const [fetchingFollowers, setFetchingFollowrs] = useState(false);
    const [fetchingFollowing, setFetchingFollwing] = useState(false);
    const [fetchingRepos, setFetchingRepos] = useState(false);

    console.log("Hola follo", followers);

    function fetchData() {
        if (rate.used < rate.limit) {
            if (followers == undefined) {
                dispatch(
                    fetchUserInfo({
                        url: followers_url,
                        code: "followers",
                        user: login,
                    })
                );
                setFetchingFollowrs(true);
            }
            if (following == undefined) {
                dispatch(
                    fetchUserInfo({
                        url: following_url,
                        code: "following",
                        user: login,
                    })
                );
                setFetchingFollwing(true);
            }

            if (repos == undefined) {
                dispatch(
                    fetchUserInfo({
                        url: repos_url,
                        code: "repos",
                        user: login,
                    })
                );
                setFetchingRepos(true);
            }
        }
    }
    useEffect(() => {
        fetchData();
    }, [rate, followers, fetchData, fetchUserInfo, setFetchingFollowrs]);

    useEffect(() => {
        if (followers !== undefined && fetchingFollowers) {
            setFetchingFollowrs(false);
        }

        if (following !== undefined && fetchingFollowing) {
            setFetchingFollwing(false);
        }

        if (repos !== undefined && fetchingRepos) {
            setFetchingRepos(false);
        }
    }, [followers, following, repos]);
    return (
        <StyledUserDetail>
            <FieldLabel label={"Score"} value={score} />
            <FieldLabel
                label={"Tipo"}
                value={type == "User" ? "Usuario" : "Organización"}
            />
            <FieldLabel
                label={"Seguidores"}
                value={followers}
                loading={fetchingFollowers}
            />
            <FieldLabel
                label={"Siguiendo"}
                value={following}
                loading={fetchingFollowing}
            />
            <FieldLabel
                label={"Repositorios"}
                value={repos}
                loading={fetchingRepos}
            />
        </StyledUserDetail>
    );
};

export default UserDetail;
