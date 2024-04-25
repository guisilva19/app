import { Button, Center, Heading, Text, VStack } from "native-base";
import { colors } from "../../../theme/colors";
import React from "react";

import { ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Footer from "../../../components/Footer/Footer";

export default function Setting() {
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
              Configurações
            </Heading>
            <Text fontFamily="PathwayRegular" fontSize={16} mt={2}>
              Acompanhe abaixo as etapas agendas
            </Text>

            <VStack mt={12}>
              <Button
                justifyContent={"flex-start"}
                backgroundColor={"transparent"}
                leftIcon={<AntDesign name="lock1" size={25} color="black" />}
                px={0}
                h={70}
                borderBottomColor={"gray.200"}
                borderBottomWidth={1}
              >
                <Text fontFamily="PathwayRegular" fontSize={20} ml={5}>
                  Trocar senha
                </Text>
              </Button>

              <Button
                justifyContent={"flex-start"}
                backgroundColor={"transparent"}
                leftIcon={
                  <AntDesign name="questioncircleo" size={25} color="black" />
                }
                px={0}
                h={70}
                borderBottomColor={"gray.200"}
                borderBottomWidth={1}
              >
                <Text fontFamily="PathwayRegular" fontSize={20} ml={5}>
                  Dúvidas frequentes
                </Text>
              </Button>

              <Button
                justifyContent={"flex-start"}
                backgroundColor={"transparent"}
                leftIcon={
                  <MaterialCommunityIcons
                    name="message-reply-text-outline"
                    size={25}
                    color="black"
                  />
                }
                px={0}
                h={70}
                borderBottomColor={"gray.200"}
                borderBottomWidth={1}
              >
                <Text fontFamily="PathwayRegular" fontSize={20} ml={5}>
                  Fale com o advogado
                </Text>
              </Button>
              <Button
                justifyContent={"flex-start"}
                backgroundColor={"transparent"}
                leftIcon={
                  <MaterialIcons name="logout" size={25} color="black" />
                }
                px={0}
                h={70}
                borderBottomColor={"gray.200"}
                borderBottomWidth={1}
              >
                <Text fontFamily="PathwayRegular" fontSize={20} ml={5}>
                  Sair do aplicativo
                </Text>
              </Button>
            </VStack>
          </VStack>
        </Center>
      </ScrollView>
      <Footer />
    </>
  );
}
