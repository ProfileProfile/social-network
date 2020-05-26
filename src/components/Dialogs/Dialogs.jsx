import React from "react";
import { Interlocutor } from "./Interlocutor";
import { Messages } from "./Messages";

import s from "./Dialogs.module.scss";

export const Dialogs = () => {
  const interlocutor = [
    { id: 1, name: "Nikita" },
    { id: 2, name: "Nikitos" },
    { id: 3, name: "Asos" },
    { id: 4, name: "Nik" },
    { id: 5, name: "Nikitochka" },
  ];

  const messages = [
    { id: 1, name: "Hi! how are you?" },
    { id: 2, name: "what`s up? are you busy?" },
    { id: 3, name: "i don`t belive you!" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__names}>
        <Interlocutor name="Nikita" id="1" />
        <Interlocutor name="Nikitos" id="2" />
        <Interlocutor name="Asos" id="3" />
        <Interlocutor name="Nik" id="4" />
        <Interlocutor name="Nikitochka" id="5" />
      </div>
      <div className={s.dialogs__messages}>
        <Messages text="Hi! how are you?" />
        <Messages text="what`s up? are you busy?" />
        <Messages text="i don`t belive you!" />
      </div>
    </div>
  );
};
