import React, { useContext, useEffect, useState } from "react";
import { Loader } from "rsuite";
import styled, { ThemeContext } from "styled-components";

const StyledFieldLabel = styled.div`
    width: max-content;
    display: flex;
    justify-content: space-between;
    margin-block: 10px;
    .label-container {
        font-weight: bold;
        margin-right: 10px;
    }

    .value-container {
        display: flex;
        min-width: 40px;
        align-items: center;
        justify-content: center;
    }
`;

interface FieldLabelProps {
    label: string;
    value: any;
    loading?: boolean;
}

const FieldLabel: React.FC<FieldLabelProps> = (props) => {
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

export default FieldLabel;
