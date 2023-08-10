import { atom } from "recoil";

export const userState = atom({
  key: "userState", //システム全体で、この State を参照できる一意の key。慣習的にファイル名と同じにする
  default: { isAdmin: false } // isAdmin の初期値
});
