import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

export default function HoverMenu({item1,item2,item3,item4,item5,item6,name}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Menu isOpen={isOpen} >
            <MenuButton 
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                aria-label="Courses"
                fontWeight="500"
                fontSize="15px"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
                {name} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList zIndex={5} color="black" onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>{item1}</MenuItem>
                <MenuItem>{item2}</MenuItem>
                <MenuItem>{item3}</MenuItem>
                <MenuItem>{item4}</MenuItem>
                <MenuItem>{item5}</MenuItem>
                <MenuItem>{item6}</MenuItem>
            </MenuList>
        </Menu>
    )
}