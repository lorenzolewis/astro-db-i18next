// @ts-expect-error
import { defineDb, defineTable, column } from "astro:db";
import { Languages, Namespaces, Translations } from "./tables.ts";

export default defineDb({
  tables: {
    Languages,
    Namespaces,
    Translations,
  },
});
