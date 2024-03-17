import { Outlet } from "react-router-dom";
import { HeaderSearch } from "../components/Header/Header";

export default function Root() {
  return (
    <>
      <HeaderSearch />
      <Outlet />
    </>
  );
}