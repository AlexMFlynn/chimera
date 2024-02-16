import { DeleteIcon } from '@chakra-ui/icons';
import { Box, IconButton } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import { OptionProps } from '../interfaces/optionsProps';
import { gql, useMutation } from '@apollo/client';
import { TaskContext } from '../../../refero/pages/dashboard';

const DELETE_TASK = gql`
  mutation DeleteTask($taskId: String!) {
    deleteTask(id: $taskId) {
      id
    }
  }
`;

export const DeleteOption: FC<OptionProps> = ({id}) => {
  const [deleteTask, { data }] = useMutation(DELETE_TASK);
  const { refetch } = useContext(TaskContext);

  const handleDelete = (): void => {
    deleteTask({
      variables: { taskId: id },
      onCompleted: () => refetch()
    })
      .then(response => {
        console.log('Task deleted', response.data);
        console.log('Task deleted', data);
      })
      .catch(err => {
        console.error('Error deleting task', err);
      });
  };

  return (
    <Box>
      <IconButton
        variant='outline'
        colorScheme='red'
        aria-label='delete task'
        icon={<DeleteIcon />}
        onClick={handleDelete}
      />
    </Box>
  );
};
