import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

export interface PicCardProps extends PropsWithChildren {
  alt: string;
  img: string;
  heading: string;
}

export const PicCard: FC<PicCardProps> = ({ alt, children, heading, img }) => {
  const { colorMode } = useColorMode();
  const boxShadowColor = colorMode === 'dark' ? 'rgba(0, 128, 128, 0.6)' : 'rgba(0, 128, 128, 0.8)';

  return (
    <Flex py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.600')}
        rounded={'md'}
        minH={'33em'}
        p={6}
        overflow={'hidden'}
        border="2px"
        borderColor="rgba(0, 206, 209, 1)" // border color
        boxShadow={`6px 6px 10px 0 ${boxShadowColor}`} // custom CSS for shadow
      >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}

        >
          <Image src={img} alt={alt} boxSize="full" objectFit="cover" />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            textAlign='center'
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {heading}
          </Heading>
          <Text color={useColorModeValue('gray.500', 'gray.200')} textAlign='center'>
            {children}
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};
