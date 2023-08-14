import "../assets/stylesheets/UserProfile.scss";
import UserProfileGoToAction from "./UserProfileGoToAction";
import { User } from "../dto/User";

export default function UserProfile({ userInfo }: { userInfo: User }) {
  return (
    <div className="list_item">
      <UserPersonalInformation
        username={userInfo.username}
        name={userInfo.name}
      />
      <UserProfileGoToAction />
    </div>
  );
}

function UserPersonalInformation({
  username,
  name,
}: {
  username: string;
  name: string;
}) {
  return (
    <div className="list_item_personal_info">
      <b className="list_item_title">{name}</b>
      <p className="list_item_subtitle">
        <i>{`@${username}`}</i>
      </p>
    </div>
  );
}
