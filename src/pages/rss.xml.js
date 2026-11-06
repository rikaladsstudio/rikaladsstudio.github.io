import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'Rika LADS Studio | Blog',
        description: "Rika's Journey as a Love & Deepspace player",
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en</language>`,
        copyright: 'Copyright © 2026 RikaLADSStudio. All rights reserved.',
    });
}