import { colors } from "../theme/colors";
import { navigation } from "../utils/navigation";
import {
  Box,
  Center,
  FormControl,
  HStack,
  Heading,
  Input,
  Link,
  Text,
  VStack,
  Button,
} from "native-base";

export default function Login() {
  return (
    <>
      <Center
        w="100%"
        h="100%"
        justifyContent="start"
        style={{ backgroundColor: colors["background-light"] }}
      >
        <Box p="2" py="8" mt="40" w="100%" maxW="350">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Welcome
          </Heading>
          <Heading
            mt="1"
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input h={52} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input h={52} type="password" />
              <Link
                _text={{
                  fontSize: "sm",
                  fontWeight: "500",
                  color: "indigo.500",
                }}
                alignSelf="flex-end"
                mt="1"
                onPress={() => navigation("forgot")}
              >
                Forgot Password?
              </Link>
            </FormControl>
            <Button
              h={52}
              mt="2"
              colorScheme={colors.primary}
              onPress={() => navigation("home")}
            >
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="md"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                I'm a new user.{" "}
              </Text>
              <Link
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                onPress={() => navigation("signup")}
              >
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </>
  );
}
