import React from "react";
import { colors } from "../theme/colors";
import { navigation } from "../utils/navigation";
import {
  Box,
  Center,
  FormControl,
  Input,
  Text,
  VStack,
  Button,
  Pressable,
  Icon,
  Checkbox,
  Image,
  Link,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function Login() {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <Center
        w="100%"
        h="100%"
        justifyContent="start"
        style={{ backgroundColor: colors.background }}
      >
        <Box p="2" py="8" mt="20" w="100%" maxW="350">
          <Center>
            <Image source={require("../assets/logo.png")} />
          </Center>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input h={52} backgroundColor="#fff" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                backgroundColor="#fff"
                h={52}
                type={show ? "text" : "password"}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      as={
                        <MaterialIcons
                          name={show ? "visibility" : "visibility-off"}
                        />
                      }
                      size={5}
                      mr="2"
                      color="muted.400"
                    />
                  </Pressable>
                }
              />
            </FormControl>
            <Checkbox value="true" color="info.600" mt={2}>
              <Text fontFamily="PathwayRegular">
                Salvar login neste dispositivo
              </Text>
            </Checkbox>
            <Button
              w="80%"
              h={52}
              mt={5}
              rounded="2xl"
              mx="auto"
              colorScheme={colors.yellow}
              onPress={() => navigation("home")}
            >
              <Text fontSize={20} fontFamily="PathwayBold">
                Entrar
              </Text>
            </Button>

            <Button
              w="80%"
              h={52}
              mt={2}
              rounded="2xl"
              mx="auto"
              backgroundColor="white"
              borderWidth={1}
              onPress={() => navigation("home")}
            >
              <Text fontSize={20} fontFamily="PathwayBold">
                Quero me Cadastrar
              </Text>
            </Button>

            <Link
              _text={{
                fontSize: "lg",
                fontWeight: "600",
                fontFamily: "PathwayBold",
                color: "black",
                textDecorationLine: "none",
              }}
              alignSelf="flex-end"
              mt="1"
              w="80%"
              mx="auto"
              justifyContent="center"
              py={3}
              onPress={() => navigation("forgot")}
            >
              Esqueci minha senha
            </Link>
          </VStack>
        </Box>
      </Center>
    </>
  );
}
