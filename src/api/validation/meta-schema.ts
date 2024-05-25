import { z } from 'zod';

export const metaSchema = z.object({
  isFirstPage: z.boolean(),
  isLastPage: z.boolean(),
  currentPage: z.number(),
  previousPage: z.union([z.number(), z.null()]),
  nextPage: z.union([z.number(), z.null()]),
  pageCount: z.number(),
  totalCount: z.number(),
});

export type MetaType = z.infer<typeof metaSchema>;
