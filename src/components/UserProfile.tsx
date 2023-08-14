import React from "react";
import "../assets/stylesheets/UserProfile.scss";
import UserProfileGoToAction from "./UserProfileGoToAction";

export default function UserProfile() {
  return (
    <div className="list_item">
      <UserPersonalInformation />
      <UserProfileGoToAction />
    </div>
  );
}

function UserPersonalInformation() {
  return (
    <div className="list_item_personal_info">
      <b className="list_item_title">Amanda Prisley</b>
      <p className="list_item_subtitle">
        <i>@username</i>
      </p>
    </div>
  );
}
