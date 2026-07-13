import { Module } from '@nestjs/common';
import { UrlController } from './controllers/url/url.controller';
import { UrlService } from './services/url/url.service';

@Module({
  controllers: [UrlController],
  providers: [UrlService]
})
export class UrlModule {}
