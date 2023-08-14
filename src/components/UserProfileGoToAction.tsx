import React from "react";

const selectOptions = ["Posts", "Albums"];

export default function UserProfileGoToAction() {
  return (
    <div className="list_item_actions">
      <p className="list_item_subtitle">Go to</p>

      <div className="links">
        {selectOptions.map((option, index) => (
          <a key={index} className="link_action">
            {option}
          </a>
        ))}
      </div>
    </div>
  );
}
