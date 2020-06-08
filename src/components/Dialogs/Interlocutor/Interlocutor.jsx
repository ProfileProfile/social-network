import React from "react";
import { NavLink } from "react-router-dom";

export const Interlocutor = (props) => {
  const { name, id } = props;

  const path = "/dialogs/" + id;

  return (
    <div>
      <NavLink to={`dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};
