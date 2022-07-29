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

//Rsuite CSS
import "rsuite/dist/rsuite.min.css";
import Notification from "../Notification";

const iconList = Object.keys(Icons)
    .filter((key) => key !== "fas" && key !== "prefix")
    .map((icon) => Icons[icon]);

library.add(...iconList);
library.add(fas);
library.add(fab, far);

const StyledMainLayout = styled.div`
    width: 100%;
    height: 100%;

    .main-container {
        height: calc(100% - 50px);
    }
`;
const MainLayout = (props) => {
    const { children } = props;
    //const window = null;

    return (
        <StyledMainLayout>
            <Notification />
            <Navbar />
            <div className="main-container">{children}</div>
        </StyledMainLayout>
    );
};

export default wrapper.withRedux(MainLayout);
