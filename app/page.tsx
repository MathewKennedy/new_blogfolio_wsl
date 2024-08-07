import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function Home() {
  
  return (
      <section className="space-y-6 pb-8 pt-6 mx-auto my-auto">
        <div className="container flex flex-col gap-4 text-center">
          <div className="flex flex-row justify-center">
            <h1 className="py-2 text-5xl sm:text-7xl font-black text-balance bg-clip-text text-transparent bg-gradient-to-r from-[#2e8694] to-[#942e53] dark:from-[#96fffa] dark:to-[#faacd4] mb-[1rem]">
              blogfolio
            </h1>
          </div>
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
  );
}
