import { DeleteIcon } from '@chakra-ui/icons';
import { Box, IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { OptionProps } from '../interfaces/optionsProps';


export const DeleteOption: FC<OptionProps> = ({
  id
}) => {
  return (
    <Box>
      <IconButton
        variant='outline'
        colorScheme='red'
        aria-label='delete task'
        icon={<DeleteIcon />}
        onClick={() => {
          console.log(id);
          //Todo Make API call to delete task with given id
        }}
      />
    </Box>
  );
};
