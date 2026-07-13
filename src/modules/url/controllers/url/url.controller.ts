import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { UrlService } from '../../services/url/url.service';
import type { CreateUrlDto } from '../../dto/create-url.dto';

@Controller('urls')
export class UrlController {
  constructor(
    private readonly service:
      UrlService,
  ) {}

  @Post()
  create(
    @Body()
    dto: CreateUrlDto,
  ) {
    return this.service
      .create(dto);
  }
}