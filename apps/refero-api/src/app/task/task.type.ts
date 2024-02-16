import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Task {
  @Field()
    id: string;

  @Field()
    title: string;

  @Field()
    description: string;

  @Field()
    completed: boolean;
}

@InputType()
export class UpdateTaskInput {
  @Field({ nullable: true })
    id: string;

  @Field({ nullable: true })
    title?: string;

  @Field({ nullable: true })
    description?: string;

  @Field({ nullable: true })
    completed?: boolean;
}

@InputType()
export class CreateTaskInput {
  @Field()
    title: string;

  @Field({ nullable: true })
    description?: string;

  @Field()
    userId: string;
}
