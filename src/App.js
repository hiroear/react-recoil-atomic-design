import { Router } from "./router/Router";
import { RecoilRoot } from "recoil";
import "./styles.css";

export default function App() {
  return (
    // recoilの <RecoilRoot> で囲うことで providerの contextのように、その配下では recoilの stateが参照できるようになる
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}
