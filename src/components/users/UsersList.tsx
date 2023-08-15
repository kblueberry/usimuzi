import ItemsList from "../common/ItemsList";
import { CONSTANTS } from "../../constants/Constants";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersProvider";
import Search from "./Search";
import PageHeading from "../common/PageHeading";

export default function UsersList() {
  const usersState = useContext(UsersContext);

  return (
    <>
      <PageHeading title={CONSTANTS.titles.users} />
      <Search></Search>
      <ItemsList state={usersState} />
    </>
  );
}
