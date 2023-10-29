import React from "react";

export type ButtonProps = {
    className?: string;
    size?: string;
    handleOnClick?: () => void;
    children: React.ReactNode;
};