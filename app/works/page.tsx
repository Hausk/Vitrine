import Image from "next/image"
import { getPublishedWorks } from "../libs/actions/works";

export default async function Page() {
    const works = await getPublishedWorks();
    return (
        <main>
            <h1>Works</h1>
            {works.map((work, index) => (
                <a key={index} href={'/works/' + work.slug} className="flex justify-between">
                    <h2>{work.title}</h2>
                    <p>{work.image[0].path}</p>
                </a>
            ))}
        </main>
    )
}