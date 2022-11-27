import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Image,
  List,
  HStack,
} from '@chakra-ui/react';
import { AiOutlineWhatsApp,  AiFillInstagram, AiFillSchedule, AiFillBook, AiFillHome,} from 'react-icons/ai';
import { MdWeb } from 'react-icons/md';
import { motion } from 'framer-motion';

function App() {
  const links = [
    {
      url: 'https://www.xiaohongshu.com/web-login/canvas?redirectPath=http%3A%2F%2Fwww.xiaohongshu.com%2Fuser%2Fprofile%2F6194e152000000001000685b%3Fxhsshare%3DCopyLink%26appuid%3D6194e152000000001000685b%26apptime%3D1669286864',
      icon: AiFillBook,
      text: '小红书',
      iconColor: 'red.500',
    },
    {
      url: 'https://wa.link/1ski6x',
      icon: AiFillHome,
      text: '想在地产赚钱或了解点我',
      iconColor: 'gray.900',
    },
    {
      url: 'https://wa.me/message/D2RQQJCD7NBKO1',
      icon: AiOutlineWhatsApp,
      text: '找屋子点我',
      iconColor: 'green.500',
    },
    {
      url: 'https://www.instagram.com/nokokjunhere/',
      icon: AiFillInstagram,
      text: 'Instagram',
      iconColor: '#E1306C',
    },
    {
      url: 'https://oxwhite.com/',
      icon: MdWeb,
      text: 'Ox-White 官網',
      iconColor: 'gray.900',
    },
    {
      url: 'https://www.venturegrab.com/?gclid=CjwKCAiAyfybBhBKEiwAgtB7fgDW59JvN3G4HdMZbbC7YvKxOoGAtzjLPFFAuJgVbmS-E4LAjibWzBoCaKQQAvD_BwE',
      icon: AiFillSchedule,
      text: '想找生意/想卖生意 点我',
      iconColor: 'gray.800',
    },
  ];

  const parentContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const childElement = {
    hidden: { opacity: 0, x: '-50px' },
    show: { opacity: 1, x: '0px' },
  };
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3} bgGradient="linear(to-b, purple.800, yellow.200)">
          <VStack marginTop="3em">
            <Image
              w="10em"
              src="./logo512.png"
              borderRadius="50%"
              boxShadow="0px 0px 30px rgba(0,0,0,0.5)"
              p="1em"
              as={motion.img}
              initial={{ scale: 0}}
              animate={{ scale: 1}}
              transition="linear 0.1s"
            />
            <Text
              fontSize={30}
              fontWeight="bold"
              as={motion.h1}
              initial={{x: "-50px"}}
              animate={{x: "0px"}}
              transition="linear 0.1s"
            >
              @DignityKing17
            </Text>
            <List
              as={motion.ul}
              variants={parentContainer}
              initial="hidden"
              animate="show"
            >
              {links.map(link => (
                <a href={link.url}>
                  <HStack
                    w="15em"
                    h="3em"
                    borderRadius="lg"
                    bgColor="rgba(255,255,255,0.5)"
                    p="1em"
                    marginY="1em"
                    as={motion.div}
                    variants={childElement}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.1 }}
                  >
                    <Text
                      color="gray.900"
                      fontSize={20}
                      fontWeight="bold"
                      marginRight="auto"
                    >
                      {link.text}
                    </Text>
                    <Text as={link.icon} color={link.iconColor} fontSize={30} />
                  </HStack>
                </a>
              ))}
            </List>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
