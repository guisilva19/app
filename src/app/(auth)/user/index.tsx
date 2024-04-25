import {
  Box,
  Button,
  Center,
  CheckIcon,
  Checkbox,
  FormControl,
  HStack,
  Heading,
  Input,
  Radio,
  Select,
  Text,
  VStack,
} from "native-base";
import { colors } from "../../../theme/colors";
import React from "react";
import { nationalitiesList } from "../../../mock/naturalidades";
import { marital } from "../../../mock/marital";
import { ScrollView } from "react-native";
import { useGlobalContext } from "../../../context/context";
import { MaterialIcons } from "@expo/vector-icons";
import { countrys } from "../../../mock/countrys";
import Footer from "../../../components/Footer/Footer";
import { screens } from "../../../mock/screens";

export default function User() {
  const [service, setService] = React.useState("");
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
          >
            <Box mt={7}>
              <Heading fontFamily="PathwayBold" fontSize={32}>
                Bem vindo ao
              </Heading>
              <Heading fontFamily="PathwayBold" fontSize={32}>
                DivorcioWeb!
              </Heading>
            </Box>
            <Text fontFamily="PathwayRegular" fontSize={16} mt={2}>
              Para seguirmos com os próximos passos, necessitamos do seu
              cadastro, os itens abaixo são obrigatórios.
            </Text>

            <Checkbox value="true" color="info.600" mt={6}>
              <Text fontFamily="PathwayRegular">
                Não possuo filhos menores {"\n"}de idade com o cônjuge
              </Text>
            </Checkbox>

            <VStack mt={4} space={2}>
              <FormControl>
                <FormControl.Label>Nome completo</FormControl.Label>
                <Input h={52} backgroundColor="#fff" />
              </FormControl>

              <FormControl>
                <FormControl.Label>
                  Mudará para o nome de solteiro?
                </FormControl.Label>
                <Radio.Group
                  defaultValue="sim"
                  flexDirection={"row"}
                  name="myRadioGroup"
                >
                  <Radio value="sim" my={1}>
                    Sim
                  </Radio>
                  <Radio value="nao" my={1} ml={2}>
                    Não
                  </Radio>
                </Radio.Group>
              </FormControl>

              <FormControl>
                <FormControl.Label>Telefone para contato</FormControl.Label>
                <Input h={52} backgroundColor="#fff" />
              </FormControl>

              <FormControl>
                <FormControl.Label>Naturalidade</FormControl.Label>
                <Select
                  h={52}
                  selectedValue={service}
                  minWidth="200"
                  _selectedItem={{
                    bg: colors.greenDarkOpacity,
                    endIcon: <CheckIcon size="4" />,
                  }}
                  backgroundColor={"white"}
                  onValueChange={(itemValue) => setService(itemValue)}
                >
                  {nationalitiesList.map((item) => (
                    <Select.Item
                      shadow={2}
                      label={item.label}
                      value={item.value}
                    />
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <FormControl.Label>Estado civil</FormControl.Label>
                <Select
                  h={52}
                  selectedValue={service}
                  minWidth="200"
                  _selectedItem={{
                    bg: colors.greenDarkOpacity,
                    endIcon: <CheckIcon size="4" />,
                  }}
                  backgroundColor={"white"}
                  onValueChange={(itemValue) => setService(itemValue)}
                >
                  {marital.map((item) => (
                    <Select.Item
                      shadow={2}
                      label={item.label}
                      value={item.value}
                    />
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <FormControl.Label>Profissão</FormControl.Label>
                <Input h={52} backgroundColor="#fff" />
              </FormControl>

              <FormControl>
                <FormControl.Label>RG</FormControl.Label>
                <Input h={52} backgroundColor="#fff" />
              </FormControl>

              <FormControl>
                <FormControl.Label>CPF</FormControl.Label>
                <Input h={52} backgroundColor="#fff" />
              </FormControl>

              <Heading
                mt={5}
                textTransform={"uppercase"}
                fontFamily="PathwayBold"
                fontSize={16}
              >
                Insira as informações do cônjuge
              </Heading>

              <Text fontFamily="PathwayRegular">
                Digite exatamente como deverá aparecer no contrato.
              </Text>

              <FormControl>
                <FormControl.Label>Endereço</FormControl.Label>
                <Input h={52} backgroundColor="#fff" />
              </FormControl>

              <HStack w={"100%"} justifyContent={"space-between"}>
                <FormControl w={"48%"}>
                  <FormControl.Label>Cidade</FormControl.Label>
                  <Input h={52} backgroundColor="#fff" />
                </FormControl>
                <FormControl w={"48%"}>
                  <FormControl.Label>Estado</FormControl.Label>
                  <Input h={52} backgroundColor="#fff" />
                </FormControl>
              </HStack>

              <HStack w={"100%"} justifyContent={"space-between"}>
                <FormControl w={"48%"}>
                  <FormControl.Label>Pais</FormControl.Label>
                  <Select
                    h={52}
                    selectedValue={service}
                    _selectedItem={{
                      bg: colors.greenDarkOpacity,
                      endIcon: <CheckIcon size="4" />,
                    }}
                    backgroundColor={"white"}
                    onValueChange={(itemValue) => setService(itemValue)}
                  >
                    {countrys.map((item) => (
                      <Select.Item
                        shadow={2}
                        label={item.label}
                        value={item.value}
                      />
                    ))}
                  </Select>
                </FormControl>
                <FormControl w={"48%"}>
                  <FormControl.Label>CEP</FormControl.Label>
                  <Input h={52} backgroundColor="#fff" />
                </FormControl>
              </HStack>

              <Heading
                mt={5}
                textTransform={"uppercase"}
                fontFamily="PathwayBold"
                fontSize={16}
              >
                Insira as informações do cônjuge
              </Heading>

              <FormControl>
                <FormControl.Label>Nome</FormControl.Label>
                <Input h={52} backgroundColor="#fff" />
              </FormControl>

              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input h={52} backgroundColor="#fff" />
              </FormControl>

              <Text mt={2} fontFamily="PathwayRegular">
                Enviaremos um e-mail para a pessoa acima se cadastrar no
                aplicativo e acompanhar o processo junto com você.
              </Text>

              <Box alignItems="flex-end" w="100%" mt={10}>
                <Button
                  onPress={() => navigation(screens.upload)}
                  backgroundColor={colors.yellow}
                  h={52}
                  px={"4"}
                  rounded="2xl"
                  textDecorationColor="black"
                  flexDirection="row"
                  endIcon={
                    <MaterialIcons
                      name="navigate-next"
                      size={24}
                      color="black"
                    />
                  }
                >
                  <Text fontSize={16} fontFamily="PathwayBold">
                    Salvar e Proximo
                  </Text>
                </Button>
              </Box>
            </VStack>
          </VStack>
        </Center>
      </ScrollView>
      <Footer />
    </>
  );
}
