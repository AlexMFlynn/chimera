import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { randomUUID } from 'crypto';
import { CreateTaskInput, Task, UpdateTaskInput } from './task.type';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async createTask(input: CreateTaskInput): Promise<Task> {
    return this.prisma.task.create({
      data: {
        id: randomUUID(),
        title: input.title,
        description: input.description,
        completed: false,
        user: {
          connect: {
            id: input.userId
          }
        }
      }
    });
  }

  async updateTask(taskInput: UpdateTaskInput): Promise<Task> {
    return this.prisma.task.update({
      where: {
        id: taskInput.id
      },
      data: {
        title: taskInput.title,
        description: taskInput.description,
        completed: taskInput.completed
      }
    });
  }

  async deleteTask(id: string): Promise<Task> {
    return this.prisma.task.delete({
      where: {
        id: id // Ensure this matches your Prisma schema definition
      }
    });
  }

  async getAllTasks(): Promise<any> {
    return this.prisma.task.findMany();
  }
}
