import { Fetcher } from '../helpers/fetcher'
import axios from 'axios';

export const createPost = async (creds) => {
  console.log("our crediantls"+creds.name);
  return await Fetcher(
      creds,
      '/posts',
      "POST"
    );
}
export const getAllPost = async(creds) => {
   fetch('http://192.168.0.100:2000/posts')
    .then(resp => resp.json())
    .then((res) => {
      const [data]=res
      console.log("datas :"+data)
    
      // res.data.map( item=> console.log("my items:"+JSON.parse(item)));
      
      
      return res;
    })
    .catch((error) => {
      console.log(creds);
      console.error(error);
      
    });
  // return   axios.get(`http://192.168.0.100:2000/posts`)
  // .then(res=>{
  //   console.log("my data"+res.data)
  //   return res.data;
  // })
    
};
//
// export const getAllPost = async (creds) => {
//   return await   fetch("http://192.168.0.100:2000/posts", {
//     "",
//     headers,
// } 
  
  
//   // Fetcher(
//   //     creds,
//   //     '/posts',
//   //     "GET"
//   //   );
// }

//
export const ChangeStatus = async (id,body) => {
  return await Fetcher(
      body,
      `/posts/${id}`,
      "PATCH"
    );
}


