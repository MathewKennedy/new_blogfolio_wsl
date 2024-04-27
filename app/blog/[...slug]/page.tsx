import React from "react";
import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import "@/styles/mdx.css";

interface PostPageProps {
    params: {
        // url params will be separated by slashes and put in this array
        slug: string[];
    }
}

async function getPostFromParams(params: PostPageProps["params"]){
    const slug = params?.slug?.join("/")
    const post = posts.find((post) => post.slugAsParams === slug)
    return post;
}

// this is a Next JS function that will generate params at build time
// we can do this because we know our params at build time, nothing is dynamic
export async function generateStaticParams(): Promise<PostPageProps["params"][]>{
    return posts.map((post) => ({
        slug: post.slugAsParams.split("/")
    }))
}

export default async function PostPage({ params } : PostPageProps){

    const post = await getPostFromParams(params);
    if(!post || !post.published){
        notFound(); // built into Next
    }

    return (
        <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
            <h1 className="mb-2">{post.title}</h1>
            { post.description ? (<p className="text-xl mt-0 text-muted-foreground">{post.description}</p>) : null}
            <hr className="my-4"/>
            <MDXContent code={post.body} />
        </article>
    )
}