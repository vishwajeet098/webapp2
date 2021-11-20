
import { ChakraProvider } from "@chakra-ui/provider";
import { QueryClientProvider, QueryClient } from 'react-query';
import {AppHeader, Posts} from '@UI'
import { PostsContextProvider} from "./@Context";
import theme from './theme'



const queryClient = new QueryClient()

const App=()=>{
 
  return(
  <ChakraProvider theme={theme}>
   <QueryClientProvider client={queryClient}>
    <PostsContextProvider>
      <AppHeader/>
      <Posts/>
    </PostsContextProvider>
    </QueryClientProvider>
  </ChakraProvider>
  )
}
export default App;
