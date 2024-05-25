import { z } from 'zod';
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email field is required')
    .regex(/^[^\s@]+@stud\.noroff\.no$/, {
      message: 'Email must be a valid stud.noroff.no email address',
    }),
  password: z.string().min(8, 'Password field is required'),
});

export const resultsSchema = z.object({
  accessToken: z.string(),
  avatar: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  banner: z.object({
    url: z.string(),
    alt: z.string(),
  }),

  bio: z.string(),
  email: z.string(),
  name: z.string(),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
export type ResultsSchemaType = z.infer<typeof resultsSchema>;
