import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist" />
        </div>
      </nav>
      <div className="settings">
        <ul>
          <li>+</li>
          <li>
            <FaPizzaSlice />
          </li>
        </ul>
      </div>
    </div>
  );
};
