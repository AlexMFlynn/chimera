import { ReactElement } from 'react';
import { Flex, Stack, Heading, HStack, Spacer, Center, Button, Box } from '@chakra-ui/react';
import router from 'next/router';
import { PicCard } from '../components/pictureCard';

export function Index(): ReactElement {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <Box height={'90vh'}>
      <Flex
        justifyContent="center" // Center horizontally
        alignItems="center" // Center vertically
      >
        <Stack spacing={2} align="center" pt={4}>
          <Heading as="h3" size="md">
            Welcome to
          </Heading>
          <Heading as="h1">TODO MKII</Heading>
        </Stack>
      </Flex>
      <HStack justifyContent="center" alignItems="top" p="2em">
        <Spacer />
        <PicCard
          img={'images/coffee.webp'}
          alt={'coffee'}
          heading={'Enhanced Organization and Focus'}
        >
          A to-do list acts as a personal organizer, laying out all tasks in one place. This helps
          in prioritizing tasks, ensuring that important deadlines are not missed. By providing a
          clear outline of what needs to be done, it allows individuals to focus on one task at a
          time. This focused approach not only increases efficiency but also reduces the anxiety
          and overwhelm often associated with a large volume of tasks.
        </PicCard>
        <Spacer />
        <PicCard
          img={'images/pedestrians.webp'}
          alt={'pedestrians walking'}
          heading={'Improved Productivity and Time Management'}
        >
          To-do lists are an excellent tool for boosting productivity. By breaking down larger
          projects into smaller, manageable tasks, they make daunting projects seem more
          approachable. This systematic breakdown enables more efficient use of time, as {'it\'s'}
          easier to estimate how long each task will take and plan accordingly. Additionally,
          ticking off completed tasks provides a sense of accomplishment and motivation, further
          enhancing productivity.
        </PicCard>
        <Spacer />
        <PicCard
          img={'images/sunrise.webp'}
          alt={'sunrise'}
          heading={'Better Memory and Mental Clarity'}
        >
          Keeping track of all tasks and responsibilities can be mentally taxing. A to-do list
          serves as an external memory aid, ensuring that nothing important is forgotten. It
          reduces cognitive load, freeing up mental space for creative and critical thinking. This
          clarity of mind is essential for problem-solving and decision-making, making a to-do list
          a valuable tool for both personal and professional life.
        </PicCard>
        <Spacer />
      </HStack>
      <Center>
        <Button
          size={'lg'}
          colorScheme="teal"
          onClick={(): Promise<boolean> => router.push('/dashboard')}
          data-testid='join-button'
        >
          Start Your List
        </Button>

      </Center>
    </Box>
  );
}

export default Index;
