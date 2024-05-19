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
            <div className="min-w-48 max-w-48 flex-col gap-2">
                <Avatar className="h-48 w-48">
                    <AvatarImage src="/avatar.png" alt={siteConfig.author}></AvatarImage>
                    <AvatarFallback>MK</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold text-center break-words mt-4">
                    {siteConfig.author}
                </h2>
                <p className="text-muted-foreground text-center break-words">
                    Software Engineer
                </p>
            </div>
            <p className="text-muted-foreground text-lg py-4">
                I'm a passionate and creative full stack software developer. I love using my logical and creative sides together, 
                and I jump easily between front end, back end, and different stacks due to a great grasp of fundamentals. 
                I acquired a national diploma in IT in college, and found my love of programming making my own applications and 
                games using many technologies, old and brand new. <br /> 
                I graduated a full stack engineering traineeship in 2023, and I've been working at TAB on financial applications since. <br />
                I'm currently studying web3 technologies. <br />
            </p>
        </div>
        {/* awards */}
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center mt-8">
            <p className="text-muted-foreground text-lg py-4">
                I'm really proud that our small team of five was shortlisted for the "Scaling at Pace" award in the 2023 UK PropTech Awards.
                Shortly after, we were also finalists for "The Best Proptech Company" at the Property Reporter Awards 2024! 🏆
            </p>
            <div className="min-w-[205px] max-w-[205px] flex-col gap-2">
                <img src="/awards.png" alt="An image of the TAB HQ Tech Team at the Property Reporter Awards 2024 and UK PropTech Awards 2023." />
            </div>
        </div>
    </div>
}