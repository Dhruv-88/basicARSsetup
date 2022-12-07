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
  const [rotation,setRotation]=useState([-45,50,45])
  const [position,setPosition]=useState([0,0,-100])
  const [tvScale,setTvScale]=useState([5,5,5])
  const [skullScale,setSkullScale]=useState([0.5,0.5,0.5])

   const moveObject=(newPosition)=>{
      console.log(newPosition);
      setPosition(newPosition)


   }
  
   const rotateObject=(rotateState, rotationFactor, source)=>{
      if(rotateState===3){
        let currentLocation=[rotation[0]-rotationFactor,rotation[1]-rotationFactor,rotation[2]-rotationFactor];
        setRotation(currentLocation)
      }
   }

   const scaleSkullObject=(pinchState, scaleFactor, source)=>{
       if(pinchState===3){
        let currentScale=skullScale[0];
        let newScale=currentScale*scaleFactor;
        let newScaleArray=[newScale,newScale,newScale]
         
        console.log(newScaleArray);
        setSkullScale(newScaleArray)
       }
      
   }

   const scaleTvObject=(pinchState, scaleFactor, source)=>{
    if(pinchState===3){
     let currentScale=tvScale[0];
     let newScale=currentScale*scaleFactor;
     let newScaleArray=[newScale,newScale,newScale]
      
     console.log(newScaleArray);
     setTvScale(newScaleArray)
    }
   
}
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
        position={position}
        scale={tvScale}
        rotation={rotation}
        type="OBJ"
        materials={['black']}
        onRotate={rotateObject}
        onDrag={moveObject}
        onPinch={scaleTvObject}
        
      />
      :
      <Viro3DObject
      source={require('/Users/dhruvpatel/Documents/code/ReactNative/demo/assets/skull.obj')}
      position={position}
      rotation={rotation}
      scale={skullScale}
      materials={['wood']}
      onDrag={moveObject}
      onRotate={rotateObject}
      type="OBJ"
      onPinch={scaleSkullObject}
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

 