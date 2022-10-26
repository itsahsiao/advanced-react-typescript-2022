import { z } from "zod";

export const extraIngredientSchema = z.object({
  name: z.string(), // can add if it's required, what strings are allowed, etc.
  price: z.number(),
});

export const extraIngredientsSchema = z.record(extraIngredientSchema);
