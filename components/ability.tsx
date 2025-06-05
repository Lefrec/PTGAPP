import {Text, View, StyleSheet} from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export default function Index() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <FontAwesome6 style={{marginRight: 10}} name="star-of-life" size={24} color="white" />
            <Text style={styles.heading}>This is an ability</Text>
        </View>
        <View style={{padding: 20}}>
            <Text style={styles.text}>This is an ability</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    overflow: 'hidden',
  },
  header: {
    backgroundColor: "#000",
    padding: 20,
    flexDirection: "row",
    alignItems: 'center',
  },
  heading: {
    color: '#FFF',
    fontWeight: "600",
    fontSize: 16,
  },
  text: {
    color: '#000',
  },
});