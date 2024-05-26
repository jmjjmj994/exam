import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string().default(''),
  email: z.string().default(''),
  banner: z
    .object({
      url: z.string().default(''),
      alt: z.string().default(''),
    })
    .default({ url: '', alt: '' }),
  avatar: z
    .object({
      url: z.string().default(''),
      alt: z.string().default(''),
    })
    .default({ url: '', alt: '' }),
  venueManager: z.boolean().default(false),
  _count: z
    .object({
      bookings: z.number().default(0),
      venues: z.number().default(0),
    })
    .default({ bookings: 0, venues: 0 }),
});

export type ProfileSchemaType = z.infer<typeof profileSchema>;
