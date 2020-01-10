import React from 'react';
import{ View, Text, TouchableOpacity } from 'react-native';

export default (item) => <View style={{ backgroundColor:item.color,padding:6, borderBottomColor:'#cbcbcb', borderBottomWidth:1, flexDirection:'row', alignItems:'center'}}>
<View style={{backgroundColor:'#fff', marginHorizontal:8, height:28, width:28, alignItems:'center', borderRadius:15}}>
<Text style={{color:item.color, fontWeight:'bold', fontSize:20, paddingHorizontal:4}}>{item.name.charAt(0)}</Text>
</View>
 <View>
 <Text style={{color:'#fff'}}>{item.name}</Text>
 <Text style={{color:'#fff'}}>{item.name}</Text>
 <Text style={{color:'#fff'}}>{item.name}</Text>
   </View>
    {/* <View style={{flex:1}}/> 
   <View>
     <TouchableOpacity style={{ borderRadius:4, borderColor:'#fff', borderWidth:3, paddingVertical:4, paddingHorizontal:8, backgroundColor:'#fff' }} onPress={()=> alert(`${item.name} Pressed`)}>
       <Text>
         Click
       </Text>
     </TouchableOpacity>
     </View> */}
</View>

