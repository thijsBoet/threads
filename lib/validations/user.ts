import * as z from 'zod';

export const userValidation = z.object({
  profile_photo: z
    .string()
    .url()
    .nonempty(),
	name: z
		.string()
		.min(3, { message: 'Name has a minimum of three characters' })
		.max(30, { message: 'Name has a maximum of thirty characters' }),
	username: z
		.string()
		.min(3, { message: 'Username has a minimum of three characters' })
		.max(50, { message: 'Username has a maximum of fifty characters' }),
});