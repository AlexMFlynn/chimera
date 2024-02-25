import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserResolver } from './user/user.resolver';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TaskResolver } from './task/task.resolver';
import { TaskService } from './task/task.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true
    }),
    UserModule,
    TaskModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    UserResolver,
    UserService,
    TaskResolver,
    TaskService
  ]
})
export class AppModule {}
