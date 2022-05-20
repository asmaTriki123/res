/*import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, SafeAreaView, Image, TextInput, TouchableOpacity , ToastAndroid} from 'react-native';
import MapView ,{ PROVIDER_GOOGLE, Marker }from 'react-native-maps';




//import bgImage from './assets/logo.jpg'
import logo from '../assets/loggg.jpg'
import { Dimensions, input } from 'react-native-web';
import Icon from 'react-native-vector-icons/Ionicons'
import { Component } from 'react/cjs/react.production.min';
const { width: WIDTH } = Dimensions.get('window')
import * as ImagePicker from 'expo-image-picker';
import { StackActions } from '@react-navigation/native';
import { ErrorMessage } from 'formik';
import {Picker} from "@react-native-picker/picker";
//import {AuthContext} from '../contexte/AuthContext';
const Register = ({ navigation }) => {
  const [ville, setVille]  = useState('');
  const [Nom_station, setNom_station] = useState('');
  const [type_lavage, setType_lavage] = useState('');
  //const [ville, setVille] = useState('');
  const [adresse, setAdresse] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Role, setRole] = useState('')
  const [profileImage, setProfileImage] = useState('');
  const [progress, setProgress] = useState(0);

  const [mapRegion, setmapRegion] = useState({

    latitude: 36.8002068,
    longitude: 	10.1857757,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });



  onChangeValue = mapRegion =>{
    ToastAndroid.show(JSON.stringify(mapRegion), ToastAndroid.SHORT)
    setmapRegion({
      mapRegion
    })
 setLongitude(mapRegion.longitude);
 setLatitude(mapRegion.latitude);
  }
*/


  //  const {isLoading, register} = useContext(AuthContext);
  /*async function Add() {*/
    // const formData = new FormData()
    // formData.append("Nom_station", Nom_station)
    // formData.append("type_lavage", type_lavage)
    // formData.append("ville", ville)
    // formData.append("adresse", adresse)
    // formData.append("longitude", longitude)
    // formData.append("latitude", latitude)
    // formData.append("email", email)
    // formData.append("password", password)
    // formData.append("avatar", profileImage.splite[','][1])
    // formData.append("Role", "lavage")
/*
    fetch("http://192.168.1.15:3001/utilisateur/register", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: 
        JSON.stringify({
          
          Nom_station: Nom_station,
          type_lavage: type_lavage,
          ville: ville,
          adresse: adresse,
          longitude: longitude,
          latitude: latitude,
          email: email,
          password: password,
          Role: 'lavage',
          avatar: profileImage
        }),
    }).then(res => res.json())
      .then(async data => {
        if (data) {
          if (data.email != '' && data.password != '') {
            navigation.navigate('signin')
          }
        }
      })
      .catch(err => {
        console.log(err)
      });
  }

  const openImageLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }

    if (status === 'granted') {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });
      console.log({response: response})
      if (!response.cancelled) {
        setProfileImage(response.uri);
      }
    }
  };

  const uploadProfileImage = async () => {
    const formData = new FormData();
    formData.append('profile', {
      name: new Date() + '_profile',
      uri: profileImage,
      type: 'image/jpg',
    });

    try {
      const res = await station.post('/register', formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',

        },
      });

      if (res.data.success) {
        props.navigation.dispatch(StackActions.replace('StationProfile'));
      }
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <>
      {mapRegion != undefined?
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <ScrollView style={styles.scrollView}>
        <View style={{ alignItems: 'center', alignSelf: 'center' }}>
          <Text style={{ color: '#4A919E', fontWeight: 'bold', marginBottom: 20, fontSize: 20 }}>Register</Text>
        </View>
        <View style={styles.containerr}>
          <View>
            <TouchableOpacity
              onPress={openImageLibrary}
              style={styles.uploadBtnContainer}
            >
              {profileImage ? (
                <Image
                  source={{ uri: profileImage }}
                  style={{ width: '100%', height: '100%' }}
                />
              ) : (
                <Text style={styles.uploadBtn} onChangeText={(text) => setProfileImage(text)}>Upload Profile Image</Text>
              )}
            </TouchableOpacity>


          </View>

        </View>




        <View  >


          <TextInput
            style={styles.input}
            placeholder={'Nom station'}
            placeholderTextColor={'grey'}
            underLineColorAndroid='transparent'
            onChangeText={text => setNom_station(text)}
          />
        </View>
        <View  >


          <TextInput
            style={styles.input}
            placeholder={'Type lavage'}
            placeholderTextColor={'grey'}
            underLineColorAndroid='transparent'
            onChangeText={text => setType_lavage(text)}
          />
        </View>
        <View>


         {/* <TextInput
            style={styles.input}
            placeholder={'Ville'}
            placeholderTextColor={'grey'}
            underLineColorAndroid='transparent'
            onChangeText={text => setVille(text)}
          />
              </View>*//*
              <Picker
          selectedValue={ville}
          style={{ height: 50, width: 250 }}
          //mode={"dialog"}
          onValueChange={(itemValue) => setVille(itemValue)} 
          onChangeText={text => setVille(text)}
          mode="dropdown"
        >
         
          <Picker.Item label="asma" value="asma" />
          <Picker.Item label="amira" value="amira" />
          <Picker.Item label="nourhen" value="nourhen" />
          <Picker.Item label="oumaima" value="oumaima" />
         
        
        </Picker>
        </View>
        <View  >


          <TextInput
            style={styles.input}
            placeholder={'Adresse'}
            placeholderTextColor={'grey'}
            underLineColorAndroid='transparent'
            onChangeText={text => setAdresse(text)}
          />
        </View>

        <View  >


          <TextInput
            style={styles.input}
            placeholder={'logitude'}
            placeholderTextColor={'grey'}
            underLineColorAndroid='transparent'
            onChangeText={text => setLongitude(text)}
            defaultValue={`${longitude}`}
          />
        </View>
        <View  >


          <TextInput
            style={styles.input}
            placeholder={'latitude'}
            placeholderTextColor={'grey'}
            underLineColorAndroid='transparent'
            onChangeText={text => setLatitude(text)}
            defaultValue={`${latitude}`}
          />
        </View>
        <View  >


          <TextInput
            style={styles.input}
            placeholder={'Email'}
            placeholderTextColor={'grey'}
            underLineColorAndroid='transparent'
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View >

          <TextInput
            style={styles.input}
            placeholder={'Password'}
            placeholderTextColor={'grey'}
            secureTextEntry
            underLineColorAndroid='black'
            onChangeText={text => setPassword(text)}
            required
          />



        </View>

        <View style={styles.container}>
        <MapView
       // style={{ alignSelf: 'stretch', height: '10%'  , width: '30%'}}
        //region={mapRegion}
        style={styles.mapp}
       onRegionChangeComplete= {onChangeValue}
        provider={PROVIDER_GOOGLE}

     region= {{
       
        latitude: mapRegion.latitude,
        longitude: mapRegion.longitude,
        latitudeDelta:mapRegion.latitudeDelta,
        longitudeDelta:mapRegion.longitudeDelta,}}
  
      />
<View style={{top: '50%', left: '50%', marginLeft:-24,marginTop:-48,position:'absolute'}}>
          <Image style={{height:48, width:48}} source= {require('../assets/marque.png')}/>
        </View>

    </View>




        <TouchableOpacity style={styles.btnLogin} onPress={() => {
          Add();
        }}>
          <Text style={styles.TextBtn}>Register</Text>

        </TouchableOpacity>
        <View style={{
          flexDirection: 'row', marginTop: 20, marginBottom: 30, alignItems: 'center',
          alignSelf: 'center'
        }}>
          <Text>Already have an accoutn? </Text>
          <TouchableOpacity >
            <Text style={styles.link} onPress={() => navigation.navigate('signin')}>Login</Text>
          </TouchableOpacity>
        </View>



      </ScrollView>
    </SafeAreaView>
    :null}
    </>

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
  mapp: {
    alignSelf: 'stretch', 
    height: 200,
    width: 500,
   
  }

});
export default Register;*/

/*




import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, SafeAreaView, Image, TextInput, TouchableOpacity , ToastAndroid} from 'react-native';
import MapView ,{ PROVIDER_GOOGLE, Marker }from 'react-native-maps';
//import bgImage from './assets/logo.jpg'
import logo from '../assets/loggg.jpg'
import { Dimensions, input } from 'react-native-web';
import Icon from 'react-native-vector-icons/Ionicons'
import { Component } from 'react/cjs/react.production.min';
const { width: WIDTH } = Dimensions.get('window')
import * as ImagePicker from 'expo-image-picker';
import { StackActions } from '@react-navigation/native';
import { ErrorMessage } from 'formik';

import { useTheme } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import {Picker} from "@react-native-picker/picker";
//import {AuthContext} from '../contexte/AuthContext';
const Register = ({ navigation }) => {
  const [Nom_station, setNom_station] = useState('');
  const [type_lavage, setType_lavage] = useState('');
  const [ville, setVille] = useState('');
  const [adresse, setAdresse] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const [profileImage, setProfileImage] = useState('');
  
  const[error , setError]=useState(false);
  const [mapRegion, setmapRegion] = useState({

    latitude: 36.8002068,
    longitude: 	10.1857757,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  onChangeValue = mapRegion =>{
    //ToastAndroid.show(JSON.stringify(mapRegion), ToastAndroid.SHORT)
    setmapRegion({
      mapRegion
    })
 setLongitude(mapRegion.longitude);
 setLatitude(mapRegion.latitude);
  }
  //  const {isLoading, register} = useContext(AuthContext);




  const { colors } = useTheme();
  const [dataa, setDataa] = React.useState({
    
    
    secureTextEntry: true,
   
  });
  const updateSecureTextEntry = () => {
    setDataa({
      ...dataa,
      secureTextEntry: !dataa.secureTextEntry,
    });
  };
  async function Add() {
    if(!Nom_station  || !email || !password || !longitude ||!ville || !adresse || !latitude   || password.length<6){
      setError(true);
      return false;
        
    }
    // const formData = new FormData()
    // formData.append("Nom_station", Nom_station)
    // formData.append("type_lavage", type_lavage)
    // formData.append("ville", ville)
    // formData.append("adresse", adresse)
    // formData.append("longitude", longitude)
    // formData.append("latitude", latitude)
    // formData.append("email", email)
    // formData.append("password", password)
    // formData.append("avatar", profileImage.splite[','][1])
    // formData.append("Role", "lavage")

    fetch("http://192.168.1.15:3001/utilisateur/register", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: 
        JSON.stringify({
          
          Nom_station: Nom_station,
          type_lavage: type_lavage,
          ville: ville,
          adresse: adresse,
          longitude: longitude,
          latitude: latitude,
          email: email,
          password: password,
          Role: 'lavage',
          avatar: profileImage
        }),
    }).then(res => res.json())
      .then(async data => {
        if (data) {
          if (data.email != '' && data.password != '') {
            navigation.navigate('signin')
          }
        }
      })
      .catch(err => {
        console.log(err)
      });
  }

  const openImageLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }

    if (status === 'granted') {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });
      console.log({response: response})
      if (!response.cancelled) {
        setProfileImage(response.uri);
      }
    }
  };

  const uploadProfileImage = async () => {
    const formData = new FormData();
    formData.append('profile', {
      name: new Date() + '_profile',
      uri: profileImage,
      type: 'image/jpg',
    });

    try {
      const res = await station.post('/register', formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',

        },
      });

      if (res.data.success) {
        props.navigation.dispatch(StackActions.replace('StationProfile'));
      }
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <>
      {mapRegion != undefined?
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <ScrollView style={styles.scrollView}>
        <View style={{ alignItems: 'center', alignSelf: 'center' }}>
          <Text style={{ color: '#4A919E', fontWeight: 'bold', marginBottom: 20, fontSize: 20 }}>Register</Text>
        </View>
        <View style={styles.containerr}>
          <View>
            <TouchableOpacity
              onPress={openImageLibrary}
              style={styles.uploadBtnContainer}
            >
              {profileImage ? (
                <Image
                  source={{ uri: profileImage }}
                  style={{ width: '100%', height: '100%' }}
                />
              ) : (
                <Text style={styles.uploadBtn} onChangeText={(text) => setProfileImage(text)}>Cliquer pour choisir une image</Text>
              )}
            </TouchableOpacity>


          </View>

        </View>




        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Nom Station"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={text => setNom_station(text)}
          
          />
        
       
        </View>
           {error && !Nom_station &&<Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:10  ,fontWeight:'bold'}} > champ obligatoire *</Text>}
                             
      
           <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Type lavage"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={text => setType_lavage(text)}
          
          />
        
       
        </View>
          {error && !type_lavage &&<Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:10 , fontWeight:'bold'}} > champ obligatoire *</Text>}
    
     
          <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Ville"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={text => setVille(text)}
          
          />
        
       
        </View>
          {error && !ville &&<Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:10 , fontWeight:'bold'}} > champ obligatoire *</Text>}
     
        
          <View style={styles.action}>
         {/* <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Adresse"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={text => setAdresse(text)}
          
          />*/
        


 {/*<TextInput
   style={styles.input}
   placeholder={'Ville'}
   placeholderTextColor={'grey'}
   underLineColorAndroid='transparent'
   onChangeText={text => setVille(text)}
 />
     </View>*/}
     /*<Picker
 selectedValue={ville}
style={styles.pickerCustomeStyle}
 //style={{ height: 50, width: 250 }}
 //mode={"dialog"}
 onValueChange={(itemValue) => setVille(itemValue)} 
 onChangeText={text => setVille(text)}
 mode="dropdown"
>

 <Picker.Item label="asma" value="asma" />
 <Picker.Item label="amira" value="amira" />
 <Picker.Item label="nourhen" value="nourhen" />
 <Picker.Item label="oumaima" value="oumaima" />


</Picker>
</View>
        
       
        
         {error && !adresse &&<Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:10 , fontWeight:'bold'}} > champ obligatoire *</Text>}
     
      

        


        
        
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={text => setEmail(text)}
          
          />
        
           
      
        </View>
         {error && !email &&<Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:10 , fontWeight:'bold'}} > champ obligatoire *</Text>}
    
      
         <View style={styles.action}>
          <Feather name="lock" color={colors.text} size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            secureTextEntry={dataa.secureTextEntry ? true : false}
       
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={text => setPassword(text)}
          />
          
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {dataa.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
{error && !password &&<Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:10 , fontWeight:'bold'}} > champ obligatoire *</Text>}
{error && password.length<6 && <Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:10 , fontWeight:'bold'}} > Mot de passe doit contenir minimum 6 caractére</Text>}
<View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="longitude"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={text => setLongitude(text)}
            defaultValue={`${longitude}`}
          
          />
        
       
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Latitude"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={text => setLatitude(text)}
            defaultValue={`${latitude}`}
          
          />
        
       
        </View>
        <View style={styles.container}>
        <MapView
       // style={{ alignSelf: 'stretch', height: '10%'  , width: '30%'}}
        //region={mapRegion}
        style={styles.mapp}
       onRegionChangeComplete= {onChangeValue}
        provider={PROVIDER_GOOGLE}

     region= {{
       
        latitude: mapRegion.latitude,
        longitude: mapRegion.longitude,
        latitudeDelta:mapRegion.latitudeDelta,
        longitudeDelta:mapRegion.longitudeDelta,}}
  
      />
<View style={{top: '50%', left: '50%', marginLeft:-24,marginTop:-48,position:'absolute'}}>
          <Image style={{height:48, width:48}} source= {require('../assets/marque.png')}/>
        </View>

    </View>




        <TouchableOpacity style={styles.btnLogin} onPress={() => {
          Add();
        }}>
          <Text style={styles.TextBtn}>Register</Text>

        </TouchableOpacity>
        <View style={{
          flexDirection: 'row', marginTop: 20, marginBottom: 30, alignItems: 'center',
          alignSelf: 'center'
        }}>
          <Text>Already have an accoutn? </Text>
          <TouchableOpacity >
            <Text style={styles.link} onPress={() => navigation.navigate('signin')}>Login</Text>
          </TouchableOpacity>
        </View>



      </ScrollView>
    </SafeAreaView>
    :null}
    </>

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
    height: 140,
    width: 140,
    borderRadius: 125 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderColor: '#649ea9',
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
    alignSelf: 'stretch', 
    height: 200,
    width: 500,
   
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 100,
    paddingBottom: 40,
    marginTop:10
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#4A919E",
    fontWeight: "bold",
    fontSize: 25,
    alignSelf:'center'
  },
  text_footer: {
    color: "#4A919E",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#4A919E",

    marginBottom:30,
    marginLeft:15,
    marginRight:15
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#4A919E",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
   
    paddingLeft: 10,
    color: "#4A919E",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 12,
  },
  button: {
    alignItems: "center",
    marginTop: 40,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  pickerCustomeStyle: {
    height: 50,
    width: "80%",
    color: "green",
    justifyContent: "center"
    }

});
export default Register;*/





import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, SafeAreaView, Image, TextInput, TouchableOpacity , ToastAndroid, Alert} from 'react-native';
import MapView ,{ PROVIDER_GOOGLE, Marker }from 'react-native-maps';
//import bgImage from './assets/logo.jpg'
import logo from '../assets/loggg.jpg'
import { Dimensions, input } from 'react-native-web';
import Icon from 'react-native-vector-icons/Ionicons'
import { Component } from 'react/cjs/react.production.min';
const { width: WIDTH } = Dimensions.get('window')
import * as ImagePicker from 'expo-image-picker';
import { StackActions } from '@react-navigation/native';
import { ErrorMessage } from 'formik';

import { useTheme } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import {Picker} from "@react-native-picker/picker";
//import {AuthContext} from '../contexte/AuthContext';
const Register = ({ navigation }) => {
  const [Nom_station, setNom_station] = useState('');
  const [type_lavage, setType_lavage] = useState();
  const [ville, setVille] = useState();
  const [adresse, setAdresse] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const [profileImage, setProfileImage] = useState('');
  
  const[error , setError]=useState(false);
  const [mapRegion, setmapRegion] = useState({

    latitude: 36.8002068,
    longitude: 	10.1857757,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  onChangeValue = mapRegion =>{
    //ToastAndroid.show(JSON.stringify(mapRegion), ToastAndroid.SHORT)
    setmapRegion({
      mapRegion
    })
 setLongitude(mapRegion.longitude);
 setLatitude(mapRegion.latitude);
  }
  //  const {isLoading, register} = useContext(AuthContext);




  const { colors } = useTheme();
  const [dataa, setDataa] = React.useState({
    
    
    secureTextEntry: true,
   
  });
  const updateSecureTextEntry = () => {
    setDataa({
      ...dataa,
      secureTextEntry: !dataa.secureTextEntry,
    });
  };
  async function Add() {
    console.log({ ville });
    if(!Nom_station  || !email || !password || !longitude ||!ville || !adresse || !latitude   || password.length<6 || !type_lavage){
      setError(true);
      return false;
        
    }
    // const formData = new FormData()
    // formData.append("Nom_station", Nom_station)
    // formData.append("type_lavage", type_lavage)
    // formData.append("ville", ville)
    // formData.append("adresse", adresse)s
    // formData.append("longitude", longitude)
    // formData.append("latitude", latitude)
    // formData.append("email", email)
    // formData.append("password", password)
    // formData.append("avatar", profileImage.splite[','][1])
    // formData.append("Role", "lavage")

    fetch("http://192.168.1.15:3001/utilisateur/register", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: 
        JSON.stringify({
          
          Nom_station: Nom_station,
          type_lavage: type_lavage,
          ville: ville,
          adresse: adresse,
          longitude: longitude,
          latitude: latitude,
          email: email,
          password: password,
          Role: 'lavage',
          avatar: profileImage
        }),
    }).then(res => res.json())
      .then(async data => {
        if (data) {
          if (data.email != '' && data.password != '') {
            navigation.navigate('signin')
          }
        }
      })
      .catch(err => {
        console.log(err)
      });
  }

  const openImageLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }

    if (status === 'granted') {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });
      console.log({response: response})
      if (!response.cancelled) {
        setProfileImage(response.uri);
      }
    }
  };

  const uploadProfileImage = async () => {
    const formData = new FormData();
    formData.append('profile', {
      name: new Date() + '_profile',
      uri: profileImage,
      type: 'image/jpg',
    });

    try {
      const res = await station.post('/register', formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',

        },
      });

      if (res.data.success) {
        props.navigation.dispatch(StackActions.replace('StationProfile'));
      }
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <>
      {mapRegion != undefined?
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <ScrollView style={styles.scrollView}>
        <View style={{ alignItems: 'center', alignSelf: 'center' }}>
          <Text style={{ color: '#427CA2', fontWeight: 'bold', marginBottom: 30, fontSize: 22 , marginTop: 20}}>Inscription</Text>
        </View>
        <View style={styles.containerr}>
          <View>
            <TouchableOpacity
              onPress={openImageLibrary}
              style={styles.uploadBtnContainer}
            >
              {profileImage ? (
                <Image
                  source={{ uri: profileImage }}
                  style={{ width: '100%', height: '100%' }}
                />
              ) : (
                <Text style={styles.uploadBtn} onChangeText={(text) => setProfileImage(text)}>Cliquer pour choisir une image</Text>
              )}
            </TouchableOpacity>


          </View>

        </View>




        <View style={styles.action}>
         {/* <FontAwesome name="user-o" color={colors.text} size={20} />*/}
          <TextInput
            placeholder="Nom Station"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {marginTop: 30,
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={text => setNom_station(text)}
          
          />
        
       
        </View>
           {error && !Nom_station &&<Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:10  ,fontWeight:'bold'}} > champ obligatoire *</Text>}
                             
      
          {/* <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Type lavage"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={text => setType_lavage(text)}
          
          />
        
       
        </View>
          {error && !type_lavage &&<Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:10 , fontWeight:'bold'}} > champ obligatoire *</Text>}
          */}
       
          
        
          <View style={styles.action}>
          {/*<FontAwesome name="user-o" color={colors.text} size={20} />*/}
          <TextInput
            placeholder="Adresse"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={text => setAdresse(text)}
          
          />
        
       
        </View>
         {error && !adresse &&<Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:10 , fontWeight:'bold'}} > champ obligatoire *</Text>}
     
      

        


        
        
        <View style={styles.action}>
         {/* <FontAwesome name="user-o" color={colors.text} size={20} />*/}
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={text => setEmail(text)}
          
          />
        
           
      
        </View>
         {error && !email &&<Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:10 , fontWeight:'bold'}} > champ obligatoire *</Text>}
    
      
         <View style={styles.action}>
         {/* <Feather name="lock" color={colors.text} size={20} />*/}
          <TextInput
            placeholder="MotPasse"
            placeholderTextColor="#666666"
            secureTextEntry={dataa.secureTextEntry ? true : false}
       
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={text => setPassword(text)}
          />
          
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {dataa.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
{error && !password &&<Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:10 , fontWeight:'bold'}} > champ obligatoire *</Text>}
{error && password.length<6 && <Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:10 , fontWeight:'bold'}} > Mot de passe doit contenir minimum 6 caractére</Text>}
<View style={styles.action}>
         {/* <FontAwesome name="user-o" color={colors.text} size={20} />*/}
          <TextInput
            placeholder="longitude"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={text => setLongitude(text)}
            defaultValue={`${longitude}`}
          
          />
        
       
        </View>
        <View style={styles.action}>
         {/* <FontAwesome name="user-o" color={colors.text} size={20} />*/}
          <TextInput
            placeholder="Latitude"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={text => setLatitude(text)}
            defaultValue={`${latitude}`}
          
          />
        
       
        </View>


        <View style={styles.ac}>
            <View>
        <Picker
          selectedValue={ville}
          style={{ height: 30, width: 200 }}
          //mode={"dialog"}
          onValueChange={(itemValue) => setVille(itemValue)}
            mode="dropdown"
          
        >
         
         <Picker.Item label=" ville" value={null} style={{ display : "none" }}/>
          <Picker.Item label="Ariana" value="	Ariana" />
          <Picker.Item label="Béja" value="Béja" />
          <Picker.Item label="Ben Arous" value="Ben Arous" />
          <Picker.Item label="Bizerte" value="Bizerte" />
          <Picker.Item label="Gabès" value="Gabès" />
          <Picker.Item label="Gafsa" value="Gafsa" />
          <Picker.Item label="Jendouba" value="Jendouba" />
          <Picker.Item label="Kairouan" value="Kairouan" />
          <Picker.Item label="Kasserine" value="Kasserine" />
          <Picker.Item label="Kébili" value="Kébili" />
          <Picker.Item label="Le Kef" value="Le Kef" />
          <Picker.Item label="Mahdia" value="Mahdia" />
          <Picker.Item label="La Manouba" value="La Manouba" />
          <Picker.Item label="Médenine" value="Médenine" />
          <Picker.Item label="Monastir" value="Monastir" />
          <Picker.Item label="Nabeul" value="Nabeul" />
          <Picker.Item label="Sfax" value="Sfax" />
          <Picker.Item label="Sidi Bouzid" value="Sidi Bouzid" />
          <Picker.Item label="Siliana" value="Siliana" />
          <Picker.Item label="Sousse" value="Sousse" />
          <Picker.Item label="Tataouine" value="Tataouine" />
          <Picker.Item label="Tozeur" value="Tozeur" />
          <Picker.Item label="Tunis" value="Tunis" />
          <Picker.Item label="Zaghouan" value="Zaghouan" />
        </Picker>{error && !ville &&<Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:10 , fontWeight:'bold'}} > champ obligatoire *</Text>}
        </View>
        <View>
        <Picker
          selectedValue={type_lavage}
          style={{ height: 30, width: 200 }}
          //mode={"dialog"}
          onValueChange={(itemValue) => setType_lavage(itemValue)}
          placeholder='select me '
                                mode="dropdown"
        >
         <Picker.Item label="type lavage" value={null} style={{ display : "none" }}/>
          <Picker.Item label="Lavage portique à brosses classiques" value="Lavage portique à brosses classiques" />
          <Picker.Item label="Lavage portique haute pression sans brosses" value="Lavage portique haute pression sans brosses" />
          <Picker.Item label="Lavage à sec (sans eau)" value="Lavage à sec (sans eau)" />
          <Picker.Item label="Nettoyage automatique" value="Nettoyage automatique" />
         
          </Picker>{error && !type_lavage &&<Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:10 , fontWeight:'bold'}} >champ obligatoire *</Text>}</View>
            
    </View>

          











        <View style={styles.container}>
        <MapView
       // style={{ alignSelf: 'stretch', height: '10%'  , width: '30%'}}
        //region={mapRegion}
        style={styles.mapp}
       onRegionChangeComplete= {onChangeValue}
        provider={PROVIDER_GOOGLE}

     region= {{
       
        latitude: mapRegion.latitude,
        longitude: mapRegion.longitude,
        latitudeDelta:mapRegion.latitudeDelta,
        longitudeDelta:mapRegion.longitudeDelta,}}
  
      />
<View style={{top: '50%', left: '50%', marginLeft:-24,marginTop:-48,position:'absolute'}}>
          <Image style={{height:48, width:48}} source= {require('../assets/marque.png')}/>
        </View>

    </View>




        <TouchableOpacity style={styles.btnLogin} onPress={() => {
          Add();
        }}>
          <Text style={styles.TextBtn}>Register</Text>

        </TouchableOpacity>
        <View style={{
          flexDirection: 'row', marginTop: 20, marginBottom: 30, alignItems: 'center',
          alignSelf: 'center'
        }}>
          <Text>Vous avez déjà un compte?</Text>
          <TouchableOpacity >
            <Text style={styles.link} onPress={() => navigation.navigate('signin')}>Login</Text>
          </TouchableOpacity>
        </View>



      </ScrollView>
    </SafeAreaView>
    :null}
    </>

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
    backgroundColor: '#427CA2',
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
    color: '#427CA2',
  },
  uploadBtnContainer: {
    height: 125,
    width: 125,
    borderRadius: 125 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderColor: '#427CA2',
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
    alignSelf: 'stretch', 
    height: 250,
    width: 500,
   
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 100,
    paddingBottom: 40,
    marginTop:10
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#4A919E",
    fontWeight: "bold",
    fontSize: 25,
    alignSelf:'center'
  },
  text_footer: {
    color: "#4A919E",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 0.8,
    borderBottomColor: "#427CA2",

    marginBottom:30,
    marginLeft:15,
    marginRight:15
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#4A919E",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
   
    paddingLeft: 10,
    color: "#4A919E",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 12,
  },
  button: {
    alignItems: "center",
    marginTop: 40,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
ac : {
  width: 20,
  height: 50,
  flexDirection: "row",
  marginBottom:30,
    marginLeft:15,
    marginRight:15
}
});
export default Register;