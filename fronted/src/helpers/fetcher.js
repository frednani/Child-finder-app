import AsyncStorage from "@react-native-async-storage/async-storage";
import Fetch from "node-fetch";
import env from '../helpers/env'

const { REACT_APP_API_URL } = env;

export const controller = new AbortController()

export const Fetcher = async (Body, url, method) => {


  const {phone_number,password}=Body;
  

  const { signal } = controller
  // const phone_number = await AsyncStorage.getItem("phone_number")
  // const password = await AsyncStorage.getItem("password")

  console.log("phone in fectch:",REACT_APP_API_URL);
  
  const headers = {
    "phone_number":"0789394104",
    "password":"Asd1234!",
    "Accept": "application/json",
    "Content-Type": "application/json",

  }
  console.log("headers:",headers);

  const response= await fetch("http://192.168.0.100:2000"+url, {
  method,
  headers,
  body: JSON.stringify(Body)
});

  // const response = await Fetch(REACT_APP_API_URL+url, {
  //   headers,
  //   method,
  //   signal,
  //   body:JSON.stringify(Body),
  // })
  
  console.log("data:",response.status)
  return response.json();
};