import React from "react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface CalloutProps {
    children?: ReactNode,
    type?: "default" | "warning" | "danger"
}

export function Callout({
    children,
    type = "default",
    ...props
} : CalloutProps){
    return <div className={cn("my-6 items-start rounded-md border border-l-4 p-4 w-full dark:max-w-none", {
        "border-red-900 bg-red-50 dark:prose": type === "danger",
        "border-yellow-900 bg-yellow-50 dark:prose": type === "warning",
    })} {...props}>
        <div>
            {children}
        </div>
    </div>
}

// syntax above: in the object passed as the second argument to cn(), the string of classes is the key, and it's set to a bool, which is whether type == "danger"
// the first key styles will only be applied if type is danger, for e.g

