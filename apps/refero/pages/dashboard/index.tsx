import { Box, Button } from '@chakra-ui/react';
import { TodoTable } from '../../components/tables/todoTable';
import { FC, createContext, useMemo, useState } from 'react';
import { TaskProps } from '../../components/interfaces/taskProps';
import { TaskFilter } from '../../components/forms/filters/taskFilter';
import { useQuery, gql, useMutation } from '@apollo/client';

const TaskContext = createContext<{
  tasks: TaskProps[];
  setFilter: (filter: filter) => void;
}>({tasks: [], setFilter: () => {}});

export interface filter {
  title: string;
  description: string;
  completed: boolean | null;
}

const CREATE_TASK = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
      title
      description
      completed
    }
  }
`;

const GET_TASKS = gql`
  query GetAllTasks {
      getAllTasks {
      id
      title
      description
      completed
    }
  }
`;

export const Dashboard: FC = () => {
  const { data } = useQuery(GET_TASKS);
  const [createTask] = useMutation(CREATE_TASK);
  const addTasks = async (): Promise<void> => {
    for (let i = 0; i < 10; i++) {
      await createTask({
        variables: {
          input: {
            title: `Task ${i}`,
            description: `Description for task ${i}`,
            userId: '32136c42-6d65-47ad-93dd-c08f0a83c131'
          }
        }
      });
    }
  };

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

  return (
    <TaskContext.Provider value={{tasks: filteredTasks, setFilter}}>
      <Box m={10}>
        <TaskFilter onFilterChange={setFilter}/>
        <Button onClick={addTasks}>Click to add tasks</Button>
        <TodoTable tasks={filteredTasks ?? []}/>
      </Box>
    </TaskContext.Provider>
  );
};

export default Dashboard;
