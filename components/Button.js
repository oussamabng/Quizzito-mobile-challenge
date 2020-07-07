import React,{useEffect,useRef} from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native'

const Button = (props)=>{
  const {title,action,btnStyle,textStyle} = props;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const animatedValue = useRef(new Animated.Value(1)).current;

  // animate the btn when it is rendered 
  useEffect(()=>{
    console.log(animatedValue)
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000
    }).start();
    
  },[fadeAnim,animatedValue])

  // animate the btn when it is clicked
  const btnPressed = ()=>{
   Animated.spring(animatedValue,  {
            toValue: 0.8,
   }).start();
   setTimeout(()=>{
     Animated.spring(animatedValue,  {
            toValue: 1,
   }).start();
   action()
   },300)
  }
  return(
    <Animated.View
        style={[
          {
            opacity: fadeAnim,
            transform: [{ scale : animatedValue}]
          }
        ]}
      >
     <TouchableOpacity
      onPress={btnPressed}
      style={btnStyle}
     >
      {props.children}
      <Text
        style={textStyle}
       >
       {title}
      </Text>
      </TouchableOpacity>
    </Animated.View>

  )
}
export default Button;
