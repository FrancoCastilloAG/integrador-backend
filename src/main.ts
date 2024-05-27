import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import dotenv
import * as dotenv from 'dotenv';

dotenv.config();
async function bootstrap() {
  console.log(process.env.JWT_SECRET);
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
