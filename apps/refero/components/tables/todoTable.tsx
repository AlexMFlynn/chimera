import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr } from '@chakra-ui/react';
import { FC } from 'react';
import { TaskProps } from '../interfaces/taskProps';

interface TodoTableProps {
  tasks: TaskProps[];
}

export const TodoTable: FC<TodoTableProps> = ({
  tasks
}) => {
  return (
    <Box>
      <TableContainer>
        <Table variant='striped' colorScheme='teal'>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Completed</Th>
              <Th>Options</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tasks.map(task => {
              return (
                <Tr key={task.id}>
                  <Td>{task.title}</Td>
                  <Td>{task.description}</Td>
                  <Td>{task.completed ? 'Yes' : 'No'}</Td>
                  <Td>...</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TodoTable;
