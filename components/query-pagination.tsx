"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "./ui/pagination";

interface QueryPaginationProps {
    totalPages: number;
    className?: string;
}

export function QueryPagination ({ totalPages, className } : QueryPaginationProps){
    const pathname = usePathname();
    const searchParams = useSearchParams(); // can only be used in "use client" of course as this needs to run in browser to get params

    const currentPage = Number(searchParams.get("page")) || 1;
    const prevPage = currentPage - 1
    const nextPage = currentPage + 1

    console.log("totalPages in QueryPagination function componenet is:", totalPages) // 1 always


    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        return `${pathname}?${params.toString()}`
    }

    return <Pagination className={className}>
        <PaginationContent>
            { prevPage >= 1 ? (
                <PaginationItem>
                    <PaginationPrevious href={createPageURL(prevPage)} />
                </PaginationItem>
            ):null}

            {Array(totalPages).fill("").map((_, index) => (
                <PaginationItem className="hidden sm:inline-block" key={`page-button-${index}`}>
                    <PaginationLink isActive={currentPage === index + 1} href={createPageURL(index + 1)}>
                        {index + 1}
                    </PaginationLink>
                </PaginationItem>
            ))}

            { nextPage <= totalPages ? (
                <PaginationItem>
                    <PaginationNext href={createPageURL(nextPage)} />
                </PaginationItem>
            ):null}
        </PaginationContent>
    </Pagination>
}