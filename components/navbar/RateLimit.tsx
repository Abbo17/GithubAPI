import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
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

    useEffect(() => {
        dispatch(fetchRateLimit());
    }, []);

    const handleFetchRateLimit = () => {
        dispatch(fetchRateLimit());
    };

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
            <Popover
                button={
                    <Icon
                        icon={["fas", "server"]}
                        fontSize="16px"
                        color={"white"}
                        style={{ marginInline: "5px" }}
                    />
                }
            >
                <RateLimitPopover
                 />
            </Popover>
        </StyledRateLimit>
    );
};

export default RateLimit;
