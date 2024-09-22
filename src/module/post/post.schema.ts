import { z } from 'zod';

export const PostSchema = z
  .object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    published: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string(),
    authorId: z.string(),
    author: z
      .object({
        id: z.string(),
        email: z.string(),
        phoneNo: z.string(),
        verificationToken: z.string().optional(),
        wrongPasswordAttempt: z.number().optional(),
        lockoutTime: z.string().optional(),
        twoFactorAuthToken: z.string().optional(),
        roleId: z.string().optional(),
      })
      .optional(),
  })
  .strict();

export type Post = z.infer<typeof PostSchema>;
