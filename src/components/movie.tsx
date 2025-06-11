"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface IMovieProps {
    id: string;
    title: string;
    poster_path: string;
}

export default function Movie({ id, title, poster_path }: IMovieProps) {
    const router = useRouter();
    const onClick = () => {
        // This is an example of how you might handle a click event 
        router.push(`/movies/${id}`);
    }
    return (
        <div>
            <img src={poster_path} alt={title} onClick={onClick} />
            <Link prefetch href={`/movies/${id}`}>{title}</Link>
        </div>
    );
}