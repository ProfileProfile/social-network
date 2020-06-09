import { Gleb } from "assets/avatars/Gleb";
import { Michael } from "assets/avatars/Michael";
import { Ilya } from "assets/avatars/Ilya";

export const state = {
  dialogsPage: {
    interlocutor: [
      { id: 1, name: "Nikita" },
      { id: 2, name: "Nikitos" },
      { id: 3, name: "Asos" },
      { id: 4, name: "Nik" },
      { id: 5, name: "Nikitochka" },
    ],
    messages: [
      { id: 1, text: "Hi! how are you?" },
      { id: 2, text: "what`s up? are you busy?" },
      { id: 3, text: "i don`t belive you!" },
    ],
  },
  profilePage: {
    postsText: [
      { id: 1, text: "it`s my first comment!" },
      { id: 2, text: "Fk off dude!" },
    ],
  },
  navigationBlock: {
    sideblockFriends: [
      { id: 3, name: "Илья", surname: "Гусельников", avatar: Ilya },
      { id: 1, name: "Михаил", surname: "Белослудцев", avatar: Michael },
      { id: 52, name: "Глеб", surname: "Межин", avatar: Gleb },
    ],
  },
};
