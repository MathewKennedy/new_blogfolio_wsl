import React from "react";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons"
import { siteConfig } from "@/config/site";
import { Icons } from "./icons";

export function SiteFooter(){
    return <footer>
        <div className="mb-6 mt-14 flex flex-col items-center">
            <div className="mb-3 flex space-x-4">
                <a href="mailto:kennedy4011@outlook.com" target="_blank" rel="noreferrer">
                    <span className="sr-only">Mail</span>
                    <EnvelopeClosedIcon className="h-6 w-6" />
                </a>
                <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
                    <span className="sr-only">LinkedIn</span>
                    <Icons.linkedin className="h-6 w-6"/>
                </a>
                <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
                    <span className="sr-only">Github</span>
                    <Icons.github className="h-6 w-6"/>
                </a>
            </div>
            <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
                <a href="/">{siteConfig.author}</a>
            </div>
        </div>
    </footer>
}