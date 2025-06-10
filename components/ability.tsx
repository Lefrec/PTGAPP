import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from "react";

type AbilityProps = {
  timing : string;
  title : string;
  desc : string
}

export default function Ability({timing, title, desc}:AbilityProps) {

  const [full, setFull] = useState(false);

  const toggleFull = () => {
    setFull(!full);
    console.log(full)
  };

  return (
    <View style={styles.ability}>
        <View style={styles.header}>
          <View style={{flexDirection: "row",alignItems: 'center',padding: 20}}>
            <FontAwesome6 style={{marginRight: 10}} name="star-of-life" size={24} color="white" />
            <Text style={{color: '#FFF',fontWeight: "600",fontSize: 16}}>{timing}</Text>
          </View>
          <TouchableOpacity onPress={toggleFull} style={{height: '100%',padding: 20}}>
            <MaterialIcons name="keyboard-arrow-down" size={32} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 20, paddingVertical: 10, borderBottomWidth : 1, borderColor : "#DADADA"}}>
            <Text>{title}</Text>
        </View>
        {full && (
          <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
            <Text>{desc}</Text>
          </View>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  ability : {
    width: '100%', borderWidth: 2, borderColor: 'black', borderRadius: 10, overflow: 'hidden'
  },
  header : {
    backgroundColor: "#000",flexDirection: "row",alignItems: 'center',justifyContent : 'space-between'
  },
});