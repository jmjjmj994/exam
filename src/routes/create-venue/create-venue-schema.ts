import { z } from 'zod';
import { validUrlSchema } from '../user-profile/profile-update-schema';
const castToNum = z.preprocess((val) => Number(val), z.number().default(1));
export const createVenueSchema = z.object({
  name: z.string().min(5).max(30, 'maximal numbers of characters are 30'),
  description: z
    .string()
    .min(10)
    .max(200, 'maximum number of characters are 200'),
  media: z.array(
    z.object({
      url: z.string(),
      alt: z.string().optional(),
    })
  ),

  price: z.number(),
  maxGuests: castToNum,
  meta: z
    .object({
      wifi: z.boolean(),
      parking: z.boolean(),
      breakfast: z.boolean(),
      pets: z.boolean(),
    })
    .optional(),
  location: z.object({
    country: z.string(),
    city: z.string(),
    address: z.string().min(1),
  }),
});
export type CreateVenueSchemaType = z.infer<typeof createVenueSchema>;
