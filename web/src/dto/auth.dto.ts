import { z } from 'zod';

export const SignInDto = z.object({
  email: z.string(),
  password: z.string().min(8),
});

export type SignInDto = z.infer<typeof SignInDto>;

export const SignUpDto = z.object({
  name: z.string().min(1),
  email: z.string(),
  password: z.string().min(8),
});

export type SignUpDto = z.infer<typeof SignUpDto>;
