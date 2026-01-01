'use client';

import { ReactNode } from "react";

interface AvatarProps {
    src: string;
    className: string;
    imgClassName: string;
    children: ReactNode;
}

export default function Avatar({
    src,
    className,
    imgClassName,
    children,
}:AvatarProps) {
    return(
        <div className={`relative ${className}`}>
            <img src={`${process.env.NEXT_PUBLIC_API_ROOT_URL}${src}`} alt="user avatar" className={`rounded-full border object-cover ${imgClassName}`} />
            {children}
        </div>

    );
}
