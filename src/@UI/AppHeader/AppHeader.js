import { useState, useEffect, useContext } from "react"
import { Flex,Heading,Button,useToast,Skeleton} from "@chakra-ui/react"
import { PostsContext } from "../../@Context"
import { useQuery } from "react-query"
import { API_URL } from '@constants'


const AppHeader = () => {
    const [enabled, setEnabled] = useState(false)
    const [,setPosts] = useContext(PostsContext)
    const toast =useToast()
    const {isLoading,isFetching,data} = useQuery('GetUsers', () => 
    fetch (API_URL)
    .then((res) =>res.json())
    .finally(()=>setEnabled(false)) ,
    {enabled:enabled}
   
    )
    console.log(data)

    useEffect(() => {
        if (data){ 
            setPosts(data)
        }
    }, [data,setPosts])

    return (
        <Flex as="nav" flex="1" mb="4" padding="1rem" bg="#B91646" >
            <Flex color="#fff" align="center">
                <Heading size="lg">Electron<span class="in">Inc</span><span class="dot">.</span></Heading>
            </Flex>
            <Flex flexGrow="1"/>
            <Flex>
            <Button
              isLoading={isLoading||isFetching} color="#E1D89F" bg="inherit"
            onClick={() =>{
                setEnabled(true) 
                toast({
                    title:'getting users data',
                    description:'patience....',
                    status:'info',
                    duration:3000,
                    onCloseComplete(){

                    },
                })
                }}>Get Users</Button>
            </Flex>
        </Flex>
    )
    
}

export default AppHeader
