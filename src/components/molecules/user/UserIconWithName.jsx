// molecules: atomを小さい単位で組み合わせて一つのまとまりとしたもの
import React, { memo } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil"; // 　stateの更新変数は必要なく、ただ stateを参照するためだけの場合 useRecoilValueを使う
import { userState } from "../../../store/userState"; // store/userState.js で設定した key

export const UserIconWithName = memo(({ image, name }) => {
  // useRecoilValue の引数に userState.jsで設定した keyを渡し、値を参照する為だけの state を作成
  const userInfo = useRecoilValue(userState);
  console.log(userInfo); // Object { isAdmin: true/false }

  // UserContextから取り出した userInfoが存在していたら、入っている値をそのまま返し、存在しなかったら falseを返す
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}{" "}
      {/* isAdminが trueだったら編集ボタンを表示 */}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
