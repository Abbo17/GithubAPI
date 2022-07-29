import React, { useContext } from "react";
import { Avatar, Input } from "rsuite";
import styled, { ThemeContext } from "styled-components";
import Icon from "../../components/icon/Icon";

const StyledSearch = styled.div`

`;

const Search = (props) => {
    const {text, onChange} = props
    const themeContext = useContext(ThemeContext);
    return (
        <StyledSearch>
            <Input 
                defaultValue={text}
                onChange={onChange}
            />
        </StyledSearch>
    );
};

export default Search;
