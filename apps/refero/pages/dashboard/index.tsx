import { Box } from '@chakra-ui/react';
import { TodoTable } from '../../components/tables/todoTable';
import { FC, useState } from 'react';
import { TaskProps } from '../../components/interfaces/taskProps';
import { TaskFilter } from '../../components/forms/filters/taskFilter';

const taskList: TaskProps[] = [
  {
    'id': 1,
    'title': 'delectus aut autem',
    'description': 'something, hello something, dark side.',
    'completed': false
  },
  {
    'id': 2,
    'title': 'quis ut nam facilis et officia qui',
    'description': `something, something, dark side. ha a kahs dah ashd ah kah ah jwkhljqhdlj q
    blkkhgjhg gfdgcjhgcjhgckvkvgvcjhcj jhkgkhgkghjkvhkj jhvkjg vkvkhv kkkcktf hc`,
    'completed': false
  },
  {
    'id': 3,
    'title': 'fugiat veniam minus',
    'description': 'something, something, dark side.',
    'completed': true
  }
];


export interface filter {
  title: string;
  description: string;
  completed: boolean | null;
}

export const Dashboard: FC = () => {

  const [filter, setFilter] = useState<filter>({
    title: '',
    description: '',
    completed: null
  });

  const filterCheck = (task: TaskProps): boolean => {
    return (
      (filter.title === '' || task.title.includes(filter.title)) &&
      (filter.description === '' || task.description.includes(filter.description)) &&
      (filter.completed === null || task.completed === filter.completed)
    );
  };

  const handleFilterChange = (newFilter: filter): void => {
    setFilter(newFilter);
  };
  return (
    <Box m={10}>
      <TaskFilter onFilterChange={handleFilterChange}/>
      <TodoTable tasks={taskList.filter(filterCheck)}/>
    </Box>
  );
};

export default Dashboard;
