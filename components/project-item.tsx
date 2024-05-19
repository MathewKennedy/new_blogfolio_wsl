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
        <Card>
            <CardHeader>
                <Link href={"/" + slug}>
                            {title}
                        </Link>
                </CardHeader>
            <CardContent>
                <div className="flex gap-2 ">
                    {tags?.map((tag) => (
                        <Tag tag={tag} key={tag} type="project"/>
                        )
                    )}
                </div>
                <div className="max-w-none text-muted-foregroud">
                    {description}
                </div>
                <div className="flex justify-between items-center">
                    <dl>
                        <dt className="sr-only">Published On</dt>
                        <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
                            <CalendarIcon className="h-4 w-4"/>
                            <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                    </dl>
                    <Link href={"/" + slug} className={cn(buttonVariants({variant: "link"}), "py-0")}>
                        Read more &rarr;
                    </Link>
                </div>
            </CardContent>
        </Card>
        
    )
}