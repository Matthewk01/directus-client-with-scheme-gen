import {authentication, createDirectus, readItems, rest} from "@directus/sdk";
import {Schema} from "node:inspector";

const client = createDirectus<Schema>('http://cms.modular.altron.net').with(authentication()).with(rest());

(async () => {
        await client.login('cmsadmin@modular.altron.net', '7h9g58v74eyj872')
        const result = await client.request(readItems('article_category', { limit: 3 }))
        for (const item of result) {
            console.log(item.id, item.slug);
        }
    }
)();