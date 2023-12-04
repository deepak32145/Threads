import { Avatar, Flex, Text } from "@chakra-ui/react";

const PostPage = () => {
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar size={"md"} src="/zuck-avatar.png" name="Mark Zuckerberg" />
          <Flex>
            <Text fontWeight={"bold"}>Mark Zuckerberg</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default PostPage;
