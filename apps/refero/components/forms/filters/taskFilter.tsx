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
import { ChangeEvent, FC } from 'react';

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
      p={5}
      pb={10}
      ml={10}
      mr={10}
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
        onSubmit={(_values, {setSubmitting})=> {
          setSubmitting(false);
        }}
      >
        {({values, handleChange, resetForm}) => {
          const changeHandler = (
            event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
          ): void => {
            handleChange(event);
            const newValues = {
              ...values,
              [event.target.name]: event.target.value
            };

            const completedConversion: boolean | null =
                newValues.completed !== '' ? newValues.completed === 'true' : null;

            onFilterChange({
              ...newValues,
              completed: completedConversion
            });
          };
          return (
            <form>
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
                    onChange={changeHandler}
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
                    onChange={changeHandler}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='completed'>Completed</FormLabel>
                  <Field
                    as={Select}
                    id='completed'
                    name='completed'
                    variant='filled'
                    onChange={changeHandler}
                  >
                    <option value=''>All</option>
                    <option value='true'>Completed</option>
                    <option value='false'>Not Completed</option>
                  </Field>
                </FormControl>
                <Stack alignContent={'center'}>
                  <Button
                    p={3}
                    mt={6}
                    ml={4}
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
                </Stack>
              </HStack>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};
