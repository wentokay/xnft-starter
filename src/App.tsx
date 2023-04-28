import { Text, View } from "react-native";
import { useXnft } from "./lib/useXnft";
import { HomeScreen } from "./screens/HomeScreen";

export const App = () => {
  const { loading } = useXnft();

  return loading ? (
    <View>
      <Text>Loading...</Text>
    </View>
  ) : (
    <HomeScreen />
  );
};
