import { z } from 'zod';
import { checkUrlValid } from 'src/api/utilities/utilities';
export const validUrlSchema = z.string().refine(
  async (url) => {
    return await checkUrlValid(url);
  },
  { message: 'Invalid image URL' }
);

export const profileUpdateSchema = z.object({
  avatar: z.object({
    url: validUrlSchema.optional(),
    alt: z.string().optional().default('image'),
  }),
  venueManager: z.boolean().optional(),
});

export type ProfileUpdateSchemaType = z.infer<typeof profileUpdateSchema>;
