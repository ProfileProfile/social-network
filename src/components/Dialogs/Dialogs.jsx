import React from "react";
import { Interlocutor } from "./Interlocutor";
import { Messages } from "./Messages";

import s from "./Dialogs.module.scss";

const interlocutor = [
  { id: 1, name: "Nikita" },
  { id: 2, name: "Nikitos" },
  { id: 3, name: "Asos" },
  { id: 4, name: "Nik" },
  { id: 5, name: "Nikitochka" },
];

const messages = [
  { id: 1, text: "Hi! how are you?" },
  { id: 2, text: "what`s up? are you busy?" },
  { id: 3, text: "i don`t belive you!" },
];

export const Dialogs = () => {
  const inter =
    interlocutor &&
    interlocutor.map(({ id, name }) => (
      <div key={id}>
        <Interlocutor name={name} />
      </div>
    ));

  const messagesFromInter =
    messages &&
    messages.map(({ id, text }) => (
      <div key={id}>
        <Messages text={text} />
      </div>
    ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__names}>{inter}</div>
      <div className={s.dialogs__messages}>{messagesFromInter}</div>
    </div>
  );
};
