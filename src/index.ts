require("dotenv").config({ path: "../.env" });
import { authentication, createDirectus, readItems, rest } from "@directus/sdk";
import { Schema } from "../types/directus";

const CMS_URL = "";
const CMS_EMAIL = "";
const CMS_PASS = "";

const client = createDirectus<Schema>(CMS_URL)
  .with(authentication())
  .with(rest());

(async () => {
  await client.login(CMS_EMAIL, CMS_PASS);
  const result = await client.request(
    readItems("article_category", { limit: 3 }),
  );
  for (const item of result) {
    console.log(item.id, item.slug);
  }
})();
