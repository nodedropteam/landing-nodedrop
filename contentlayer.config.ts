// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Doc = defineDocumentType(() => ({
    name: 'Doc',
    filePathPattern: `**/*.md`,
    fields: {
        title: { type: 'string', required: true },
        headshot: {type: 'string', required: false},
        role: {type: 'string', required: false},
        social: {type: 'string', required: false},
        socialLink: {type: 'string', required: false}
    },
    computedFields: {
        url: { type: 'string', resolve: (doc) => `/about/${doc._raw.flattenedPath}` },
    },
}))

export default makeSource({ contentDirPath: 'src/md', documentTypes: [Doc] })