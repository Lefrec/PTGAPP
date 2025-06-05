import {Text, View, StyleSheet} from "react-native";
import Ability from "../../components/ability";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Army</Text>
      <Ability/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
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