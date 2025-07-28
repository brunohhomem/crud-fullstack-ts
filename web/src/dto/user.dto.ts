import { z } from 'zod';

export const CreateUserDto = z.object({
  email: z.string(),
  name: z.string().min(1),
  password: z.string().min(8),
  avatarUrl: z.string().optional(),
});

export type CreateUserDto = z.infer<typeof CreateUserDto>;

export const UpdateUserDto = CreateUserDto.extend({
  id: z.string(),
  isActive: z.boolean().optional(),
  inactivatedAt: z.date().optional(),
});

export type UpdateUserDto = z.infer<typeof UpdateUserDto>;

// DTO para enviar ao cliente, omitindo campos sensíveis:
export type UserDto = {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  inactivatedAt?: Date;
};
