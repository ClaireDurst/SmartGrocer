import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
 
const responseGoogle = (response) => {
  console.log(response);
}
 
const GoogleLog = () => 
<GoogleLogin
    clientId={"925069312669-monad75p3ihtrt5kob0ljdsfvr6234h5.apps.googleusercontent.com"}
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
>
    <span> Login with Google</span>
  </GoogleLogin>

export default GoogleLog;

// ReactDOM.render(
//   <GoogleLogin
//     clientId="925069312669-monad75p3ihtrt5kob0ljdsfvr6234h5.apps.googleusercontent.com"
//     buttonText="Login"
//     onSuccess={responseGoogle}
//     onFailure={responseGoogle}
//   />,
//   document.getElementById('googleButton')
// );