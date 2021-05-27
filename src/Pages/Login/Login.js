import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

function Login(props) {
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");

  const fnloginValid = () => {
    if (uid === "" || password === "") {
      alert("아이디 또는 비밀번호를 입력하세요");
      return false;
    }
    return true;
  };
  const clickLogin = (e) => {
    e.preventDefault();
    if (fnloginValid()) {
      // fetch(`http://10.188.1.154:8080/login/processing`, {
      //   method: "POST",
      //   body: JSON.stringify({
      //     id: uid,
      //     password: password,
      //   }),
      // })
      //   .then((res) => res.json())
      //   .then((res) => console.log("login result: ", res));

      // console.log(uid, password);
      props.history.push("/board");
    }
  };
  return (
    <Wrap>
      <LoginForm>
        <Inputs>
          <input
            type="text"
            placeholder="아이디"
            value={uid}
            onChange={({ target: { value } }) => setUid(value)}
          ></input>
          <input
            type="password"
            placeholder="패스워드"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          ></input>
        </Inputs>
        <Button onClick={clickLogin}>로그인</Button>
      </LoginForm>
    </Wrap>
  );
}
export default withRouter(Login);
const Wrap = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #d9e1e6;
`;
const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 80%;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
  }
`;

const Button = styled.div`
  width: 100%;
  padding: 15px;
  background-color: #ed1c24;
  color: white;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  border-radius: 10px;
`;
