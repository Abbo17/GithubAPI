import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Notification } from "rsuite";
import Portal from "./Portal";

const NotificationCustom = () => {
    const { showNotification } = useSelector(
        (state: any) => ({
            showNotification: state.Global.showNotification,
        }),
        shallowEqual
    );

    if (!showNotification) return null;

    return (
        <Portal>
            <Notification>
                <span>Test</span>
            </Notification>
        </Portal>
    );
};

export default NotificationCustom;
