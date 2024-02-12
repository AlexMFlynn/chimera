import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SignupInput, User } from './user.type';
import { UserService } from './user.service';
import { UserLoginData } from './userLoginData.type';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService
  ) {}

  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Query(() => UserLoginData)
  async userLoginData(@Args('id') id: string): Promise<UserLoginData> {
    return this.userService.getUserLoginData(id);
  }

  @Mutation(() => User)
  async signupUser(
    @Args('signupInput') signupInput: SignupInput
  ): Promise<User> {
    return this.userService.createUser(signupInput);
  }
}
