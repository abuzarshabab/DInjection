import { NestFactory } from '@nestjs/core';
import { ComputerModule } from './computer/computer.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ComputerModule);

  const config = new DocumentBuilder()
    .setTitle('Nest API Using Swagger')
    .setDescription('This is the Best API')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/swagger', app, document);
  await app.listen(3000);
}
bootstrap();
