// pages: 最終地点、ページを構成する全ての要素を集めたファイル
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useSetRecoilState } from "recoil"; // stateの値の参照はせず、 stateの set関数のみが必要なときは useSetRecoilState
import { userState } from "../../store/userState"; // store/userState.js で設定した key

export const Top = () => {
  const history = useHistory();

  // isAdminを更新したいので 更新関数の setUserInfoを取り出す。useSetRecoilStateの引数には userState.js で設定した key
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true }); // setUserInfoを更新してページ遷移
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
