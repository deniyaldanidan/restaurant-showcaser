import {
  boolean,
  int,
  json,
  mysqlTable,
  text,
  varchar,
} from "drizzle-orm/mysql-core";
import { foodCategory } from "@/db/schemas/food-category-schema";
import { FoodAvailEnumType } from "@/utils/types";

export const foods = mysqlTable("food", {
  id: int("id").primaryKey().autoincrement().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  price: int("price").notNull(),
  availability: json("availability").$type<FoodAvailEnumType[]>().notNull(),
  veg: boolean("veg").notNull(),
  foodCategoryId: int("foodCategoryId")
    .notNull()
    .references(() => foodCategory.id, { onDelete: "cascade" }),
});
