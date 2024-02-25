import { DeleteIcon } from '@chakra-ui/icons';
import { Box, IconButton } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import { OptionProps } from '../interfaces/optionsProps';
import { TaskContext } from '../../../refero/pages/dashboard';
import { useDeleteTaskMutation } from '../../.graphql/__generated__/graphql';

export const DeleteOption: FC<OptionProps> = ({id}) => {
  const [deleteTask, { data }] = useDeleteTaskMutation();
  const { refetch } = useContext(TaskContext);

  const handleDelete = (): void => {
    deleteTask({
      variables: { id: id },
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
