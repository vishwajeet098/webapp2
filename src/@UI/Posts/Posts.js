import React from 'react'
import { useContext } from 'react'
import { Grid} from '@chakra-ui/react'
import { PostsContext } from '@Context'
import { Post } from './components'

const Posts = () => {
  const [posts] = useContext(PostsContext)
  
  if (!posts.length) {
    return null
  }
  return (
    <Grid
      gap={10}
      templateColumns="repeat(3, 1fr)"
      flexDirection={['column', 'column', 'column', 'row']}
      display={['flex', 'flex', 'flex', 'grid']}
    >
      {posts.map((post, i) => (
        <Post
          key={i}
          id={post.id}
          email={post.email}
          first_name={post.first_name}
          last_name={post.last_name}
          avatar={post.avatar}
          
        />
      ))}
     
    </Grid>
  )
}

export default Posts
