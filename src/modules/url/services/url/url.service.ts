import {
  Injectable,
} from '@nestjs/common';

import { nanoid }
from 'nanoid';

import { v4 as uuid }
from 'uuid';
import { UrlRepository } from '../../repositories/url.repository';
import { CreateUrlDto } from '../../schema/create-url.schema';

@Injectable()
export class UrlService {
  constructor(
    private readonly repo:
      UrlRepository,
  ) {}

  async create(
    dto: CreateUrlDto,
  ) {
    const shortCode =
      dto.customeAlias ??
      nanoid(6);

    let expiresAt:
      Date | undefined;

    if (
      dto.expiresInDays
    ) {
      expiresAt =
        new Date();

      expiresAt.setDate(
        expiresAt.getDate()
        +
        dto.expiresInDays,
      );
    }

    const url =
      await this.repo.create({
        id: uuid(),
        originalUrl:
          dto.originalurl,
        shortCode,
        expiresAt,
      });

    return {
      id: url.id,

      originalUrl:
        url.original_url,

      shortCode:
        url.short_code,

      shortUrl:
        `${process.env.BASE_URL}/${url.short_code}`,
    };
  }
}