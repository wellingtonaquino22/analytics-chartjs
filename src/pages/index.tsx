import type { NextPage } from 'next'
import {Flex } from '@chakra-ui/react'
import HeaderBar from '../organisms/HeaderBar'
import MenuActions from '../molecules/MenuActions'


const Home: NextPage = () => {
  return (

    <Flex bg="#F2F5F8" minHeight="100vh" direction="column">
    <HeaderBar/>
    <Flex flex="1">
          <MenuActions />
        </Flex>

  </Flex>
  )
}

export default Home
