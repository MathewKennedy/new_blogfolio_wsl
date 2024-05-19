import React from "react";
import { projects } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import "@/styles/mdx.css";
import { siteConfig } from "@/config/site";
import { Tag } from "@/components/tag";

interface ProjectPageProps {
    params: {
        // url params will be separated by slashes and put in this array
        slug: string[];
    }
}

async function getProjectFromParams(params: ProjectPageProps["params"]){
    const slug = params?.slug?.join("/")
    const post = projects.find((project) => project.slugAsParams === slug)
    return post;
}

// Next JS function - generates metadata specific to this page
export async function generateMetadata({
    params
} : ProjectPageProps) : Promise<Metadata>{
    const project = await getProjectFromParams(params)
    if(!project){
        return {}
    }
    const ogSearchParams = new URLSearchParams();
    ogSearchParams.set("title", project.title)

    return {
        title: project.title,
        description: project.description,
        authors: { name: siteConfig.author},
        openGraph: {
            title: project.title,
            description: project.description,
            type: "article",
            url: project.slug,
            images: [
                {
                    url: `api/og/?${ogSearchParams.toString()}`,
                    width: 1200,
                    height: 630,
                    alt: project.title
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: project.title,
            description: project.description,
            images: [`api/og/?${ogSearchParams.toString()}`]
        }
    }
}

// this is a Next JS function that will generate params at build time
// we can do this because we know our params at build time, nothing is dynamic
export async function generateStaticParams(): Promise<ProjectPageProps["params"][]>{
    return projects.map((post) => ({
        slug: post.slugAsParams.split("/")
    }))
}

export default async function PostPage({ params } : ProjectPageProps){

    const project = await getProjectFromParams(params);
    if(!project || !project.published){
        notFound(); // built into Next
    }

    return (
        <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
            <h1 className="mb-2">{project.title}</h1>
            <div className="flex gap-2 mb-2">
                {
                    project.tags?.map((tag) => (
                        <Tag tag={tag} key={tag} type="project" />
                    ))
                }
            </div>
            { project.description ? (<p className="text-xl mt-0 text-muted-foreground">{project.description}</p>) : null}
            <hr className="my-4"/>
            <MDXContent code={project.body} />
        </article>
    )
}