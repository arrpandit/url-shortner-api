import {
  Injectable,
} from '@nestjs/common';

import { DatabaseService }
from '../../../database/database.service';

@Injectable()
export class UrlRepository {
  constructor(
    private readonly db:
      DatabaseService,
  ) {}

  async create(
    data: {
      id: string;
      originalUrl: string;
      shortCode: string;
      expiresAt?: Date;
    },
  ) {
    const sql = `
      INSERT INTO urls(
          id,
          original_url,
          short_code,
          expires_at
      )
      VALUES($1,$2,$3,$4)
      RETURNING *
    `;

    const result =
      await this.db.query(
        sql,
        [
          data.id,
          data.originalUrl,
          data.shortCode,
          data.expiresAt,
        ],
      );

    return result.rows[0];
  }
}