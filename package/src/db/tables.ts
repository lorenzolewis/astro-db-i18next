// @ts-expect-error
import { defineTable, column } from "astro:db";

export const Languages = defineTable({
  columns: { id: column.text({ primaryKey: true }) },
});

export const Namespaces = defineTable({
  columns: { id: column.text({ primaryKey: true }) },
});

export const Translations = defineTable({
  columns: {
    language: column.text({ references: () => Languages.columns.id }),
    namespace: column.text({ references: () => Namespaces.columns.id }),
    key: column.text(),
    value: column.text(),
  },
  indexes: [{
    on: ["language", "namespace", "key"], unique: true
  }]
});
