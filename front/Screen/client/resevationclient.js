





import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';

import { Dimensions, input } from 'react-native-web';


const { width: WIDTH } = Dimensions.get('window')

export default function Reservationclient({ route, navigation }) {
    const { itemId, getReservations} = route.params;
    useEffect(() => {
        console.warn(itemId, getReservations.marque_vehicule)
        console.warn(getReservations._id)
    }, [])

    const[reservation , setReservation]=useState('')
    useEffect(async () => {
      
        if (getReservations) {
            setReservation(getReservations)
        }
    }, []);





    
    return (

        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <ScrollView style={styles.scrollView}>
                
                <View style={{ alignItems: 'center' , backgroundColor:'whitesmoke' , marginTop:20 }}>
                    <Text style={{ color: '#4A919E', fontWeight: 'bold' , fontSize:15 , marginTop:30}}>
                        Information de la reservation
                    </Text>

                    <Text>Nom du client: {reservation.Nom_client}</Text>
                    <Text>Prenom de la client: {reservation.Prenom_client}</Text>
                    <Text>Numéro de la client: {reservation.Num_Client}</Text>
                    <Text>Marque de la voiture: {reservation .marque_vehicule}</Text>
                   
                    <Text>Type de la voiture: {reservation .Nature_vehicule}</Text>
                    <Text>Date: {reservation. date_heure}</Text>



                </View>
               
                
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        backgroundColor: 'white',
        marginVertical: 10,
    },
    icon: {

        top: 8,
        left: 37,
    },
    btnLogin: {
        width: 200,
        height: 45,
        borderRadius: 25,
        backgroundColor: 'black',
        justifyContent: 'center',
        marginTop: 20,
        alignItems: 'center',
        alignSelf: 'center'
    },
    TextBtn: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    link: {
        color: 'blue',
    },
    input: {
        width: 300,
        height: 45,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 25,
        fontSize: 10,
        paddingLeft: 45,
        backgroundColor: '#f5f5f5',
        color: 'black',
        marginHorizontal: 15,
        alignSelf: 'center',
        alignItems: 'center'

    },
    logoContainer: {
        alignItems: 'center'
    },
    btnEye: {

        top: 17,
        right: 60,
    }
    ,
    logoText: {
        color: 'black',
        fontWeight: 600,
        fontSize: 20,
        fontWeight: '400',
        marginTop: 10,
        opacity: 0.5,
        marginBottom: 10
    },
    logo: {
        width: 150,
        height: 180,
        marginBottom: 20
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        width: '80%',
    },

    link: {
        color: 'blue',
    },
    uploadBtnContainer: {
        height: 125,
        width: 125,
        borderRadius: 125 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'dashed',
        borderWidth: 1,
        overflow: 'hidden',
    },
    uploadBtn: {
        textAlign: 'center',
        fontSize: 16,
        opacity: 0.3,
        fontWeight: 'bold',
    },
    skip: {
        textAlign: 'center',
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 2,
        opacity: 0.5,
    },
    containerr: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});