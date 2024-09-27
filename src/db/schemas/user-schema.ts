import { int, mysqlEnum, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("user", {
  id: int("id").primaryKey().autoincrement().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  userName: varchar("userName", { length: 255 }).notNull().unique(),
  email: varchar("email", { length: 500 }).notNull().unique(),
  password: varchar("password", { length: 750 }).notNull(),
  refreshToken: varchar("refreshToken", { length: 750 }),
  role: mysqlEnum("role", ["4128"]),
});
