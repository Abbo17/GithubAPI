import React, { useContext, useEffect, useState } from "react";
import { Loader } from "rsuite";
import styled, { ThemeContext } from "styled-components";

const StyledFieldLabel = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-block: 10px;
    .label-container{
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
    const { label, value = null,  onFetch } = props;

    const [parsedValue, setParsedValue] = useState(value ? value : null);

    useEffect(() => {
        if (onFetch) {
            onFetch().then((data) => {
                setParsedValue(data);
            });
        }
    }, [onFetch, setParsedValue]);

    useEffect(() => {
        if (value !== null) {
            setParsedValue(value)
        }
    }, [value]);


    return (
        <StyledFieldLabel>
            <span className="label-container">{label}:</span>
            <div className="value-container">
                {parsedValue !== null ? <span>{parsedValue}</span> : <Loader />}
            </div>
        </StyledFieldLabel>
    );
};

export default FiedlLabel;
