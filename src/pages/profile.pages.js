import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from '../stylesheets';
import axios from 'axios';

const {ProfileStyle} = Style;
function ProfilePages() {
 const [data, setData] = React.useState('');
 const [user, setUser] = React.useState('elvitro17');
 
 React.useEffect(() => {
       axios({
          method: 'get',
          url: 'https://api.github.com/users/'+ user.toString(),
          headers: {
            accept: '*/*',
          },
        }).then((data) => {
            setData(data.data);
          })    
          .catch((error) => {
            console.log(error);
          });
      }, [user]);

     const next = () => {
      if(user==='elvitro17') {
      setUser('fitraadinan');
     }else if(user==='fitraadinan'){
      setUser('hajimeyudha19');
     }else if(user==='hajimeyudha19'){
      setUser('Rahmadien');
     }else if(user==='Rahmadien'){
      setUser('elvitro17');
     }};
     
 return (
 
 <View style={ProfileStyle.container}>
 
 <View
  style={
  data.login  === 'hajimeyudha19'
  ? ProfileStyle.headerContainerGanjil
  : ProfileStyle.headerContainerGenap
  }>
  
 <Image
 source={{
 uri: data.avatar_url,
 }}
 style={ProfileStyle.headerImage}
 />

 <Text style={ProfileStyle.headerTXT}>
 {data.login}
 </Text>
 <Text style={ProfileStyle.headerTXTDesc}>
 {data.public_repos} Repository | 
 {data.followers} Followers |
 {data.following} Following</Text>
 </View>

 <TouchableOpacity
 style={ProfileStyle.bodyTouchable}
 onPress={() =>next() }>
 <Text style={ProfileStyle.bodyTXT}>NEXT</Text>
 </TouchableOpacity>
 </View>
 );

}
export default ProfilePages;