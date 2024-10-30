import Link from "next/link";
import React from "react";
import ToggleMode from "./ToggleMode";

const MainNav = () => {
  return (
    <div className="flex justify-between items-center border-b mb-5 px-5 py-3">
        <div>
      <Link href="/">Dashboard</Link>
      <Link href="/ticket">Tickets</Link>
      <Link href="/users">Users</Link>
      </div>
      <div>
      <Link href="/logout">LogOut</Link>
      <ToggleMode/>

      </div>
    
      
    </div>
  );
};

export default MainNav;
