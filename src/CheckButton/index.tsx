import React from "react"
import { Image, Pressable } from "react-native"
import type { InputProps } from "./model";
import { styles } from "./styles";
const CheckButton:InputProps =(props)=>{
    const {
        checked,
        onPress,
        containerStyle,
        imageStyle,
        imageSource
      } = props;
    
    
    return(
        <>
        {
            checked
            ?
            <>
              <Pressable onPress={onPress} style={[styles.container,containerStyle]}>
                <Image source={imageSource} style={[styles.image,imageStyle]}/>
              </Pressable>
            </>
            :
            <Pressable onPress={onPress} style={[styles.container,containerStyle]}/>
        }
              
        </>
    )
}
export default CheckButton