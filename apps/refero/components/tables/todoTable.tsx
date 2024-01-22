import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorMode} from '@chakra-ui/react';
import { FC } from 'react';
import { TaskProps } from '../interfaces/taskProps';

interface TodoTableProps {
  tasks: TaskProps[];
}


export const TodoTable: FC<TodoTableProps> = ({
  tasks
}) => {
  const { colorMode } = useColorMode();
  const boxShadowColor = colorMode === 'dark' ? 'rgba(0, 128, 128, 0.6)' : 'rgba(0, 128, 128, 0.8)';
  return (
    <Box textAlign={'center'}>
      <TableContainer
        p={5} // padding
        m={10}
        shadow="md" // medium shadow
        borderWidth="1px" // border width
        borderRadius="md" // medium border radius
        borderColor="rgba(0, 206, 209, 1)" // border color
        boxShadow={`4px 4px 10px 0 ${boxShadowColor}`} // custom CSS for shadow
      >
        <Table variant='striped' colorScheme='teal'>
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
                  <Td>{task.completed ? 'Completed' : 'Not Completed'}</Td>
                  <Td>Add options here</Td>
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
