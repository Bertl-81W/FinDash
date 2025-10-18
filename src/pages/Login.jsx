
import { Box, Button, Input, Heading } from "@chakra-ui/react";

function Login() {
  return (
    <Box maxW="sm" mx="auto" mt="20" p="6" borderWidth="1px" borderRadius="lg">
      <Heading mb="6">Login</Heading>
      <Input placeholder="Email" mb="3" />
      <Input placeholder="Password" type="password" mb="6" />
      <Button colorScheme="blue" w="full">Login</Button>
    </Box>
  );
}

export default Login;
