import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import Style from '../stylesheets';
const {HomeStyle} = Style;
function HomePages() {
 const data = [
 {
 id: 1,
 nama: 'RAHMADIEN AKBARIZA SYIFA UL HAQ',
 nim: '21120119140144',
 kelompok: '15',
 },
 {
 id: 2,
 nama: 'ELVITRO GUMELAR AGUNG',
 nim: '21120117140022',
 kelompok: '15',
 },
 {
 id: 3,
 nama: 'HAJIME YUDHA IQBAL PRANATA',
 nim: '21120119120017',
 kelompok: '15',
 },
 {
 id: 4,
 nama: 'FITRA ADINA NUZULIA',
 nim: '21120119140130',
 kelompok: '15',
 },
 ];
 const ListItemNama = dataPassing => {
 return (
 <View
 style={
 dataPassing.dataNama.nim % 2 === 1
 ? HomeStyle.itemListContainerGanjil
 : HomeStyle.itemListContainerGenap
 }>
 <View>
 <View style={HomeStyle.itemListGaris} />
 </View>
 <View style={HomeStyle.itemListContent}>
 <Text style={HomeStyle.itemListTXT}>
 {'Nama : ' + dataPassing.dataNama.nama}
 </Text>
 <Text style={HomeStyle.itemListTXT}>
 {'NIM : ' + dataPassing.dataNama.nim}
 </Text>
 <Text style={HomeStyle.itemListTXT}>
 {'Kelompok : ' + dataPassing.dataNama.kelompok}
 </Text>
 </View>
 </View>
 );
 };
 return (
 <View style={HomeStyle.container}>
 <View style={HomeStyle.headerContainer}>
 <Image
 source={{
 uri: 'https://bit.ly/39BPh9p',
 }}
 style={HomeStyle.headerImage}
 />
 <Text style={HomeStyle.headerTXT}>
 PRAKTIKUM MDP MODUL 4 KELOMPOK 15
 </Text>
 </View>
 <FlatList
 showsVerticalScrollIndicator={false}
 legacyImplementation={false}
 data={data}
 renderItem={({item}) => <ListItemNama dataNama={item} />}
 keyExtractor={item => item.id}
 style={HomeStyle.flatlist}
 />
 </View>
 );
}
export default HomePages;
