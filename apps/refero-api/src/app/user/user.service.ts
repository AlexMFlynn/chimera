import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SignupInput, User } from './user.type';
import { randomUUID } from 'crypto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(signupInput: SignupInput): Promise<User> {

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(signupInput.password, saltRounds);

    const user = await this.prismaService.user.create({
      data: {
        id: randomUUID(),
        firstName: signupInput.firstName,
        lastName: signupInput.lastName,
        dateOfBirth: signupInput.dateOfBirth,
        gender: signupInput.gender
      }
    });

    await this.prismaService.user_login_data.create({
      data: {
        userId: user.id,
        loginName: signupInput.loginName,
        passwordHash: hashedPassword,
        emailAddress: signupInput.emailAddress
      }
    });

    return user;
  }

  async getAllUsers(): Promise<any> {
    return this.prismaService.user.findMany();
  }

  async getUserLoginData(id: string): Promise<any> {
    return this.prismaService.user_login_data.findUnique({
      where: {
        userId: id
      }
    });
  }
}
