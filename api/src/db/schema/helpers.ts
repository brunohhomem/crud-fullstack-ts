import { boolean, timestamp } from "drizzle-orm/pg-core";

export function withTimestamps(entity: string) {
  return {
    createdAt: timestamp(`${entity}_created_at`).defaultNow().notNull(),
    updatedAt: timestamp(`${entity}_updated_at`)
      .defaultNow()
      .$onUpdate(() => new Date()),
    isActive: boolean(`${entity}_is_active`).default(true).notNull(),
    inactivatedAt: timestamp(`${entity}_inactivated_at`),
  }
}