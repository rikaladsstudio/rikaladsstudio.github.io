import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';

export async function GET(context) {
    const postImportResult = import.meta.glob('./blog/*.md', { eager: true });
    const posts = Object.values(postImportResult);
    return rss({
        title: 'Rika LADS Studio | Blog',
        description: "Rika's Journey as a Love & Deepspace player",
        site: context.site,
        items: await Promise.all(posts.map(async (post) => ({
            link: post.url,
            content: sanitizeHtml((await post.compiledContent())),
            ...post.frontmatter,

        }))),
        customData: `<language>en</language>`,
        copyright: 'Copyright © 2026 RikaLADSStudio. All rights reserved.',
    });
}



// export async function GET(context) {
//     return rss({
//         title: 'Rika LADS Studio | Blog',
//         description: "Rika's Journey as a Love & Deepspace player",
//         site: context.site,
//         // items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
//         customData: `<language>en</language>`,
//         copyright: 'Copyright © 2026 RikaLADSStudio. All rights reserved.',
//     });
// }