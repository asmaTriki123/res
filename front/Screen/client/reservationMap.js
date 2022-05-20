


import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, SafeAreaView, Image, TextInput, TouchableOpacity , Dimensions} from 'react-native';
import { Button, useTheme } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import { getClientData, updateClientData } from "../../utils/AsyncStorageClient";
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
const {width:WIDTH} =Dimensions.get('window')
import logo from '../../assets/res1.jpg'
import {Picker} from "@react-native-picker/picker";
export default function NewReservationMap({ route, navigation }) {
    const { itemId, getStation } = route.params;
  
    useEffect(() => {
       /* console.warn(itemId, getStation.Nom_station)
        console.warn(getStation._id)*/
    }, [])
    state = {
        selectedHours: 0,
        selectedMinutes: 0,
      };
          
    const [date_heure, setDate] = useState('');
    const [marque_vehicule, setMarque] = useState('');
    const [Nature_vehicule, setNatureVehicule] = useState('');
    const [id, setId] = useState('')
    const [client, setClient] = useState('')
    const [station, setStation] = useState()
    const [time, setTime] = useState(new Date());
  
    useEffect(async () => {
        setClient(await getClientData());
        if (getStation) {
            setStation(getStation)
        }
    }, []);



    const { colors } = useTheme();

    async function addReservatoin() {
        fetch("http://192.168.1.15:3001/reservation/addres", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                idStation: itemId,
                date_heure: date_heure,
                marque_vehicule: marque_vehicule,
                Nature_vehicule: Nature_vehicule,
                Nom_client: client.data.utilisateur.nom,
                Prenom_client: client.data.utilisateur.prenom,
                Utilistauer:client.data.utilisateur._id,
                Num_Client:client.data.Num_tel,
               Station:getStation._id
            }),
        }).then(res => res.json())
        .then(res => console.log(res))
            .then(res => {
                if(res) {
                    console.log(res)
                    navigation.navigate('Rerse')
                }
            })
            .catch(err => {
                console.log(err)
            });
    }

    return (

        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <ScrollView >
           
     
            <Image source={logo}  style={styles.logo}/>
                
                <View style={styles.containerr}>
                  {/* <Text style={{ color: '#4A919E', fontWeight: 'bold'  , fontSize:22 }}>Reserver</Text> */} 
                </View>
                {/*<View  >
                    <TextInput
                        style={styles.input}
                        placeholder={'Date et heure'}
                        placeholderTextColor={'grey'}
                        underLineColorAndroid='transparent'
                        onChangeText={text => setDate(text)}
                    />
    </View>*/}

{/*<DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={time}
          mode={'time'}
         
          display="default"
          placeholder="Choisir un temps"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            datetimeInput: {
              borderColor : "gray",
              alignItems: "flex-start",
              borderWidth: 0,
              borderBottomWidth: 1,
            },
            placeholderText: {
              fontSize: 15,
              color: "gray"
            },
            dateText: {
              fontSize: 17,
            }
          }}
       
        />*/}

       
   
 

<DatePicker
          style={styles.datePickerStyle}
          date={date_heure}
          mode="date"
          placeholder="Choisir une date"
          format="DD/MM/YYYY"
          minDate="01-01-2022"
          maxDate="01-01-2030"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor : "gray",
              alignItems: "flex-start",
              borderWidth: 0,
              borderBottomWidth: 1,
            },
            placeholderText: {
              fontSize: 15,
              color: "gray"
            },
            dateText: {
              fontSize: 17,
            }
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />








             



{/*<View style={{
    flexDirection:'row',
    alignItems:"center",
    marginHorizontal:25,
    borderWidth:2,
    marginTop:30,
    paddingHorizontal:10,
    borderColor:"#4A919E",
    borderRadius:15,
    paddingVertical:2,
    width:250
}

}>
    <TextInput  style={{paddingHorizontal:10 , color:'black'}} 
    placeholder={'Marque de la véhicule'}
    placeholderTextColor={'grey'}
    onChangeText={text => setMarque(text)} />

</View>*/}





<Picker
        selectedValue={Nature_vehicule}
          style={{ height: 30, width: 250 }}
          //mode={"dialog"}
        onValueChange={(itemValue) => setNatureVehicule(itemValue)}
            mode="dropdown"
          
        >
         
         <Picker.Item label="Nature de véhicule" value={null} style={{ display : "none" }}/>
          <Picker.Item label="Voiture" value="Voiture" />
          <Picker.Item label="Tracteur" value="Tracteur" />
          <Picker.Item label="Camion" value="Camion" />
          <Picker.Item label="Taxi" value="Taxi" />
          <Picker.Item label="Minibus" value="Minibus" />
          <Picker.Item label="buse" value="buse" />
        </Picker>

<Picker
        selectedValue={marque_vehicule}
          style={{ height: 30, width: 250 }}
          //mode={"dialog"}
        onValueChange={(itemValue) => setMarque(itemValue)}
            mode="dropdown"
          
        >
         
         <Picker.Item label="modèles de véhicule" value={null} style={{ display : "none" }}/>
          <Picker.Item label="Peugeot" value="Peugeot" />
          <Picker.Item label="BMW" value="BMW" />
          <Picker.Item label="Polo" value="Polo" />
          <Picker.Item label="Polo" value="Polo" />
          
        </Picker>
      




                <TouchableOpacity style={styles.btnLogin} onPress={() => {
                    addReservatoin();
                }}>
                    <Text style={styles.TextBtn}>Reserver</Text>
                </TouchableOpacity>
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
        width: 250,
        height: 45,
        borderRadius: 20,
        backgroundColor: '#4A919E',
        justifyContent: 'center',
        marginHorizontal:25,
  
    marginTop:30,
    paddingHorizontal:10,
        alignItems: 'center',
       
        marginBottom:30
    },
    TextBtn: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight:'bold'
    },
    link: {
        color: 'blue',
    },
    input: {
        width: 300,
        height: 45,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 15,
        fontSize: 10,
        paddingLeft: 45,
        backgroundColor: '#f5f5f5',
        color: 'black',
        marginHorizontal: 15,
        alignSelf: 'center',
        alignItems: 'center',
        borderBottomColor: "black",

    },
    logoContainer: {
        alignItems: 'center'
    },
    btnEye: {

        top: 17,
        right: 60,
    }
    ,
    action: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "grey",
    
        marginBottom:30,
        marginLeft:10,
        marginRight:10
      },
      textInput: {
        flex: 1,
       
       
        color: "gray"
      },
   
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
        width: 180,
        height: 180,
    alignSelf:'center',
    marginBottom:20
   
  
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        width: '100%',
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
    mapp: {
        width: 500,
        height: 180, 
    },
    title: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
      },
      datePickerStyle: {
        width: 300,
        alignSelf:'center',
        marginTop:50,
        marginBottom:20
      },
      text: {
        textAlign: 'left',
        width: 230,
        fontSize: 16,
        color : "#000"
      },
      container5: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#A8E9CA'
      },

});