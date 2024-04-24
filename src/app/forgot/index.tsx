import { StatusBar } from "expo-status-bar";
import {
  Box,
  Center,
  FormControl,
  Heading,
  Input,
  VStack,
  Button,
} from "native-base";
import { colors } from "../../theme/colors";

export default function ForgotPassword() {
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
            Recover password
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            fontWeight="medium"
            size="xs"
          >
            Enter email to continue!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input h={52} />
            </FormControl>

            <Button
              mt="2"
              h={52}
              borderRadius={4}
              size={"md"}
              fontWeight="semibold"
              colorScheme={colors.primary}
            >
              Submit
            </Button>
          </VStack>
        </Box>
      </Center>
    </>
  );
}
