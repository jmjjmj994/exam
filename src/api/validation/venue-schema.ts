import { z } from 'zod';
export const venueSchema = z.object({
  id: z.string().default(''),
  name: z.string().default(''),
  description: z.string().default(''),
  _count: z.object({
    bookings: z.number().default(0),
  }),
  owner: z.object({
    avatar: z.object({
      url: z.string().default(''),
      alt: z.string().default(''),
    }),
    banner: z.object({
      url: z.string().default(''),
      alt: z.string().default(''),
    }),
    name: z.string(),
    email: z.string().optional(),
    bio: z.string().nullable().default(null),
  }),
  media: z
    .array(
      z.object({
        url: z.string().default(''),
        alt: z.string().default(''),
      })
    )
    .default([]),
  price: z.number().default(0),
  maxGuests: z.number().default(0),
  rating: z.number().default(0),
  meta: z.object({
    wifi: z.boolean().default(false),
    parking: z.boolean().default(false),
    breakfast: z.boolean().default(false),
    pets: z.boolean().default(false),
  }),
  created: z.string(),
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
  location: z
    .object({
      address: z.string().nullable().default(null),
      city: z.string().nullable().default(null),
      zip: z.string().nullable().default(null),
      country: z.string().nullable().default(null),
      continent: z.string().nullable().default(null),
      lat: z.number().default(0).nullable(),
      lng: z.number().default(0).nullable(),
    })
    .optional(),
});

const bookingsSchema = z
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
  .default([]);

export const locationSchema = z
  .object({
    address: z.string().nullable().default(null),
    city: z.string().nullable().default(null),
    zip: z.string().nullable().default(null),
    country: z.string().nullable().default(null),
    continent: z.string().nullable().default(null),
    lat: z.number().default(0).nullable(),
    lng: z.number().default(0).nullable(),
  })
  .optional();

export type LocationType = z.infer<typeof locationSchema>;
export type BookingsType = z.infer<typeof bookingsSchema>;
export type VenueType = z.infer<typeof venueSchema>;
