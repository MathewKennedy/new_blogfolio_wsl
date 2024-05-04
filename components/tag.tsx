import React from "react";
import Link from "next/link";
// converts tags to slugs
import { slug } from "github-slugger";
import { badgeVariants } from "./ui/badge";

interface TagProps {
    tag: string;
    current?: boolean;
    count?: number;
}

export function Tag({ tag, current, count} : TagProps){
    return (
        <Link 
            href={`/tags/${slug(tag)}`}
            className={badgeVariants({ variant: current ? "default" : "secondary", className: "no-underline" })}
        >
            {tag}
        </Link>
    )
}