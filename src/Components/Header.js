import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

function Header(props) {
  const fnToMain = () => {
    props.history.push(`/board`);
  };
  const fnLogout = () => {
    // fetch(`http://10.188.1.154:8080/logout`, {
    //   method: "GET",
    //   body: JSON.stringify({
    //     id: "",
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    props.history.push(`/`);
    // });
  };
  return (
    <Headers>
      <Logo onClick={fnToMain}>V커머스TFT</Logo>
      <LoginStatus>
        <div>
          <span>최송희 님</span>
        </div>
        <Button onClick={fnLogout}>로그아웃</Button>
      </LoginStatus>
    </Headers>
  );
}

export default withRouter(Header);

const Headers = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  top: 0;
  z-index: 99;
  background-color: #ed1c24;
  height: 50px;
  color: white;
`;

const Logo = styled.div``;

const LoginStatus = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  display: flex;
  padding: 5px 10px;
  margin-left: 20px;
  border-radius: 10px;
  background-color: white;
  color: #ed1c24;
  cursor: pointer;
`;
