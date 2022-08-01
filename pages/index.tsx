import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Loader } from "rsuite";
import styled from "styled-components";
import { fetchPopularRepositories } from "../api/repositories";
import { fetchPopularUsers } from "../api/users";
import { showNotification } from "../redux/actions/global";
import { NOTIFICATIONS_TYPES } from "../utils/constants";
import Repository from "./repositories/Repository";
import User from "./users/User";

const StyledApp = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const StyledAppUsers = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    margin-inline: 5%;
    .users-title {
        margin-block: 20px;
        span {
            font-size: ${(props) => props.theme.title.fontSize};
            font-weight: ${(props) => props.theme.title.fontWeight};
        }
    }
    .users-body {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
`;

const StyledAppRepositories = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    margin-inline: 5%;
    .users-title {
        margin-block: 20px;
        span {
            font-size: ${(props) => props.theme.title.fontSize};
            font-weight: ${(props) => props.theme.title.fontWeight};
        }
    }
    .users-body {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
`;
const App = () => {
    const [popularUsers, setPopularUsers] = useState([]);
    const [popularRepositories, setPopularRepositories] = useState([]);

    const [loadingPopularUsers, setLoadingPopularUsers] = useState(false);
    const [
        loadingPopularRepositories,
        setLoadingPopularRepositories,
    ] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        setLoadingPopularUsers(true);
        setLoadingPopularRepositories(true);
        fetchPopularUsers()
            .then((data) => {
                setLoadingPopularUsers(false);
                setPopularUsers(data.items);
            })
            .catch((error) => {
                setLoadingPopularUsers(false);
                console.error(error);
            });
        /* fetchPopularRepositories()
            .then((data) => {
                setLoadingPopularRepositories(false);
                setPopularRepositories(data.items);
            })
            .catch((error) => {
                setLoadingPopularRepositories(false);
                console.error(error);
            }); */
    }, []);

    return (
        <StyledAppUsers>
            <StyledAppUsers>
                <div className="users-title">
                    <span>Usuarios Populares</span>
                </div>
                <div className="users-body">
                    {loadingPopularUsers ? (
                        <Loader size={"lg"} />
                    ) : (
                        popularUsers.map((user) => <User data={user} />)
                    )}
                </div>
            </StyledAppUsers>
            <StyledAppUsers>
                <div className="users-title">
                    <span>Repositorios Populares</span>
                </div>
                <div className="users-body">
                    {loadingPopularRepositories ? (
                        <Loader size="lg" />
                    ) : (
                        popularRepositories.map((user) => (
                            <Repository data={user} />
                        ))
                    )}
                </div>
            </StyledAppUsers>
        </StyledAppUsers>
    );
};

export default App;
