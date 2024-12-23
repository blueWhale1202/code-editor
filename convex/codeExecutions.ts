import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getCurrentUserOrThrow } from "./users";

export const saveExecution = mutation({
    args: {
        language: v.string(),
        code: v.string(),
        output: v.optional(v.string()),
        error: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const user = await getCurrentUserOrThrow(ctx);

        ctx.db.insert("codeExecutions", {
            ...args,
            userId: user.userId,
        });
    },
});

export const getLastExecution = query({
    args: {},
    handler: async (ctx) => {
        const user = await getCurrentUserOrThrow(ctx);

        const lastExecution = await ctx.db
            .query("codeExecutions")
            .withIndex("by_user_id", (q) => q.eq("userId", user.userId))
            .order("desc")
            .first();

        return lastExecution;
    },
});
