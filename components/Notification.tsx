import React, { useContext, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Notification } from "rsuite";
import styled, { ThemeContext } from "styled-components";
import { closeNotification } from "../redux/actions/global";
import { NOTIFICATIONS_TYPES } from "../utils/constants";
import Icon from "./icon/Icon";

const StyledNotification = styled.div`
    min-width: 200px;
    min-height: 40px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: fixed;
    top: 10px;
    right: 10px;
    background-color: white;
    animation: fadeIn 2s;

    .close-notification {
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .body-notification {
        display: flex;
        align-items: center;

        span {
            margin-left: 10px;
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

const RenderIconNotification = (type) => {
    const themeContext = useContext(ThemeContext);

    if (type === NOTIFICATIONS_TYPES.ERROR) {
        return (
            <Icon
                icon={["fas", "error"]}
                fontSize="16px"
                color={themeContext.info_color}
            />
        );
    }
    return (
        <Icon
            icon={["fas", "info"]}
            fontSize="16px"
            color={themeContext.info_color}
        />
    );
};
const NotificationCustom = () => {
    const { show, text, type } = useSelector(
        (state: any) => ({
            show: state.Global.notification.show,
            text: state.Global.notification.text,
            type: state.Global.notification.type,
        }),
        shallowEqual
    );

    const timeOut: any = useRef();
    const dispatch = useDispatch();
    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        if (show && !timeOut.current) {
            timeOut.current = setTimeout(() => {
                dispatch(closeNotification());
            }, 3000);
        }
    }, [show]);

    if (!show) return null;

    
    return (
        <StyledNotification>
            <div className="body-notification">
                <RenderIconNotification type={type} />
                <span>{text}</span>
            </div>
            <div className="close-notification">
                <Icon
                    icon={["fas", "times"]}
                    fontSize="16px"
                    color={themeContext.color_background}
                    onClick={() => dispatch(closeNotification())}
                />
            </div>
        </StyledNotification>
    );
};

export default NotificationCustom;
