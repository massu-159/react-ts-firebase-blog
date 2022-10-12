import React from 'react'
import { Link } from "react-router-dom";
import './Navber.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';



const Navber = ({ isAuth }:{isAuth: string | null}) => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
        ホーム
      </Link>
      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon>
          ログイン
        </Link>
      ) : (
        <>
          <Link to="/logout">
            <FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon>
            ログアウト
          </Link>
          <Link to="/createpost">
            <FontAwesomeIcon icon={faFilePen}></FontAwesomeIcon>
            投稿
          </Link>
        </>
      )}
    </nav>
  )
}

export default Navber