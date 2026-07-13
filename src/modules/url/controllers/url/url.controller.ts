import { Get,Controller } from '@nestjs/common';

@Controller('urls')
export class UrlController {
    @Get('health')
    health(){
        return {
            status : 'Ok'
        }
    }
}
