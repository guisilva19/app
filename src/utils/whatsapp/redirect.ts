import { Linking } from "react-native";

export const redirectWhatsApp = () => {
  Linking.openURL("https://api.whatsapp.com/send/?phone=+5521987578661");
};
