import { EditIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select
} from '@chakra-ui/react';
import { FC, useContext } from 'react';
import { TaskProps } from '../interfaces/taskProps';
import { Field, FieldProps, Form, Formik } from 'formik';
import { useUpdateTaskMutation } from 'apps/refero/.graphql/__generated__/graphql';
import { TaskContext } from 'apps/refero/pages/dashboard';

export const EditOption: FC<{task: TaskProps;}> = ({
  task
}) => {
  const [updateTask] = useUpdateTaskMutation();
  const { refetch } = useContext(TaskContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <IconButton
        variant='outline'
        colorScheme='purple'
        aria-label='edit task'
        icon={<EditIcon />}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <Formik
            initialValues={{
              title: task.title,
              description: task.description,
              completed: task.completed.valueOf().toString()
            }}
            onSubmit={(values) => {
              updateTask({
                variables: {
                  input: {
                    id: task.id,
                    title: values.title,
                    description: values.description,
                    completed: values.completed === 'true'
                  }
                }
              })
                .then(response => {
                  refetch();
                  console.log('Task updated', response.data);
                })
              console.log(values);
              onClose();
            }}
          >
            {(/* add formik helpers here */) => {
              return (
                <Form>
                  <ModalHeader>Editing: {task.title}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Field
                      name='title'
                      validate={true}
                    >
                      {({field, form}: FieldProps) => (
                        <FormControl
                          isInvalid={!!(form.errors.title && form.touched.title)}
                          mb={4}
                        >
                          <FormLabel>Title: </FormLabel>
                          <Input {...field} placeholder='Title'/>
                          <FormErrorMessage>{form.errors.title?.toString()}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field
                      name='description'
                      validate={true}
                    >
                      {({field, form}: FieldProps) => (
                        <FormControl
                          isInvalid={!!(form.errors.description && form.touched.description)}
                          mb={4}
                        >
                          <FormLabel>Description: </FormLabel>
                          <Input {...field} placeholder='Description' />
                          <FormErrorMessage>{form.errors.description?.toString()}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field
                      name='completed'
                      validate={true}
                    >
                      {({field, form}: FieldProps) => (
                        <FormControl
                          isInvalid={!!(form.errors.completed && form.touched.completed)}
                          mb={4}
                        >
                          <FormLabel>Status:</FormLabel>
                          <Select {...field}>
                            <option value='true'>Completed</option>
                            <option value='false'>Not Completed</option>
                          </Select>
                          <FormErrorMessage>{form.errors.completed?.toString()}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme='red' mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme='teal' type='submit'>Submit</Button>
                  </ModalFooter>
                </Form>
              );
            }}
          </Formik>
        </ModalContent>
      </Modal>
    </Box>
  );
};
