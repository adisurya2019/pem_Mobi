import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Showing = StyleSheet.create({
    Grip:{
        margin:5,
        marginTop:20,
        height:'100%',
        width:'100%',
        backgroundColor: 'white',
        padding: 10,
    },
    Bar1:{
        //flex:2,
        flexDirection:'row',
        margin:5,
        marginTop:10

    },
    Bar2:{
        //flex:6,
        flexDirection:'row',
        margin:5
    },
    Name:{
        color: 'red',
        fontFamily: 'poppins',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft:5,
        flexDirection:'column'
        
    },
    Subname:{
        color: 'red',
        fontFamily: 'poppins',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft:5,      
    },
    Bar3:{
          flexDirection:'row',
          margin:5,
          marginTop:10
    },
    Teksmenu:{
        color: 'red',
        fontFamily: 'poppins',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft:5, 
        marginTop:10 
    },
    Teksopsi:{
        fontFamily: 'poppins',
        fontSize: 15,
        marginLeft: 10,
        marginTop:15
    },
    Gambarback:{
        width:15,
        height:15
    },
    Gambarstrip:{
        width:15,
        height:15,
        marginLeft:220
    },
    Iconperson:{
        width:50,
        height:50
    },
})

const App = () => {
    return(
        <View style={Showing.Grip}>
            <View style={Showing.Bar1}> 
                <Gambar/>
                <Gambar2/>
            </View>
            <View style={Showing.Bar2}>
                <Gambar3/>
                <View style={Showing.Name}>
                  <Text style={Showing.Name}>namapegawai</Text>
                  <Text style={Showing.Subname}>0812384141</Text> 
                </View> 
                <View style={{width:50,height:50, backgroundColor:'skyblue', marginLeft:83}}/>
            </View>
            <Text style={Showing.Teksmenu}>Menu Pegawai</Text>
            <View style={Showing.Bar3}>
                <View style={{width:50,height:50,backgroundColor:'skyblue'}}/>
                <Text style={Showing.Teksopsi}>Pembelian Barang</Text>
            </View>
            <View style={Showing.Bar3}>
                <View style={{width:50,height:50,backgroundColor:'skyblue'}}/>
                <Text style={Showing.Teksopsi}>Laporan Keuangan</Text>
            </View>
            <View style={Showing.Bar3}>
                <View style={{width:50,height:50,backgroundColor:'skyblue'}}/>
                <Text style={Showing.Teksopsi}>Laporan Stok Barang</Text>
            </View>
            <View style={Showing.Bar3}>
                <View style={{width:50,height:50,backgroundColor:'skyblue'}}/>
                <Text style={Showing.Teksopsi}>Order Masuk</Text>
            </View>
        </View>
    )
}

const Gambar = () => {
    return(
        <Image style={Showing.Gambarback}
            source={{
                uri:'https://cdn.icon-icons.com/icons2/1302/PNG/512/leftarrowsign_85800.png'
            }}
        />  
    )
}
const Gambar2 = () => {
    return(
        <Image style={Showing.Gambarstrip}
            source={{
                uri:'https://cdn.icon-icons.com/icons2/1302/PNG/512/menuoptions_85724.png'
            }}
        />  
    )
}
const Gambar3 = () => {
    return(
        <Image style={Showing.Iconperson}
            source={{
                uri:'https://cdn.icon-icons.com/icons2/17/PNG/256/personal_private_1935.png'
            }}
        />  
    )
}

export default App;
