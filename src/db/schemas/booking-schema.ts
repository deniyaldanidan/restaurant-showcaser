import { date, int, mysqlTable, time, varchar } from "drizzle-orm/mysql-core";

export const bookings = mysqlTable("booking", {
  id: varchar("id", { length: 255 })
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 255 }).notNull(),
  noOfPersons: int("noOFPersons").notNull(),
  date: date("date", { mode: "date" }).notNull(),
  time: time("time").notNull(),
  mobile: varchar("mobile", { length: 15 }).notNull(),
});
