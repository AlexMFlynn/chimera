import {
  Box } from '@chakra-ui/react';
import TodoTable from '../../components/tables/todoTable';
import { FC } from 'react';
import { TaskProps } from '../../components/interfaces/taskProps';

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
    'description': 'something, something, dark side. ha a kahs dah ashd ah kah ah jwkhljqhdlj qblk',
    'completed': false
  },
  {
    'id': 3,
    'title': 'fugiat veniam minus',
    'description': 'something, something, dark side.',
    'completed': false
  }
];

const filter = '';


//TODO: add return type
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const filterCheck = (task: TaskProps) => {
  if (task.title.includes(filter) || task.description.includes(filter)) {
    return task;
  };
};

export const Dashboard: FC = () => {
  return (
    <Box>
      <TodoTable tasks={taskList.filter(filterCheck)}/>
    </Box>
  );
};

export default Dashboard;
