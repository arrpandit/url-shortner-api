import { Module } from '@nestjs/common';
import { UrlController } from './controllers/url/url.controller';
import { UrlService } from './services/url/url.service';
import { UrlRepository } from './repositories/url.repository';

@Module({
  controllers: [UrlController],
  providers: [UrlService,UrlRepository]
})
export class UrlModule {}
