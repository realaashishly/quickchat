import { cn } from "@/lib/utils";
import React from "react";

type Props = {
    children: React.ReactNode;
    className: string;
};

export default function layout({ children, className }: Props) {
    return (
        <div
            className={cn(
                "h-screen flex justify-center items-center",
                className
            )}
        >
            {children}
        </div>
    );
}
