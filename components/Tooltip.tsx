import React from "react";
import { Tooltip, Whisper, Button } from "rsuite";

interface PropsType {
    children: React.ReactNode;
}

interface CustomComponentProps {
    placement?: any;
    trigger?: any;
    children: React.ReactNode;
    text: string;
}

const WhisperButton = React.forwardRef<any, PropsType>(
    ({ children, ...props }, ref) => {
        const _ref: React.LegacyRef<HTMLInputElement> = ref;
        return (
            <div ref={_ref} {...props}>
                {children}
            </div>
        );
    }
);

const CustomComponent: React.FC<CustomComponentProps> = ({
    placement = "top",
    children,
    trigger = "hover",
    text = "",
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
