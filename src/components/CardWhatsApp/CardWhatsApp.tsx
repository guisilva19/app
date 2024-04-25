import { Box, HStack, Text, VStack } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

export default function CardWhatsApp() {
  return (
    <>
      <Box marginY={5}>
        <VStack
          justifyContent=""
          alignItems="center"
          padding="2px"
          backgroundColor="white"
          borderWidth={2}
          w="100%"
          h={130}
          rounded="xl"
          borderColor="gray.300"
        >
          <Box
            w="90%"
            h="50%"
            justifyContent="center"
            alignItems="center"
            paddingX={2}
          >
            <Text textAlign="center" fontFamily="PathwayRegular" fontSize={16}>
              Precisa de algum suporte? Entre em contato com nossos advogados.
            </Text>
          </Box>
          <HStack w="80%" alignItems="center" space={2}>
            <FontAwesome name="whatsapp" size={36} color="black" />
            <Text fontFamily="PathwayBold" fontSize={30}>
              21 98757-8661
            </Text>
          </HStack>
        </VStack>
      </Box>
    </>
  );
}
