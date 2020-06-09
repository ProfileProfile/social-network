import React from "react";
import { Interlocutor } from "./Interlocutor";
import { Messages } from "./Messages";

import s from "./Dialogs.module.scss";

export const Dialogs = (props) => {
  const { interlocutor, messages } = props;

  const inter =
    interlocutor.interlocutor &&
    interlocutor.interlocutor.map(({ id, name }) => (
      <div key={id}>
        <Interlocutor name={name} />
      </div>
    ));

  const messagesFromInter =
    messages.messages &&
    messages.messages.map(({ id, text }) => (
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
