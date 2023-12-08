import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function LoginFunc() {
  

  return (
    <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}/>
  );
}

export default function Login() {
  // 認証用のProviderにGCPのクライアントIDを設定
  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
      <LoginFunc />
    </GoogleOAuthProvider>
  );
}