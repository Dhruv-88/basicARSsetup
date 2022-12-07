import React, {useState} from 'react';
import {StyleSheet,View,TouchableOpacity,Text} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroBox,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight
} from '@viro-community/react-viro';


const InitialScene=(props)=>{
  let data=props.sceneNavigator.viroAppProps;

  ViroMaterials.createMaterials({
  wood:{
    diffuseTexture:require('./assets/wood.jpeg')
  },
  black:{
    diffuseTexture:require('./assets/tv.png')
  },
  skull:{
    diffuseTexture:require('./assets/skullcolor.png')
  },
})
  return (<ViroARScene>
    <ViroAmbientLight color="#ffffff"/>
    {
      data.object==='TV'?
        <Viro3DObject
        source={require('/Users/dhruvpatel/Documents/code/ReactNative/demo/assets/tv.obj')}
        position={[0,-1,-3]}
        scale={[0.5,0.5,0.5]}
        type="OBJ"
        materials={['black']}
      />
      :
      <Viro3DObject
      source={require('/Users/dhruvpatel/Documents/code/ReactNative/demo/assets/skull.obj')}
      position={[0,0,-100]}
      rotation={[-45,50,45]}
      scale={[0.5,0.5,0.5]}
      materials={['skull']}

      type="OBJ"
    />
    }
    
 
       
  </ViroARScene>)
}
 


export default () => {
  const [object,setObject]=useState('skull');
  return (
      <View style={{flex:1}}>
      <View style={styles.mainView}>
        <ViroARSceneNavigator
         initialScene={{
          scene:InitialScene
         }}
         viroAppProps={{object:object}}
      
    />
      </View>
      <View style={styles.controlView}>
          <TouchableOpacity 
            onPress={()=>{setObject('skull')}}
          >
            <Text style={styles.text}>View Skull</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{setObject('TV')}}
          >
            <Text style={styles.text} >View TV</Text>
          </TouchableOpacity>

        </View> 
    

      </View>
   
  );
};

var styles = StyleSheet.create({
  mainView: {
    flex: 1
  },
  controlView: {
    width:'100%',
    height:100,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'white',
    padding:20
  },
  text:{
    backgroundColor:'grey',
    padding:10
  }
});

 