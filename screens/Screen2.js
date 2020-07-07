import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import Button from "../components/Button";

export default function Screen2({ navigation }) {
  const handleBtnPressed = ()=> navigation.navigate('Third')
  return (
    <View style={styles.container}>
      <Image style={styles.fullWidthImage} source={require('../assets/full-width.png')} width={'100%'} height={300} />
      <View style={{justifyContent:'center', flex:1}}>
      <Button
      title="Go to third screen"
      action={handleBtnPressed}
      btnStyle={styles.button}
      textStyle={styles.buttonText}
       />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    justifyContent: 'space-between',
    flexDirection:"column",
    flex: 1,
    backgroundColor:'#f9f9f9',
  },
  button:{
    marginVertical:15,
    paddingVertical:15,
    paddingHorizontal:20,
    borderRadius: 5,
    backgroundColor:'#33f25f'
  },
  buttonText:{
    color:'#224422',
    fontSize:16,
  },
  fullWidthImage:{
    backgroundColor:'#eee',
    resizeMode:'stretch',
  }
});