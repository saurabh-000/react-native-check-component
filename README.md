# react-native-check-component

This is check component compatiable with both android and ios

## Installation

```sh
npm install react-native-check-component
```
## Note:
###### Do not use version `0.1.0`

## Demo:
![](https://github.com/saurabh-000/react-native-check-component/blob/master/example/demo/check-component-video.gif)

## Usage:

```js
import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { CheckButton } from 'react-native-check-component';

export default function App() {
  const [checked,setChecked]=React.useState(false)

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

```  

## Props:
| Props              | Params                                          | isRequire | Description                                                         |
| ------------------ | ----------------------------------------------- | --------- | ------------------------------------------------------------------- |
| checked            | Boolean                                         | Yes       | The checked prop determines whether your checked image is visible.  |
| imageSource        | ImageSource                                     | Yes       | Image for checkd component                                          |
| containerStyle     | ViewStyle                                       | No        | Style your check component container                                |
| imageStyle         | ImageStyle                                      | No        | Style your image style that is used in the component                |
| onPress            | Function                                        | yes       | The onShow prop allows passing a function that will be called on pressing the component.          |


## Contact me
You can send your issues and feedback on my email `saurabhsrg19oct@gmail.com` or Join the [discord server](https://discord.gg/TRnwZHgZ9u) here

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
