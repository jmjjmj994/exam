import { z } from 'zod';
export const registerSchema = z.object({
  name: z
    .string()
    .min(1)
    .regex(/^[a-zA-Z0-9_]+$/, {
      message:
        'The name must not contain punctuation symbols apart from underscore (_)',
    })
    .max(255),
  email: z
    .string()
    .min(1)
    .regex(/^[^\s@]+@stud\.noroff\.no$/, {
      message: 'The email value must be a valid stud.noroff.no email address',
    })
    .max(255),

  password: z
    .string()
    .min(8, 'The password value must be at least 8 characters')
    .max(255),

  VenueManager: z.boolean().optional(),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;
