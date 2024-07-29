import { getProjectsByTagSlug, getAllTags, sortTagsByCount, cn } from "@/lib/utils";
import { projects } from "#site/content"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Tag } from "@/components/tag";
import { ProjectItem } from "@/components/project-item";
import { slug } from "github-slugger";
import { Metadata } from "next";

interface ProjectTagPageProps {
    params: {
        tag: string
    }
}

export async function generateMetaData({ params }: ProjectTagPageProps) : Promise<Metadata>{
    const { tag } = params;
    return {
        title: tag,
        description: `Projects related to ${tag}.`
    }
}

export const generateStaticParams = () => {
    const tags = getAllTags(projects);
    const paths = Object.keys(tags).map(tag => ({tag: slug(tag)}))
    return paths;
}

export default function TagPage({ params } : ProjectTagPageProps){

    const { tag } = params;
    const title = tag.split('-').join(' ');

    const tags = getAllTags(projects);
    const sortedTags = sortTagsByCount(tags)
    
    const displayPosts = getProjectsByTagSlug(projects, tag);

    return (
        <div className="container max-w-4xl py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-black text-4xl lg:text-5xl capitalize">{title}</h1>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-3 mt-8">
                <div className="col-span-12 col-start-1 sm:col-span-8">
                    {displayPosts?.length > 0 ? (
                        <ul className="flex flex-col">
                            {displayPosts.map((post) => {
                                const { slug, date, title, description, project_image, tags } = post;
                                return (
                                    <li key={slug}>
                                        <ProjectItem slug={slug} date={date} title={title} description={description} projectImage={project_image} tags={tags} />
                                    </li>
                                )
                            })}
                        </ul>
                    ) : (
                        <div>There are no posts to show right now.</div>
                    )}
                
                </div>
                <Card className={cn("col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1", "-border", "-shadow")}>
                    <CardHeader>
                        <CardTitle>
                            Tags
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {sortedTags?.map((t) => <Tag tag={t} key={t} count={tags[t]} type="project-item" current={slug(t) === tag}/> )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}