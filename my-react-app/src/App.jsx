import { Box, Heading, Button, Flex, Stack } from '@chakra-ui/react'
import bgImage from './Resources/Images/background.jpg'

function App() {
  

  return (
  <Box 
    h='45vh'
    bg='gray'
    bgImage={`url(${bgImage})`}
    bgRepeat='no-repeat'
    bgSize='cover'
    >
    <Flex
      direction='column'
      alignItems='center'
      justify='center'
      h='100%'
      bg='rgb(0 0 0 / 50%)'
      padding={['0 10%', null, '0 20']}
    >
      <Heading
        color='white'
        textTransform='uppercase'
        textAlign='center'
        fontWeight='light'
        letterSpacing='5px'
      >Domina el terreno
    </Heading>
    <Stack
      direction={{ base:'column', md: 'row' }}
      spacing='40px'
      mt='30px'
      width={['100%', null, 'auto']}
    >
      <Button
        variant='outline'
        color='white'
        size='lg'
        textTransform='uppercase'
        fontWeight='light'
        borderRadius='0'
        letterSpacing='1px'
        _hover={
          {color: 'black',
           bg: 'white' }
        }
      >
        Ver detalles
    </Button>
      <Button
        variant='outline'
        color='white'
        size='lg'
        textTransform='uppercase'
        fontWeight='light'
        borderRadius='0'
        letterSpacing='1px'
        _hover={
          {color: 'black',
           bg: 'white' }
        }
      >
        Ver video
    </Button>
    </Stack>
  </Flex>
</Box>
  )
}

export default App;