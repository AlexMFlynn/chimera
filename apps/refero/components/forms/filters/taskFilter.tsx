import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Stack,
  useColorMode
} from '@chakra-ui/react';
import { Formik, Field } from 'formik';
import { FC } from 'react';

interface TaskFilterProps {
  onFilterChange: (filter: {
    title: string;
    description: string;
    completed: boolean | null; }) => void;
}


export const TaskFilter: FC<TaskFilterProps> = ({
  onFilterChange
}) => {
  const { colorMode } = useColorMode();
  const boxShadowColor = colorMode === 'dark' ? 'rgba(0, 128, 128, 0.6)' : 'rgba(0, 128, 128, 0.8)';
  return (
    <Box
      p={5} // padding
      m={10}
      shadow="md" // medium shadow
      borderWidth="1px" // border width
      borderRadius="md" // medium border radius
      borderColor="rgba(0, 206, 209, 1)" // border color
      boxShadow={`4px 4px 10px 0 ${boxShadowColor}`} // custom CSS for shadow
    >
      <Formik
        initialValues={{
          title: '',
          description: '',
          completed: ''
        }}
        onSubmit={values => {
          const completedConversion: boolean | null =
            values.completed !== '' ? values.completed === 'true' ? true : false: null;

          const convertedValues = {
            ...values,
            completed: completedConversion
          };

          onFilterChange(convertedValues);
        }}
      >
        {({handleSubmit, resetForm}) => (
          <form onSubmit={handleSubmit}>
            <HStack
              alignItems={'center'}
              spacing={4}
            >
              <FormControl>
                <FormLabel htmlFor='title'>Title</FormLabel>
                <Field
                  as={Input}
                  id='title'
                  name='title'
                  type='text'
                  variant='filled'
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='description'>Description</FormLabel>
                <Field
                  as={Input}
                  id='description'
                  name='description'
                  type='text'
                  variant='filled'
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='completed'>Completed</FormLabel>
                <Field
                  as={Select}
                  id='completed'
                  name='completed'
                  variant='filled'
                >
                  <option value=''>All</option>
                  <option value='true'>Completed</option>
                  <option value='false'>Not Completed</option>
                </Field>
              </FormControl>
              <Stack alignContent={'center'}>
                <Button
                  p={3}
                  colorScheme='teal'
                  variant='outline'
                  size='xl'
                  onClick={() => {
                    resetForm();
                    onFilterChange({
                      title: '',
                      description: '',
                      completed: null
                    });
                  }}
                >
                  Clear Filters
                </Button>
                <Button
                  p={3}
                  pl={6}
                  pr={6}
                  type='submit'
                  colorScheme='teal'
                  variant='solid'
                  size='xl'
                >
                  Filter
                </Button>
              </Stack>
            </HStack>
          </form>
        )}
      </Formik>
    </Box>
  );
};
