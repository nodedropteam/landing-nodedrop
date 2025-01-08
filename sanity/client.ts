import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "zd8hpf14",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});