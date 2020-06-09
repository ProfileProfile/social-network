import React from "react";
import s from "./Friends.module.scss";

export const Friends = (props) => {
  const { person } = props;

  const person =
    person &&
    person.map(({ id, name, surname, avatar }) => {
      <div key={id} className={s.sidebar_friends}>
        <div>
          <img
            src={avatar}
            alt="Аватар"
            className={s.sidebar_friends__avatar}
          />
        </div>
        <div>
          <div className="name">{name}</div>
          <div className="surname">{surname}</div>
        </div>
      </div>;
    });

  return <div>{person}</div>;
};
