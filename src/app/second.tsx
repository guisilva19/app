import React from "react";
import { colors } from "../theme/colors";
import { navigation } from "../utils/navigation";
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
import { FontAwesome } from "@expo/vector-icons";

export default function Second() {
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
              <Image source={require("../assets/illustration1.png")} />
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

            <VStack
              justifyContent=""
              alignItems="center"
              padding="2px"
              backgroundColor="white"
              borderWidth={2}
              w="100%"
              h={130}
              rounded="xl"
              mt={6}
              borderColor="gray.300"
            >
              <Box
                w="90%"
                h="50%"
                justifyContent="center"
                alignItems="center"
                paddingX={2}
              >
                <Text
                  textAlign="center"
                  fontFamily="PathwayRegular"
                  fontSize={16}
                >
                  Precisa de algum suporte? Entre em contato com nossos
                  advogados.
                </Text>
              </Box>
              <HStack
                w="80%"
                alignItems="center"
                justifyContent="center"
                space={2}
              >
                <FontAwesome name="whatsapp" size={36} color="black" />
                <Text fontFamily="PathwayBold" fontSize={30}>
                  21 98757-8661
                </Text>
              </HStack>
            </VStack>
          </VStack>
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
