import React from "react";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import { wrapper } from "../../redux/store";
/* FontAwesome Library */

import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Head from "next/head";

const iconList = Object.keys(Icons)
    .filter((key) => key !== "fas" && key !== "prefix")
    .map((icon) => Icons[icon]);

library.add(...iconList);
library.add(fas);
library.add(fab, far);

const StyledMainLayout = styled.div`
    width: 100%;
    height: 100%;
`;
const MainLayout = (props) => {
    const { children } = props;
    //const window = null;

    return (
        <StyledMainLayout>
            <Navbar />
            {children}
        </StyledMainLayout>
    );
};

export default wrapper.withRedux(MainLayout);
