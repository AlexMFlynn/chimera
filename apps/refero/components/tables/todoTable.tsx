import {
  Box,
  HStack,
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
import { EditOption } from '../task-options/edit';
import { DeleteOption } from '../task-options/delete';

interface TodoTableProps {
  tasks: TaskProps[];
}


export const TodoTable: FC<TodoTableProps> = ({
  tasks
}) => {
  const { colorMode } = useColorMode();
  const boxShadowColor = colorMode === 'dark' ? 'rgba(0, 128, 128, 0.6)' : 'rgba(0, 128, 128, 0.8)';

  const displayTasks = (task: TaskProps): JSX.Element => {
    return (
      <Tr key={task.id}>
        <Td>{task.title}</Td>
        <Td whiteSpace="normal">{task.description}</Td>
        <Td>{task.completed ? 'Completed' : 'Not Completed'}</Td>
        <Td>
          <HStack>
            <EditOption id={task.id}/>
            <DeleteOption id={task.id}/>
          </HStack>
        </Td>
      </Tr>
    );
  };

  return (
    <Box textAlign={'center'}>
      <TableContainer
        p={5}
        m={10}
        shadow="md"
        borderWidth="1px"
        borderRadius="md"
        borderColor="rgba(0, 206, 209, 1)"
        boxShadow={`4px 4px 10px 0 ${boxShadowColor}`}
      >
        <Table variant='striped' colorScheme='gray'>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Completed</Th>
              <Th>Options</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tasks.map(displayTasks)}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TodoTable;
