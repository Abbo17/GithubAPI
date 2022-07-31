import React, { useContext, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled, { ThemeContext } from "styled-components";
import { fetchRateLimit } from "../../redux/actions/global";
import Icon from "../icon/Icon";
import Popover from "../Popover";
import Tooltip from "../Tooltip";
import RateLimitPopover from "./RateLimitPopover";

const StyledRateLimit = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`;

const RateLimit = () => {
    const dispatch = useDispatch();

    const { rateLimit } = useSelector(
        (state: any) => ({
            rateLimit: state.Global.rateLimit,
        }),
        shallowEqual
    );
    const [reloadRateLimit, setReloadRateLimit] = useState(false);
    const intervalTimer: any = useRef();

    useEffect(() => {
        if (!intervalTimer.current && reloadRateLimit) {
            setInterval(() => {
                intervalTimer.current = dispatch(fetchRateLimit());
            }, 2000);
        }
    }, [reloadRateLimit, intervalTimer, fetchRateLimit]);

    useEffect(() => {
        //Solo la primera vez si no esta activado el automatico
        if (!reloadRateLimit) {
            dispatch(fetchRateLimit());
        }
    }, []);

    const handleFetchRateLimit = () => {
        dispatch(fetchRateLimit());
    };

    const themeContext = useContext(ThemeContext);

    const isRateLimit = rateLimit?.rate
        ? rateLimit.rate.used == rateLimit.rate.limit ||
          rateLimit.resources.search.used == rateLimit.resources.search.limit
        : false;

    const handleSyncRateLimit = () => {
        if (isRateLimit){
            clearInterval(intervalTimer)
        }
        setReloadRateLimit(!reloadRateLimit)
    }
    return (
        <StyledRateLimit>
            <Tooltip
                text={"Actualizar valores de latencia"}
                placement={"bottom"}
            >
                <Icon
                    icon={["fas", "redo"]}
                    fontSize="16px"
                    color={"white"}
                    style={{ marginInline: "5px" }}
                    onClick={handleFetchRateLimit}
                />
            </Tooltip>
            <Tooltip
                text={"Actualizar los valores de latencia automaticamente"}
                placement={"bottom"}
            >
                <Icon
                    icon={["fas", "sync"]}
                    fontSize="16px"
                    color={reloadRateLimit ? themeContext.info_color : "white"}
                    style={{ marginInline: "5px" }}
                    onClick={handleSyncRateLimit}
                />
            </Tooltip>
            <Popover
                button={
                    <Icon
                        icon={["fas", "server"]}
                        fontSize="16px"
                        color={isRateLimit ? themeContext.error_color : "white"}
                        style={{ marginInline: "5px" }}
                    />
                }
            >
                <RateLimitPopover />
            </Popover>
        </StyledRateLimit>
    );
};

export default RateLimit;
