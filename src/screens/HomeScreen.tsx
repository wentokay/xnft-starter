import { Text, View, StyleSheet } from "react-native";

export const HomeScreen = () => (
  <View style={container}>
    <View>
      <Text>Hello {window.xnft.metadata.username}</Text>
      <Text>{window.xnft.solana.publicKey.toString()}</Text>
    </View>
  </View>
);

const { container } = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center"
  },
});
