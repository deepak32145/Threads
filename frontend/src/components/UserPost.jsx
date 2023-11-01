import { Avatar, Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const UserPost = () => {
  return (
    <Link to={"/deepak/post/2"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar name="deepak" src="/zuck-avatar.png" size="md" />
          <Box w="1px" h={"full"} bg="gray.light" my={2}></Box>
          <Box position={"relative"} w={"full"}>
            <Avatar
              size="xs"
              name="john doe"
              src="https://bit.ly/dan-abramov"
              position={"absolute"}
              top={"0px"}
              left={"15px"}
              padding={"2px"}
            />
            <Avatar
              size="xs"
              name="john doe"
              src="https://bit.ly/tioluwani-kolawole"
              position={"absolute"}
              top={"0px"}
              left={"15px"}
              padding={"2px"}
            />
            <Avatar
              size="xs"
              name="john doe"
              src="https://bit.ly/sage-adebayo"
              position={"absolute"}
              top={"0px"}
              left={"15px"}
              padding={"2px"}
            />
          </Box>
        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPost;
