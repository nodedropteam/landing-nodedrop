import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const query = `*[_type == "siteSettings"`;

const options = {};

export default async function IndexPage() {
    const settings = await client.fetch<SanityDocument[]>(query, {}, options);
    console.log(settings);

    return (
        <></>
    );
}