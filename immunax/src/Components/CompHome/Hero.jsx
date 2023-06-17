import { Box, Container, HStack, Stack } from '@chakra-ui/layout'
import React, { Fragment } from 'react'
import banner from '../../image/hero-1.jpg'
import { Grid, GridItem,Image,Text,Center, FormControl, FormLabel, Input, Select, Button   } from '@chakra-ui/react'
import style from "../CompHome/Home.module.css"
import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons'
export default function Hero() {
  return (
    <>
    <Fragment>
    <Box>
        <Grid templateColumns='repeat(2, 1fr)'>
        <GridItem w='100%'>

            <Container>
                <Stack className={style.textBox}>
                     <Text fontSize={{ base: '3xl', sm: '3xl', md: '5xl' }} as='b' color="#1f3e72">Fight Virus </Text>
                    <Text fontSize={{ base: '3xl', sm: '3xl', md: '5xl' }} as='b' color="#1f3e72"> With Vaccine</Text>
                    <Text fontSize='md' as='b' color="#888">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi debitis mollitia doloremque itaque repellat minus! Necessitatibus sed rem, exercitationem laboriosam quos animi aliquid veritatis eos et quam, tenetur iure.</Text>
                  
                    <HStack>
                        <Center w='30px' h='30px' bg='#fff8df' color='#ffd012' p="10px">
                        <CheckCircleIcon w={3} />
                        </Center>
                        <p style={{color: "#1f3e72" ,fontWeight:"500"}}>Best protection </p>

                        <Center w='30px' h='30px' bg='#fff8df' color='#ffd012' p="10px">
                        <StarIcon w={3} />
                        </Center>
                        <p style={{color: "#1f3e72" ,fontWeight:"500"}}>Selected Vaccines </p>
                    </HStack>
                </Stack>
             
           </Container>
              
           
            </GridItem>

                <GridItem w='100%'>
                    <Image src={banner} alt='hero image' boxSize='100%' h="700px" objectFit="cover"/>
                </GridItem>

        </Grid>
      

        <Container maxW='90%'> 
            <Box bg='white'className={style.bookform}>
                <form>
                    <HStack>
                        <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' />

                        </FormControl>

                        <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' />

                        </FormControl>

                        <FormControl>
                            <FormLabel>Email address</FormLabel>
                            <Select placeholder='Select option'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </FormControl>


                        <Button
                        mt={4}
                        colorScheme='teal'
                        type='submit'
                        >
                        Submit
                    </Button>

                    
                    </HStack>
                   
                </form>
            </Box>
           

        </Container>



        </Box>
     
    </Fragment>
    





        </>

    

    
  )
}
