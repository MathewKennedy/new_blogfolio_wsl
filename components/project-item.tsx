import React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";
import { Tag } from "./tag";
import { Card, CardHeader, CardContent } from "./ui/card";

interface ProjectItemProps {
    slug: string;
    title: string;
    description?: string;
    date: string;
    tags?: Array<string>;
}

export function ProjectItem({slug, title, description, date, tags} : ProjectItemProps){

    return (
        // <Card>
        //     <CardHeader>
        //         <Link href={"/" + slug}>
        //                     {title}
        //                 </Link>
        //         </CardHeader>
        //     <CardContent>
                // <div className="flex gap-2 mb-3">
                //     {tags?.map((tag) => (
                //         <Tag tag={tag} key={tag} type="project"/>
                //         )
                //     )}
                // </div>
        //         <div className="max-w-none text-muted-foregroud">
        //             {description}
        //         </div>
        //         <div className="flex justify-between items-center">
        //             <dl>
        //                 <dt className="sr-only">Published On</dt>
        //                 <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
        //                     <CalendarIcon className="h-4 w-4"/>
        //                     <time dateTime={date}>{formatDate(date)}</time>
        //                 </dd>
        //             </dl>
        //             <Link href={"/" + slug} className={cn(buttonVariants({variant: "link"}), "py-0")}>
        //                 Read more &rarr;
        //             </Link>
        //         </div>
        //     </CardContent>
        // </Card>

        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={"/" + slug}>
                <img className="rounded-t-lg" src="/novel/novel.png" alt="A screenshot of the homepage of Nov3l, the web3 library." />
            </Link>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <Link href={"/" + slug}>
                        {title}
                    </Link>    
                </h5>
                <div className="flex gap-2 mb-3">
                    {tags?.map((tag) => (
                            <Tag tag={tag} key={tag} type="project-item"/>
                        )
                    )}
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <div className="flex justify-between items-center">
                    <dl>
                        <dt className="sr-only">Published On</dt>
                        <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
                            <CalendarIcon className="h-4 w-4"/>
                            <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                    </dl>
                    <Link href={"/" + slug} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-fuchsia-400 rounded-lg hover:fuchsia-500 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-500 dark:focus:ring-fuchsia-700">
                        Read more &rarr;
                    </Link>
                 </div>
            </div>
        </div>
        
    )
}