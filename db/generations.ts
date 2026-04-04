import { and, count, desc, eq, gte, InferInsertModel } from 'drizzle-orm';

import { db } from '@/db/index';
import { generations } from '@/db/schema';

export function utcMonthStart() {
    const now = new Date();
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1, 0, 0, 0, 0));
}

export async function countGenerationsSince(clerkUserId: string, since: Date) {
    const [row] = await db.select({ c: count() }).from(generations).where(and(eq(generations.clerkUserId, clerkUserId), gte(generations.createdAt, since)));
    return Number(row?.c ?? 0);
}

export async function listUserGenerationSummary(clerkUserId: string) {
    const rows = await db.select().from(generations)
        .where(eq(generations.clerkUserId, clerkUserId))
        .orderBy(desc(generations.createdAt));
    return rows;
}

type InsertGenerationInput = Omit<InferInsertModel<typeof generations>, 'id' | 'createdAt'>;
export async function createGeneration(input: InsertGenerationInput) {
    const [row] = await db.insert(generations).values(input).returning();
    return row;
}