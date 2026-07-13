import {
  createZodDto,
} from 'nestjs-zod';

import {
  CreateUrlSchema,
} from '../schema/create-url.schema';

export class CreateUrlDto
  extends createZodDto(
    CreateUrlSchema,
  ) {}