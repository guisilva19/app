import { StatusBar } from "expo-status-bar";
import {
  Box,
  Center,
  FormControl,
  Heading,
  Input,
  VStack,
  Button,
  HStack,
} from "native-base";
import { colors } from "../../theme/colors";

export default function SignUp() {
  return (
    <>
      <StatusBar style="light" />
      <Center w="100%" style={{ backgroundColor: colors["background-light"] }}>
        <Box mt="20" p="2" w="100%" h="100%" maxW="350" py="8" color="blue.500">
          <Heading
            size="lg"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
            fontWeight="semibold"
          >
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            fontWeight="medium"
            size="xs"
          >
            Sign up to continue!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Nome</FormControl.Label>
              <Input />
            </FormControl>

            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>

            <HStack justifyContent="space-between">
              <FormControl w="48%">
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" />
              </FormControl>
              <FormControl w="48%">
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input type="password" />
              </FormControl>
            </HStack>

            <FormControl>
              <FormControl.Label>Phone Number</FormControl.Label>
              <Input />
            </FormControl>

            <HStack justifyContent="space-between">
              <FormControl w="48%">
                <FormControl.Label>Receiving Bank</FormControl.Label>
                <Input type="password" />
              </FormControl>
              <FormControl w="48%">
                <FormControl.Label>Account number</FormControl.Label>
                <Input type="password" />
              </FormControl>
            </HStack>

            <HStack justifyContent="space-between">
              <FormControl w="48%">
                <FormControl.Label>Aba / Routing number</FormControl.Label>
                <Input type="password" />
              </FormControl>
              <FormControl w="48%">
                <FormControl.Label>Swift code</FormControl.Label>
                <Input type="password" />
              </FormControl>
            </HStack>

            <Button mt="2" colorScheme="blue">
              Sign up
            </Button>
          </VStack>
        </Box>
      </Center>
    </>
  );
}
