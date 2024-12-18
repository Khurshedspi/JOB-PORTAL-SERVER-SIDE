/**
 * 1. After successfull login: generate a jwt token; 
 * npm : josonwebtoken, cookie-parser
 * jwt.sign(payload, secret,{expireIn: 'id'})
 * 
 * 2. Send token (generated in the server side ) to the client side 
 * 
 * local-storage ----> easier
 * httpOnly cookies ---> better
 * 
 * 
 * 3. for sensitive or secure or private or protected apis: send token to the server side
 * 
 * on the server side : 
 * app.use(cors({
   origin: ['http://localhost:5173'],
   credentials: true
 }));`

 in the client side: 
use axios get, post ,delete, patch for secure apis and must use: {withCredentials: true}

//   signInUser(email, password)
//     .then(result =>{
//       console.log("sign in", result.user.email);
//       const user = {email: email}
      axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
//       .then(res =>{
//         console.log(res.data);
//       })
//       // navigate(from);
//     })
//     .catch(error =>{
//       console.log(error);
//     })
//   };
 * 
 * 4. validate the token in the server side: 
 * if valid: Provide data 
 * if not valid: logOut
 */
