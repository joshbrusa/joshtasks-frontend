import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  return (
    <div className="flex justify-center">
      <div className="max-w-7xl w-full p-2">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
