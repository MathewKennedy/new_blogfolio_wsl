import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
            Hello, I&apos;m Mathew
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            Welcome to my software development blog.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link href="/blog" className={cn(buttonVariants({ size: "lg"}), "w-full sm:w-fit")}>
              View my blog
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
      </section>
    </>
  );
}
