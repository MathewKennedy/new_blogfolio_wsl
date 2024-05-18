import Link from "next/link";
import { cn, sortPosts } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { PostItem } from "@/components/post-item";
import { siteConfig } from "@/config/site";
import { posts } from "#site/content";

export default function Home() {

  const latestPosts = sortPosts(posts).slice(0, 5);
  
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="container flex flex-col gap-4 text-center">
          <div className="flex flex-row justify-center">
            <h1 className="py-2 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance bg-clip-text text-transparent bg-gradient-to-r from-[#96fffa] to-[#faacd4]">
              blogfolio
            </h1>
          </div>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            Mathew Kennedy
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link href="/projects" className={cn(buttonVariants({ size: "lg"}), "w-full sm:w-fit")}>
              Projects
            </Link>
            <Link href="/blog" className={cn(buttonVariants({ size: "lg"}), "w-full sm:w-fit")}>
              Blog
            </Link>
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer" className={cn(buttonVariants( { variant: "outline", size: "lg" }), "w-full sm:w-fit" )}>
              Github
            </Link>
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map(post => (
          <li key={post.slug} className="first:border-t first:border-border">
              <PostItem slug={post.slug} title={post.title} description={post.description} date={post.date} tags={post.tags}/>
          </li>))}
        </ul>
      </section>
    </>
  );
}
