import React from "react";
import Link from "next/link";
// converts tags to slugs
import { slug } from "github-slugger";
import { badgeVariants } from "./ui/badge";

interface TagProps {
    tag: string;
    current?: boolean;
    count?: number;
    type: string;
}

export function Tag({ tag, current, count, type} : TagProps){
    // check if tag type is project or blog
    // if it's project, the href should be prepended with /project-tags/, if it's blog, it's prepended with /tags/
    // also handle badge variants based on this - pink for projects, tealish for blogs
    let pathPrefix = type == "post" ? "/tags/" : "/project-tags/";



    return (
        <Link 
            href={`${pathPrefix}${slug(tag)}`}
            className={badgeVariants({ variant: type == "project-item" ? (current ? "default" : "pink") : (current ? "default" : "teal"), className: "no-underline" }) + " text-nowrap"}
        >
            {tag} {count ? `(${count})` : null}
        </Link>
    )
}