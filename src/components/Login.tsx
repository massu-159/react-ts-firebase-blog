import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../firebase';
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }: {setIsAuth: React.Dispatch<React.SetStateAction<string | null>>}) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    // Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage["isAuth"] = true;
      setIsAuth("true");
      navigate("/");
    });

  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login