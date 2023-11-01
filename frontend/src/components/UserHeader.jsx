import {
  Avatar,
  Box,
  Flex,
  Text,
  VStack,
  Link,
  Portal,
  Button,
  useToast,
} from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";

const UserHeader = () => {
  const toast = useToast();
  const copyUrl = () => {
    const currUrl = window.location.href;
    console.log(currUrl);
    navigator.clipboard.writeText(currUrl).then(() => {
      toast({
        title: "Copied",
        description: "URL copied to clipboard",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    });
  };
  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Mark Zuckerberge
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}>Mark Zuckerberge</Text>
            <Text
              fontSize={"xs"}
              bg={"gray.dark"}
              color={"gray.light"}
              p={1}
              borderRadius={"full"}
            >
              threads.next
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar name="mark zuckerberg" src="/zuck-avatar.png" size={"xl"} />
        </Box>
      </Flex>
      <Text>Co-founder , executive chairman and CEO of Meta Platforms.</Text>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}>3.2k followers</Text>
          <Box w="1" h="1" bg={"gray.light"} borderRadius={"full"}></Box>
          <Link color={"gray.light"}>instagram.com</Link>
        </Flex>
        <Flex>
          <Box className="icon-container">
            <BsInstagram size={24} cursor={"pointer"} />
          </Box>
          <Box className="icon-container">
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor={"pointer"} />
              </MenuButton>
              <Portal>
                <MenuList bg={"gray.dark"}>
                  <MenuItem onClick={copyUrl} bg={"gray.dark"}>
                    Copy Link
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>
      <Flex w={"full"}>
        <Flex
          flex={1}
          cursor={"pointer"}
          pb="3"
          borderBottom={"1.5px solid white"}
          justifyContent={"center"}
        >
          <Text fontWeight={"bold"}>Threads</Text>
        </Flex>
        <Flex
          flex={1}
          cursor={"pointer"}
          pb="3"
          borderBottom={"1.5px solid white"}
          justifyContent={"center"}
        >
          <Text fontWeight={"bold"}>Replies</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
