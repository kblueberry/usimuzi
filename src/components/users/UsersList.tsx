import ItemsList from "../common/ItemsList";
import { CONSTANTS } from "../../constants/Constants";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../context/UsersProvider";
import Search from "./Search";
import PageHeading from "../common/PageHeading";

export default function UsersList() {
  const { state, setSearchQuery } = useContext(UsersContext);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    setSearchQuery(searchInput);
  }, [searchInput, setSearchQuery]);

  return (
    <>
      <PageHeading title={CONSTANTS.titles.users} />
      <Search
        handleChange={(searchText: string) => {
          setSearchInput(searchText);
        }}
      ></Search>
      <ItemsList state={state} />
    </>
  );
}
