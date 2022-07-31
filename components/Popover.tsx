import React, { useCallback, useEffect, useRef } from "react";
import { Button, Popover as PopoverRS, Whisper } from "rsuite";
import styled from "styled-components";

interface PropsType {
    children: React.ReactNode;
}

interface PopoverProps {
    placement?: any;
    trigger?: any;
    children: React.ReactNode;
    button: React.ReactNode;
}
const DefaultPopover = React.forwardRef<any, PropsType>(
    ({ children, ...props }, ref) => {
        const _ref: React.LegacyRef<HTMLInputElement> = ref;
        return (
            <PopoverRS ref={_ref} {...props}>
                {children}
            </PopoverRS>
        );
    }
);

const WhisperButton = React.forwardRef<any, PropsType>(
    ({ children, ...props }, ref) => {
        return (
            <div ref={ref} {...props}>
                {children}
            </div>
        );
    }
);
const Popover: React.FC<PopoverProps> = ({
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

export default Popover;
