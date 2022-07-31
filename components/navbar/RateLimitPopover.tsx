import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import FiedlLabel from "../../pages/users/FiedlLabel";

const StyledRateLimitPopover = styled.div`
    width: 100px;
    border-radius: 5px;
    background-color: white;
`;

const RateLimitPopover = () => {
    const dispatch = useDispatch();

    const { rateLimit } = useSelector(
        (state: any) => ({
            rateLimit: state.Global.rateLimit,
        }),
        shallowEqual
    );

    /*
    {
    "resources": {
        "core": {
            "limit": 60,
            "remaining": 60,
            "reset": 1659141868,
            "used": 0,
            "resource": "core"
        },
        "graphql": {
            "limit": 0,
            "remaining": 0,
            "reset": 1659141868,
            "used": 0,
            "resource": "graphql"
        },
        "integration_manifest": {
            "limit": 5000,
            "remaining": 5000,
            "reset": 1659141868,
            "used": 0,
            "resource": "integration_manifest"
        },
        "search": {
            "limit": 10,
            "remaining": 10,
            "reset": 1659138328,
            "used": 0,
            "resource": "search"
        }
    },
    "rate": {
        "limit": 60,
        "remaining": 60,
        "reset": 1659141868,
        "used": 0,
        "resource": "core"
    }
}
    */

    const { rate, resources } = rateLimit;

    const { search } = resources;

    return (
        <StyledRateLimitPopover>
            <FiedlLabel label={"Limite"} value={rate.limit} />
            <FiedlLabel label={"Restante"} value={rate.remaining} />
            <FiedlLabel label={"Usado"} value={rate.used} />
            <hr />
            <span>Recursos de busqueda</span>
            <FiedlLabel label={"Limite"} value={search.limit} />
            <FiedlLabel label={"Restante"} value={search.remaining} />
            <FiedlLabel label={"Usado"} value={search.used} />
        </StyledRateLimitPopover>
    );
};

export default RateLimitPopover;
