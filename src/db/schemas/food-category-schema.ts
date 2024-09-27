import { foodTypes } from "@/utils/types";
import {
  int,
  mysqlEnum,
  mysqlTable,
  text,
  varchar,
} from "drizzle-orm/mysql-core";

export const foodCategory = mysqlTable("foodCategory", {
  id: int("id").primaryKey().autoincrement().notNull(),
  name: varchar("name", { length: 500 }).notNull(),
  description: text("description").notNull(),
  foodType: mysqlEnum("foodType", foodTypes).notNull(),
});
