import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { CheckButton } from 'react-native-check-component';

export default function App() {
  const [checked,setChecked] =React.useState(true)

  return (
    <View style={styles.container}>
      <CheckButton 
        checked={checked} 
        onPress={()=>setChecked(!checked)} 
        imageSource={require('./icon/check.png')} 
        containerStyle={styles.checkButtonContainer}
        imageStyle={styles.image}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  checkButtonContainer:{
      width:25,
      height:25,
      borderColor:'red',
      borderWidth:2,
  },
  image:{
    height:15,
    width:15
  }
});
