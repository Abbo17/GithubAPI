import React, { useContext, useRef } from "react";
import { Avatar, Input } from "rsuite";
import styled, { ThemeContext } from "styled-components";
import Icon from "../../components/icon/Icon";

const StyledSearch = styled.div``;

const Search = (props) => {
    const { onSearch } = props;
    const themeContext = useContext(ThemeContext);

    const timer_write_break = useRef(null);
    const timer_write_timeout = useRef(null);
    const text = useRef();

    function doSearch(textArg = null) {
        let textSearch = text.current;
        onSearch(textSearch);
        if (timer_write_timeout.current) {
            clearTimeout(timer_write_timeout.current);
            timer_write_timeout.current = null;
        }
    }

    const handleSearch = (value) => {
        text.current = value;
        if (text?.current === "") {
            doSearch("");
        } else {
            if (timer_write_break.current) {
                clearTimeout(timer_write_break.current);
            }

            timer_write_break.current = setTimeout(() => {
                doSearch();
                timer_write_break.current = null;
            }, 300);

            if (!timer_write_timeout.current) {
                timer_write_timeout.current = setTimeout(() => {
                    doSearch();
                }, 1000);
            }
        }
    };
    return (
        <StyledSearch>
            <Input defaultValue={text.current} onChange={handleSearch} />
        </StyledSearch>
    );
};

export default Search;
