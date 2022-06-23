import Link from 'next/link'
import { Menu,MenuButton,MenuList,MenuItem,IconButton,Flex,Box,Spacer } from '@chakra-ui/react'
import {FcMenu,FcHome,FcAbout} from 'react-icons/fc'
import {BsSearch} from 'react-icons/bs'
import {FiKey} from 'react-icons/fi'
import { useMediaQuery } from '@chakra-ui/react'

const Desk =()=>(
    <>
        <Box fontSize='2xl' color='green.400' fontWeight='normal' marginRight='8'>
            <Link href='/' paddingLeft='2'>Home</Link>
        </Box>
        <Box fontSize='2xl' color='green.400' fontWeight='normal' marginRight='8'>
            <Link href='/search' paddingLeft='2'>Search</Link>
        </Box>
        <Box fontSize='2xl' color='green.400' fontWeight='normal' marginRight='8'>
            <Link href='/search?purpose=for-sale' paddingLeft='2'>Buy Property</Link>
        </Box>
        <Box fontSize='2xl' color='green.400' fontWeight='normal'>
            <Link href='/search?purpose=for-rent' paddingLeft='2'>Rent Property</Link>
        </Box>
    </>
)

const Mobile=()=>(
    <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu/>} variant='outlined' color='red.400'/>
                <MenuList>
                    <Link href='/' passHref>
                        <MenuItem icon={<FcHome/>}>Home</MenuItem>
                    </Link>
                    <Link href='/search' passHref>
                        <MenuItem icon={<BsSearch/>}>Search</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-sale' passHref>
                        <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-rent' passHref>
                        <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
)

const Navbar = ()=>{
    const [isLargerThan500] = useMediaQuery('(min-width: 750px)')
    
    return (
    <Flex p='2' borderBottom='1px' borderColor='gray.500' >
        <Box fontSize='3xl' color='green.400' fontWeight='bold'>
            <Link href='/' paddingLeft='2'>Villa_Market</Link>
        </Box>
        <Spacer/>
        {isLargerThan500?<Desk/>:<Mobile/>}

    </Flex>
)
            }

export default Navbar