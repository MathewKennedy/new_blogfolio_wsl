"use client"

import React from "react";
import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Button } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export function MobileNav(){
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" className="w-10 px-0 sm:hidden">
                    <HamburgerMenuIcon className="h-5 w-5"/>
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </SheetTrigger>
            <SheetContent>
                UL
            </SheetContent>
        </Sheet>
    )
}