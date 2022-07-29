import React from "react";
import { Tooltip, Whisper, Button } from "rsuite";

const WhisperButton = React.forwardRef(({ children, ...props }, ref) => {
    return (
        <div ref={ref} {...props}>
            {children}
        </div>
    );
});

const CustomComponent = ({
    placement = "top",
    children,
    trigger = "hover",
    text,
}) => (
    <Whisper
        trigger={trigger}
        placement={placement}
        controlId={`control-id-${placement}`}
        speaker={<Tooltip>{text}</Tooltip>}
    >
        <WhisperButton>{children}</WhisperButton>
    </Whisper>
);

export default CustomComponent;
