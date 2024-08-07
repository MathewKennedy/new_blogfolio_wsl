import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me",
    description: "Information about software engineer Mathew Kennedy",
    
}

export default async function AboutPage(){
    return <div className="container max-w-6xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
            <div className="flex-1 space-x-4">
                <h1 className="inline-block font-black text-4xl lg:text-5xl">
                    About Me
                </h1>
            </div>
        </div>
        <hr className="my-8" />
        {/* picture and about me */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="min-w-48 max-w-48">
                <Avatar className="h-48 w-48">
                    <AvatarImage src="/avatar.png" alt={siteConfig.author}></AvatarImage>
                    <AvatarFallback>MK</AvatarFallback>
                </Avatar>
            </div>
            <div>
                <p className="text-muted-foreground text-lg py-4">
                    I'm a passionate full-stack software engineer. I acquired a National Diploma in Computer Science at college, and found my passion developing my own applications and games.<br/><br/>
                    Since graduating from a full-stack engineering traineeship, I've been working full-time on financial applications at TAB, a bridging and property finance specialist.<br/><br/>
                    I'm continually expanding my knowledge through self-study in computer science, mathematics, and physics, applying these learnings to enhance my problem-solving and development abilities.
                </p>
            </div>
        </div>
        {/* awards */}
        <div className="flex flex-col md:flex-row gap-8 items-center mt-8">
            <div className="min-w-48 max-w-48">
                <img src="/awards.png" alt="An image of the TAB HQ Tech Team at the Property Reporter Awards 2024 and UK PropTech Awards 2023." />
            </div>
            <p className="text-muted-foreground text-lg py-4">
                I'm really proud that our small team of five developers at TAB was shortlisted for the "Scaling at Pace" award in the 2023 UK PropTech Awards.
                Shortly after, we were also finalists for "The Best Proptech Company" at the Property Reporter Awards 2024! 🏆
            </p>
        </div>
    </div>
}