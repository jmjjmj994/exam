import { z } from 'zod';
export const userBookingsSchema = z.array(z.object({
    id:z.string().default(''),
    created:z.string().default(''),
    dateFrom:z.string().default(''),
    dateTo:z.string().default(''),
    guests:z.number().default(0),
    updated:z.string().default('')

}));

export type UserBookingType = z.infer<typeof userBookingsSchema>