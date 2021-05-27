import React, { Component, useEffect, useState } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

function Board(props) {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetch("/data/contentsList.json")
      // fetch(`http://10.188.1.154:8080/board`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setContents(res.result);
      });
  }, []);

  const fnDetailContent = (id) => {
    props.history.push(`/board/${id}`);
  };

  return (
    <>
      <BoardForm>
        <Header>
          <Button>글쓰기</Button>
        </Header>
        <BoardList>
          <thead>
            <tr>
              <th>No.</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((content, idx) => (
              <tr key={idx} onClick={() => fnDetailContent(content.id)}>
                <td>{content.id}</td>
                <td>{content.title}</td>
                <td>{content.name}</td>
                <td>{content.regDate}</td>
              </tr>
            ))}
          </tbody>
        </BoardList>
      </BoardForm>
    </>
  );
}

export default withRouter(Board);

const BoardForm = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #d9e1e6;
  padding: 0px 40px;
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 10px 0px;
`;

const BoardList = styled.table`
  min-width: 800px;
  width: 100%;
  background-color: white;
  th,
  td {
    border-bottom: 1px solid #444444;
    padding: 10px;
    text-align: center;
  }
  th {
    color: #ed1c24;
    font-weight: 700;
  }

  tbody tr:hover {
    background-color: #ffb7b9;
  }
`;
const Button = styled.div`
  padding: 10px;
  background-color: #ed1c24;
  color: white;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
  border-radius: 10px;
  font-weight: 700;
`;
