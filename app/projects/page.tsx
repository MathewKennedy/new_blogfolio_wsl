import React from "react";
import { projects } from "#site/content";
import { ProjectItem } from "@/components/project-item";
import { cn, getAllProjectTags, sortProjects, sortTagsByCount } from "@/lib/utils";
import { QueryPagination } from "@/components/query-pagination";
import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tag } from "@/components/tag";

export const metadata: Metadata = {
    title: "My Projects",
    description: "Work and projects by UK-based software engineer Mathew Kennedy"
}

const PROJECTS_PER_PAGE = 5;

interface ProjectPageProps {
    searchParams: {
        page?: string
    }
}

export default async function ProjectPage({ searchParams } : ProjectPageProps){

    const currentPage = Number(searchParams?.page) || 1;
    const sortedProjects = sortProjects(projects.filter((project) => project.published));
    const totalPages = Math.ceil(sortedProjects.length / PROJECTS_PER_PAGE)

    const displayProjects = sortedProjects.slice(
        PROJECTS_PER_PAGE * (currentPage - 1),
        PROJECTS_PER_PAGE * currentPage
    )

    const tags = getAllProjectTags(projects);
    const sortedProjectTags = sortTagsByCount(tags);

    // potential to filter and read tags here

    return (
        <div className="container max-w-4xl py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-black text-4xl lg:text-5xl">Projects</h1>
                    <p className="text-xl text-muted-foreground">
                        My work and personal projects.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-3 mt-8">
                <div className="col-span-12 col-start-1 sm:col-span-8">
                    <hr />
                    {displayProjects?.length > 0 ? (
                        <ul className="flex flex-col">
                            {displayProjects.map((project) => {
                                const { slug, date, title, description, tags } = project;
                                return (
                                    <li key={slug}>
                                        <ProjectItem slug={slug} date={date} title={title} description={description} tags={tags} />
                                    </li>
                                )
                            })}
                        </ul>
                    ) : (
                        <div>There are no projects to show right now.</div>
                    )}
                    <QueryPagination 
                        totalPages={totalPages}
                        className="justify-end mt-4"
                    />
                </div>
                <Card className={cn("col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1", "-border", "-shadow")}>
                    <CardHeader>
                        <CardTitle>
                            Tags
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {sortedProjectTags?.map((tag) => <Tag tag={tag} key={tag} count={tags[tag]}/> )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )   
}