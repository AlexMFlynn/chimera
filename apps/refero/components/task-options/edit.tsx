import { EditIcon } from '@chakra-ui/icons';
import { Box, IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { OptionProps } from '../interfaces/optionsProps';

export const EditOption: FC<OptionProps> = ({
  id
}) => {
  return (
    <Box>
      <IconButton
        variant='outline'
        colorScheme='purple'
        aria-label='edit task'
        icon={<EditIcon />}
        onClick={() => {
          console.log(id);
          //Todo Make API call to edit task with given id
        }}
      />
    </Box>
  );
};
