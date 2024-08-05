import * as runtime from "react/jsx-runtime";
import Image from "next/image"
import React from "react";
import { Callout } from "./callout";
import { AnimatedPhone } from "./animated-phone";

// function to take in a string of code and convert it to a JS function using Function(code)
// it then calls that function with the imported runtime as it's context
// it returns the default export of the return value of that function
const useMDXComponent = (code: string) => {
    const fn = new Function(code);
    return fn({... runtime }).default
}

const components = {
    Image,
    Callout,
    AnimatedPhone
}

interface MdxProps {
    code: string
}

export function MDXContent({ code }: MdxProps) {
    const Component = useMDXComponent(code);
    return <Component components={components}/>
}