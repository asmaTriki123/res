import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  ScrollView,
  Alert,
  Image,
  Dimensions
} from "react-native";
const {width:WIDTH} =Dimensions.get('window')
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";
 import login from '../../assets/lo.png'
import { useTheme } from "react-native-paper";
import axios from "axios";
import { storeClientData  } from "../../utils/AsyncStorageClient";

const LoginC = ({ navigation }) => {
  
  const [data, setData] = React.useState({
    Adr: "",
    MPass: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { colors } = useTheme();

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        Adr: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        Adr: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        MPass: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        MPass: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

 const loginHandle =  () => {
    axios
      .post("http://192.168.1.15:3001/utilisateur/login", {
        Adr: data.Adr,
        MPass: data.MPass,
       
      })
      .then((res) => {
        storeClientData(res.data)
        
            navigation.navigate('espaceClient')  
           
      })
     .catch((err)=>{
       alert('probleme de connexion')
       console.log(err)})
       
      
  };

  return (
    <View style={styles.container}>
    <ScrollView   showsVerticalScrollIndicator={false}
    >
          
      <StatusBar backgroundColor="white"  />
     
      
      <Animatable.View
        animation="fadeInUpBig"

        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
            marginLeft:10,
            marginRight:10,
            textAlign: 'center',
          marginTop:150 ,
            
          },
        ]}
      >
        {/*<Text style={styles.text_header}>aaa</Text>*/}
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              fontSize:15,
             marginLeft:9,
            },
          ]}
        >
          Adresse
        </Text>
        <View style={styles.action}>
         <FontAwesome name="user-o"  style = {[
           
         ]}  color={colors.text} size={20} />
          <TextInput
            placeholder="Adresse client lavage"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
                 marginTop: 5,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username doit contenir minimum 3 caractéres
            </Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              marginTop: 35,
              fontSize:15,
              marginLeft:9,
            },
            
          ]}
        >
         Motpasse
        </Text>
        <View style={styles.action}>
         {/* <Feather name="lock" color={colors.text} size={20} />*/}
          <TextInput
            placeholder="Motpasse client lavage"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: colors.text,
                marginTop: 5,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password doit contenir minimum 6 caractéres
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={{ color: "#CE6A6B", marginTop: 15 }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              loginHandle();
            }}
            
          >
            <LinearGradient
              colors={["#007198", "#12769E"]}
              style={styles.signIn}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#fff",
                  },
                ]}
              >
                Sign In
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={() => navigation.navigate('registerC')}
            style={[
              styles.signIn,
              {
                borderColor: "#12769E",
                borderWidth: 1,
                marginTop: 30,
                marginBottom:50,
              
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#12769E",

                },
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default LoginC;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#649ea9",
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
    
    backgroundColor: "#FFFFFF",
   
    
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    alignSelf:'center',
    marginBottom:40,
    marginTop:20
  },
  text_footer: {
    color: "#12769E",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#4A919E",
    paddingBottom: 5,
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
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#003C57",
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
    //borderRadius: 10,
    
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },

});