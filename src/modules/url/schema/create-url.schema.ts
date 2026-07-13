import {z} from 'zod'

export const CreateUrlSchema = z.object({
    originalurl : z.string().url().max(2048),
    customeAlias: z.string().min(3).max(20).optional(),
    expiresInDays: z.number().int().positive().optional()

})


export type CreateUrlDto = z.infer<typeof CreateUrlSchema>