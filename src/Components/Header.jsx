import { Button, HStack } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HStack p={'4'} shadow={'outline'} bgColor={'blackAlpha.900'}>
      <Button variant={'unstyled'} color={'gray.200'}>
        <Link to={'/'}>Home</Link>
      </Button>
      <Button variant={'unstyled'} color={'gray.200'}>
        <Link to={'/exchange'}>Exchange</Link>
      </Button>
      <Button variant={'unstyled'} color={'gray.200'}>
        <Link to={'/coins'}>Coins</Link>
      </Button>
    </HStack>
  )
}

export default Header;