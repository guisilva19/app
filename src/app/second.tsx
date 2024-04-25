import React from "react";
import { colors } from "../theme/colors";
import {
  Box,
  Center,
  Text,
  VStack,
  Image,
  Heading,
  HStack,
  Button,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useGlobalContext } from "../context/context";
import CardWhatsApp from "../components/CardWhatsApp/CardWhatsApp";

export default function Second() {
  const { navigation } = useGlobalContext();
  return (
    <>
      <VStack justifyContent="space-between" w="100%" h="100%">
        <Box
          w="100%"
          h="100%"
          justifyContent="start"
          alignItems="center"
          style={{ backgroundColor: colors.background }}
        >
          <VStack p="2" py="8" mt="10" w="100%" maxW="350">
            <Center>
              <Image source={require("../assets/illustration2.png")} />
            </Center>

            <Box mt={7}>
              <Heading fontFamily="PathwayBold" fontSize={32}>
                Este aplicativo não
              </Heading>
              <Heading fontFamily="PathwayBold" fontSize={32}>
                é para você se:
              </Heading>
            </Box>

            <Box mt={2}>
              <HStack space={3}>
                <Text>-</Text>
                <Text fontFamily="PathwayRegular" fontSize={16}>
                  Divórcio litigioso;
                </Text>
              </HStack>
              <HStack space={3}>
                <Text>-</Text>
                <Text fontFamily="PathwayRegular" fontSize={16}>
                  Possui filhos menores de idade;
                </Text>
              </HStack>
              <HStack space={3}>
                <Text>-</Text>
                <Text fontFamily="PathwayRegular" fontSize={16}>
                  Possui bens e imóveis em conjunto.
                </Text>
              </HStack>
            </Box>
          </VStack>
          <CardWhatsApp />
          <Box alignItems="flex-end" w="80%">
            <Button
              onPress={() => navigation("login")}
              backgroundColor={colors.yellow}
              w="180px"
              h={52}
              rounded="2xl"
              textDecorationColor="black"
              flexDirection="row"
              endIcon={
                <MaterialIcons name="navigate-next" size={24} color="black" />
              }
            >
              <Text fontSize={20}>Proximo</Text>
            </Button>
          </Box>
        </Box>
      </VStack>
    </>
  );
}
