import { Box, Button } from '@chakra-ui/react';
import { TodoTable } from '../../components/tables/todoTable';
import { FC, createContext, useMemo, useState } from 'react';
import { TaskProps } from '../../components/interfaces/taskProps';
import { TaskFilter } from '../../components/forms/filters/taskFilter';
import { useCreateTaskMutation, useGetAllTasksQuery } from '../../.graphql/__generated__/graphql';

export const TaskContext = createContext<{
  tasks: TaskProps[];
  setFilter: (filter: filter) => void;
  refetch: () => void;
}>({
      tasks: [],
      setFilter: () => {},
      refetch: () => {}
    });

interface filter {
  title: string;
  description: string;
  completed: boolean | null;
}

export const Dashboard: FC = () => {
  const [createTask] = useCreateTaskMutation();
  const addTasks = async (): Promise<void> => {
    console.log('Adding tasks');
    for (let i = 0; i < 10; i++) {
      await createTask({
        variables: {
          input: {
            title: `Task ${i}`,
            description: `Description for task ${i}`,
            userId: '32136c42-6d65-47ad-93dd-c08f0a83c131'
          }
        }
      }).then(() => refetch());
    }
  };

  const { data, refetch } = useGetAllTasksQuery();

  const [filter, setFilter] = useState<filter>({
    title: '',
    description: '',
    completed: null
  });

  const filteredTasks = useMemo(() => {
    return data?.getAllTasks.filter((task: TaskProps) => {
      return (
        (filter.title === '' || task.title.includes(filter.title)) &&
        (filter.description === '' || task.description.includes(filter.description)) &&
        (filter.completed === null || task.completed === filter.completed)
      );
    });
  }, [data, filter]);

  const contextValues = useMemo(() => {
    return {
      tasks: filteredTasks ?? [],
      setFilter,
      refetch
    };
  }, [filteredTasks, setFilter, refetch]);

  return (
    <TaskContext.Provider value={contextValues}>
      <Box m={10}>
        <TaskFilter onFilterChange={setFilter}/>
        <Button onClick={addTasks}>Click to add tasks</Button>
        <TodoTable tasks={filteredTasks ?? []}/>
      </Box>
    </TaskContext.Provider>
  );
};

export default Dashboard;
