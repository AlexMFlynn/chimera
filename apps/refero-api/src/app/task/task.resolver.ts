import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service'; // Ensure this path is correct
import { CreateTaskInput, Task, UpdateTaskInput } from './task.type'; // Ensure this path is correct

@Resolver(() => Task)
export class TaskResolver {
  constructor(
    private taskService: TaskService // Changed to lowercase
  ) {}

  @Query(() => [Task])
  async getAllTasks(): Promise<Task[]> {
    return this.taskService.getAllTasks();
  }

  @Mutation(() => Task)
  async deleteTask(@Args('id') id: string): Promise<Task> { // Method names should be camelCase
    return this.taskService.deleteTask(id);
  }

  @Mutation(() => Task)
  async updateTask(
    @Args('taskInput') taskInput: UpdateTaskInput
  ): Promise<Task> { // Corrected to call updateTask
    return this.taskService.updateTask(taskInput);
  }

  @Mutation(() => Task)
  async createTask(
    @Args('input') input: CreateTaskInput
  ): Promise<Task> {
    return this.taskService.createTask(input);
  }
}
