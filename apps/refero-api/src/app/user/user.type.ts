import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
    id: string;

  @Field()
    firstName: string;

  @Field()
    lastName: string;

  @Field()
    dateOfBirth?: Date;

  @Field()
    gender?: string;
}

@InputType()
export class SignupInput {
  // User fields
  @Field()
    firstName: string;

  @Field()
    lastName: string;

  @Field({ nullable: true })
    dateOfBirth?: Date;

  @Field({ nullable: true })
    gender?: string;

  // UserLoginData fields
  @Field()
    loginName: string;

  @Field()
    password: string; // Assuming you'll hash this in the service

  @Field()
    emailAddress: string;
}
