import React, { useCallback, useEffect, useRef } from "react";
import { Button, Popover, Whisper } from "rsuite";
import styled from "styled-components";

const DefaultPopover = React.forwardRef(({ children, ...props }, ref) => {
    return (
        <Popover ref={ref} {...props}>
            {children}
        </Popover>
    );
});

const WhisperButton = React.forwardRef(({ children, ...props }, ref) => {
    return (
        <div ref={ref} {...props}>
            {children}
        </div>
    );
});
const PopoverRS = ({
    placement = "bottom",
    children,
    button,
    trigger = "click",
}) => {
    const triggerRef = useRef();
    return (
        <Whisper
            trigger={trigger}
            placement={placement}
            ref={triggerRef}
            controlId={`control-id-${placement}`}
            speaker={<DefaultPopover children={children} />}
        >
            <WhisperButton>{button}</WhisperButton>
        </Whisper>
    );
};

export default PopoverRS;
