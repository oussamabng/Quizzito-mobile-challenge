import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Button from "../components/Button";

export default function Screen3({ navigation }) {
  const handleBtnPressed = ()=> navigation.navigate('Home')
  const handleReturnBtn = ()=> navigation.goBack()
  return (
    <View style={styles.container}>
      <View>
      <Button
       title="Go Home"
      action={handleBtnPressed}
      btnStyle={styles.button}
      textStyle={styles.buttonText}
      >
      <Ionicons name="md-home" size={18} style={styles.iconLeft} color="#fff" />
      </Button>
      <Button
      title="Go back"
      action={handleReturnBtn}
      btnStyle={styles.buttonTransparent}
      textStyle={styles.buttonTransparentText}
       />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    backgroundColor:'#f9f9f9',
  },
  button:{
    marginVertical:15,
    paddingVertical:15,
    paddingHorizontal:20,
    borderRadius: 5,
    backgroundColor:'#335ff2',
    flexDirection:'row',
    alignItems:'center'
  },
  buttonText:{
    color:'#fff',
    fontSize:16,
  },
  buttonTransparent:{
    marginVertical:15,
    paddingVertical:15,
    paddingHorizontal:20,
  },
  buttonTransparentText:{
    color:'#666',
    textAlign:'center'
  },
  iconLeft:{
    marginRight:5
  }
});