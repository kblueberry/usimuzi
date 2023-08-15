import ItemsList from "../common/ItemsList";
import { CONSTANTS } from "../../constants/Constants";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersProvider";

export default function UsersList() {
  const usersState = useContext(UsersContext);

  return <ItemsList title={CONSTANTS.titles.users} state={usersState} />;
}
