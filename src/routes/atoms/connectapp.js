import { atom } from "recoil";

export const isUserLoggedInAtom = atom({
  key: "UserLoggedIn",
  default: false,
  effects_UNSTABLE: [
    ({ onSet, setSelf }) => {
      const storedData = localStorage.getItem("AuthStatus");
      if (storedData != null) {
        setSelf(JSON.parse(storedData));
      }
      onSet((newStatus) => {
        localStorage.setItem("AuthStatus", JSON.stringify(newStatus));
      });
    },
  ],
});