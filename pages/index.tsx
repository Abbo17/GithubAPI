import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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

    const dispatch = useDispatch();

    useEffect(() => {
        fetchPopularUsers()
            .then((data) => {
                setPopularUsers(data.items);
            })
            .catch((error) => {
                console.error(error);
            });
        fetchPopularRepositories()
            .then((data) => {
                setPopularRepositories(data.items);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <StyledAppUsers>
            <StyledAppUsers>
                <div className="users-title">
                    <span>Usuarios Populares</span>
                </div>
                <div className="users-body">
                    {popularUsers.map((user) => (
                        <User data={user} />
                    ))}
                </div>
            </StyledAppUsers>
            <StyledAppUsers>
                <div className="users-title">
                    <span>Repositorios Populares</span>
                </div>
                <div className="users-body">
                    {popularRepositories.map((user) => (
                        <Repository data={user} />
                    ))}
                </div>
            </StyledAppUsers>
        </StyledAppUsers>
    );
};

export default App;
