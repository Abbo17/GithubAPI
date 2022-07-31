import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import styled, { ThemeContext } from "styled-components";
import { showNotification } from "../../redux/actions/global";
import { NOTIFICATIONS_TYPES } from "../../utils/constants";
import FiedlLabel from "./FiedlLabel";

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

    const { score, followers_url } = data;

    const themeContext = useContext(ThemeContext);
    const dispatch = useDispatch();

    const onFetchData = (url) => {
        return fetch(url)
            .then((res) => res.json())
            .then((data) => {
                return data;
            })
            .catch((error) => {
                dispatch(
                    showNotification({
                        type: NOTIFICATIONS_TYPES.ERROR,
                        text: error.message,
                    })
                );
            });
    };

    const handleFetchFollowers = () => {
        /*
        return onFetchData(followers_url).then((data) => {
            if (data) {
                return data?.length;
            }
            return 0;
        });
        */
    };

    return (
        <StyledUserDetail>
            <FiedlLabel label={"Score"} value={score} />
            {/*            <FiedlLabel label={"Seguidores"} onFetch={handleFetchFollowers} />*/}
        </StyledUserDetail>
    );
};

export default UserDetail;
