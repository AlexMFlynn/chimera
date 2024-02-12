import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserLoginData {
  @Field()
    userId: string;

  @Field()
    loginName: string;

  @Field()
    passwordHash: string;

  @Field()
    emailAddress: string; // Fixed typo from 'emailAdress' to 'emailAddress'

  @Field({ nullable: true })
    confirmationToken?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
    tokenGenerationTime?: Date;

  @Field({ nullable: true })
    passwordRecoveryToken?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
    recoveryTokenTime?: Date;
}
