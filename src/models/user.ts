import {z} from 'zod';

export const UserSchema = z.object({ 
  displayName: z.string().optional().nullable(),
  password: z.string().min(6).optional(),
  wishList: z.array(z.string()).optional(),
  id: z.string().optional(),
  email: z.string().email().optional(),
  groups: z.array(z.string()).optional(),
});

export const UserDtoSchema = z.object({
  displayName: z.string().optional(),
  id: z.string().optional()
});

export type UserDto = z.infer<typeof UserDtoSchema>;
export type User = z.infer<typeof UserSchema>;