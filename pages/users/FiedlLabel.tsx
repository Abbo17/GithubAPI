import React, { useContext, useEffect, useState } from "react";
import { Loader } from "rsuite";
import styled, { ThemeContext } from "styled-components";

const StyledFieldLabel = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-block: 10px;
    .label-container {
        font-weight: bold;
    }

    .value-container {
        display: flex;
        width: 40px;
        align-items: center;
        justify-content: center;
    }
`;

const FiedlLabel = (props) => {
    const { label, value = null, loading } = props;

    return (
        <StyledFieldLabel>
            <span className="label-container">{label}:</span>
            <div className="value-container">
                {!loading ? (
                    <span>{value == undefined ? "-" : value}</span>
                ) : (
                    <Loader />
                )}
            </div>
        </StyledFieldLabel>
    );
};

export default FiedlLabel;
