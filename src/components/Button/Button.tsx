import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";

interface IButton {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  classButton?: string;
  classTitle?: string;
}

export default function Button({
  title,
  onPress,
  classButton,
  classTitle,
}: IButton) {
  return (
    <>
      <TouchableOpacity className={classButton} onPress={onPress}>
        <Text className={classTitle}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}
