import { z } from 'zod';

export const venuesSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    _count: z.object({
      bookings: z.number().default(0),
    }),
    description: z.string(),
    media: z
      .array(
        z.object({
          url: z.string().default(''),
          alt: z.string().default(''),
        })
      )
      .default([]),
    price: z.number(),
    maxGuests: z.number(),
    rating: z.number(),
    created: z.string(),
    updated: z.string(),
    meta: z.object({
      wifi: z.boolean(),
      parking: z.boolean(),
      breakfast: z.boolean(),
      pets: z.boolean(),
    }),
    location: z.object({
      address: z.string().nullable().default(null),
      city: z.string().nullable().default(null),
      zip: z.string().nullable().default(null),
      country: z.string().nullable().default(null),
      continent: z.string().nullable().default(null),
      lat: z
        .number()
        .nullable()
        .transform((val) => val ?? 0),
      lng: z
        .number()
        .nullable()
        .transform((val) => val ?? 0),
    }),
    owner: z.object({
      name: z.string(),
      email: z.string().email(),
      bio: z.string().nullable().default(null),
      avatar: z.object({
        url: z.string(),
        alt: z.string(),
      }),
      banner: z.object({
        url: z.string(),
        alt: z.string(),
      }),
    }),
    bookings: z
      .array(
        z.object({
          id: z.string(),
          dateFrom: z.string(),
          dateTo: z.string(),
          guests: z.number(),
          created: z.string(),
          updated: z.string(),
          customer: z.object({
            name: z.string(),
            email: z.string(),
            bio: z.string().nullable().default(null),
            avatar: z.object({
              url: z.string().default(''),
              alt: z.string().default(''),
            }),
            banner: z.object({
              url: z.string().default(''),
              alt: z.string().default(''),
            }),
          }),
        })
      )
      .default([]),
  })
);

export type VenuesType = z.infer<typeof venuesSchema>;
