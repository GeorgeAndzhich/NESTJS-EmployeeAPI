import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder,SwaggerDocumentOptions } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Employees example')
  .setDescription('The employees API description')
  .setVersion('1.0')
  .addTag('employees')
  .build();

  const options: SwaggerDocumentOptions =  {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string
    ) => methodKey
  };

  const document = SwaggerModule.createDocument(app, config,options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
