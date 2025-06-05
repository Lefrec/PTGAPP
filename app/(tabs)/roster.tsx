import {Text, View, StyleSheet} from "react-native";

export default function Roster() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Roster</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  btn: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#000',
  },
});