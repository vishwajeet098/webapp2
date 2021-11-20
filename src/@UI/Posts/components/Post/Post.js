import { memo} from 'react'
import PropTypes from 'prop-types'
import { Box, useTheme, Avatar, Badge, Button, Flex } from '@chakra-ui/react'


const Post = ({  email, first_name, last_name, avatar }) => {
  const theme = useTheme()

  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m="2"
      boxShadow={`7px 8px 2px 0px ${theme.colors.gray[500]}`}
    >
      <Box p="6">
        <Flex m="4" justify="center">
          <Avatar size="2xl" name="Ryan Florence" src={avatar} />
        </Flex>
        <Flex>
        
          <Badge borderRadius="full" px="2" colorScheme="purple" mr="1">
            {first_name} { last_name}
          </Badge>
        </Flex>

        <Box>
          <Box as="span" fontSize="sm">
          <Badge borderRadius="full" px="2" colorScheme="blue" mr="1" mt="5" mb="5">
             {email}
          </Badge>
          </Box>
        </Box>
        
      </Box>
    </Flex>
  )
}

Post.propTypes = {
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
}

export default memo(Post)
