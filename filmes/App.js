import {Image,Text,View,StyleSheet} from 'react-native'
import  React from 'react'


export default function App(){



  return(
     
    <View style={estilos.conteudo}>

      <View style={estilos.caixinha}>
        
        <Image
        style={estilos.foto}
        source={require('./images/bahia.webp')}
        />
         
         <Text style={estilos.texto}>BORA BAHÊAAAAA!!!!</Text>
         <Text style={estilos.texto2}>Marcus Vinicius Santos</Text>
          
          
      </View>
    
    </View>

  )
}

const estilos=StyleSheet.create({

conteudo:{
 flex:1,
backgroundColor:'darkcyan',
justifyContent:'center',
alignItems:'center',
},


caixinha:{

  backgroundColor:'white',
  width:'300px',
  padding:20,
  borderRadius:20,
  
},

texto:{
fontSize:20,
color:'red',
fontWeight:'bold',
marginTop:20,
},

texto2:{
fontSize:20,
color:'green',
fontWeight:'bold'
},

foto:{

  width:200,
  height:200,
  resizeMode:'contain'
},

})
