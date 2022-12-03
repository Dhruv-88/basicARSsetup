import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroBox,
  ViroMaterials
} from '@viro-community/react-viro';


const InitialScene=()=>{
ViroMaterials.createMaterials({
  wood:{
    diffuseTexture:require('/Users/dhruvpatel/Documents/code/ReactNative/demo/assets/wood.jpeg')
  }
})
  return (<ViroARScene>
   <ViroBox
     height={0.5}
     width={0.5}
     length={0.5}
     position={[0,0,-1]}
     materials={['wood']}
   ></ViroBox>    

   
  </ViroARScene>)
}
 


export default () => {
  return (
    <ViroARSceneNavigator
      initialScene={{
        scene:InitialScene
      }
      }
      style={{flex:1}}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});