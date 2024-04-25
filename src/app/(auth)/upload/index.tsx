import {
  Box,
  Button,
  Center,
  Checkbox,
  HStack,
  Heading,
  Text,
  VStack,
} from "native-base";
import { colors } from "../../../theme/colors";
import React from "react";

import { ScrollView } from "react-native";
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";

import { useGlobalContext } from "../../../context/context";
import CardWhatsApp from "../../../components/CardWhatsApp/CardWhatsApp";
import { screens } from "../../../mock/screens";
import Footer from "../../../components/Footer/Footer";

export default function Upload() {
  const [IAgree, setIAgree] = React.useState(false);
  const { navigation } = useGlobalContext();

  return (
    <>
      <ScrollView style={{ backgroundColor: colors.background }}>
        <Center
          w="100%"
          h="100%"
          pb={100}
          style={{ backgroundColor: colors.background }}
        >
          <VStack
            backgroundColor={colors.background}
            h="full"
            w="full"
            maxW={350}
            mt={20}
          >
            <Heading fontFamily="PathwayBold" fontSize={32}>
              Upload dos {"\n"}documentos
            </Heading>
            <Text fontFamily="PathwayRegular" fontSize={16} mt={2}>
              Está quase acabando, agora precisamos que você anexe aqui os
              seguintes documentos:
            </Text>
            <Box mt={2}>
              <HStack space={3}>
                <Text>-</Text>
                <Text fontFamily="PathwayRegular" fontSize={16}>
                  Cópia do RG e CPF;
                </Text>
              </HStack>
              <HStack space={3}>
                <Text>-</Text>
                <Text fontFamily="PathwayRegular" fontSize={16}>
                  Certidão de casamento atualizada no prazo de 90 dias (e caso
                  não possua - no caso de moradores do exterior, entra em
                  contato);
                </Text>
              </HStack>
              <HStack space={3}>
                <Text>-</Text>
                <Text fontFamily="PathwayRegular" fontSize={16}>
                  Comprovante de endereço;
                </Text>
              </HStack>
              <HStack space={3}>
                <Text>-</Text>
                <Text fontFamily="PathwayRegular" fontSize={16}>
                  Se existirem filhos, apresentar certidão de nascimento.
                </Text>
              </HStack>
            </Box>

            <HStack
              justifyContent="space-between"
              alignItems="center"
              padding="2px"
              backgroundColor={colors.greenDark}
              w="100%"
              h={"100px"}
              rounded="xl"
              mt={6}
            >
              <Box w="20%" alignItems={"center"}>
                <AntDesign
                  name="exclamationcircleo"
                  size={30}
                  color="white"
                  mx="auto"
                />
              </Box>
              <Box
                backgroundColor="white"
                w="80%"
                h="100%"
                borderTopRightRadius="10px"
                borderBottomRightRadius="10px"
                justifyContent="center"
                alignItems="center"
                paddingX={2}
              >
                <Text fontFamily="PathwayRegular" py={2} fontSize={12}>
                  Após o envio dos documentos, formularemos o contrato de
                  divórcio e enviaremos uma notificação para que você visualize
                  e aceito os termos.
                </Text>
              </Box>
            </HStack>

            <Box backgroundColor={"white"} p={"2.5"} rounded={"lg"} mt={6}>
              <Text>
                O processo precisa ser concluído em 30 dias senão ele será
                reiniciado
              </Text>
              <Checkbox
                value="true"
                color="info.600"
                mt={2}
                onChange={(value) => setIAgree(value)}
              >
                <Text fontFamily="PathwayRegular">Li acima e concordo</Text>
              </Checkbox>
            </Box>

            <Center mt={6}>
              <Button
                disabled={!IAgree}
                backgroundColor={IAgree ? colors.yellow : colors.disabled}
                h={52}
                px="4"
                rounded="2xl"
                textDecorationColor="black"
                flexDirection="row"
                endIcon={
                  <Feather
                    name="upload"
                    size={24}
                    color={IAgree ? "#000" : "#0000007b"}
                  />
                }
              >
                <Text
                  fontSize={16}
                  fontFamily="PathwayBold"
                  color={IAgree ? "black" : "gray.400"}
                >
                  Enviar documentos
                </Text>
              </Button>
            </Center>

            <Heading
              mt={5}
              textTransform={"uppercase"}
              fontFamily="PathwayBold"
              fontSize={16}
            >
              ARQUIVOS ANEXADOS
            </Heading>

            <Box mt={4}>
              <HStack backgroundColor={colors.greenDark} space={2}>
                <Text
                  color={"white"}
                  fontFamily="PathwayBold"
                  fontSize={12}
                  w={"12"}
                  textAlign={"center"}
                >
                  TIPO
                </Text>
                <Text
                  color={"white"}
                  fontFamily="PathwayBold"
                  w={"12"}
                  fontSize={12}
                  textAlign={"center"}
                >
                  NOME
                </Text>
              </HStack>
              <VStack
                minH={"10"}
                maxH={"32"}
                backgroundColor={"white"}
              ></VStack>
            </Box>

            <Box alignItems="flex-end" w="100%" mt={10}>
              <Button
                onPress={() => navigation(screens.upload)}
                backgroundColor={colors.yellow}
                px="4"
                h={52}
                rounded="2xl"
                textDecorationColor="black"
                flexDirection="row"
                endIcon={
                  <MaterialIcons name="navigate-next" size={24} color="black" />
                }
              >
                <Text fontSize={16} fontFamily="PathwayBold">
                  Salvar e Proximo
                </Text>
              </Button>
            </Box>
            <CardWhatsApp />
          </VStack>
        </Center>
      </ScrollView>
      <Footer />
    </>
  );
}
