/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";

function BoxLink({content}) {
  return (
      <NavLink to={content.link}  className="boxLink">{content.name}</NavLink>
  );
}

export default BoxLink;
