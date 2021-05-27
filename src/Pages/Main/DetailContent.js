import React, { Component, useEffect, useState } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

function DetailContent(props) {
  const [modValid, setModValid] = useState(false);
  useEffect(() => {
    console.log(props.match.params.id);
    const id = props.match.params.id;
    // fetch(`${BACKAPI}/board/${id}`, {
    //   method: "POST",
    // })
    //   .then((res) => res.json())
    //   .then((res) => {});
  }, []);

  const fnModContent = (mod) => {
    if (mod === "m") {
      setModValid(true);
    } else if (mod === "s") {
      setModValid(false);
    }
  };

  return (
    <>
      <BoardForm>
        <Header>
          <Button
            className={modValid && "none"}
            onClick={() => fnModContent("m")}
          >
            글수정
          </Button>{" "}
          <Button
            className={!modValid && "none"}
            onClick={() => fnModContent("s")}
          >
            저장
          </Button>
        </Header>
        <BoardList>
          <thead>
            <tr>
              <th>
                [롯데GRS] ESG 경영 위한 롯데리아 ‘드링킹리드’ 도입 ‘일회용품
                줄이기 위한 No!
              </th>
              <th width="200px">작성자 : GRS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2">
                <textarea rows="10" disabled={!modValid}>
                  [롯데GRS] ESG 경영 위한 롯데리아 ‘드링킹리드’ 도입 ‘일회용품
                  줄이기 위한 No! 스트로우’롯데GRS, ESG 경영 위한 롯데리아
                  ‘드링킹리드’ 도입- 2018년 엔제리너스 매장 국내 첫 도입 이후
                  롯데리아 ‘드링킹리드’ 도입- 플라스틱 빨대 연간 소비량 77t
                  가량, 드링킹리드 운영으로 연간 20t 가량 절감 예상
                  롯데GRS(대표이사 차우철)가 2018년 일회용품 줄이기를 위해 국내
                  처음으로 커피 전문점 브랜드 엔제리너스에 도입한 빨대 없이
                  음용이 가능한 ‘드링킹리드’를 롯데
                </textarea>
              </td>
            </tr>
          </tbody>
        </BoardList>
      </BoardForm>
    </>
  );
}

export default withRouter(DetailContent);

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
  }
  th {
    color: #ed1c24;
    font-weight: 700;
  }

  textarea {
    width: 100%;
    border: 0;
    overflow: auto;
    resize: none;
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
  margin-left: 10px;
  &.none {
    display: none;
  }
`;
