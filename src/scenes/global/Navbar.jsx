import React from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <nav
      className="
    flex justify-between place-items-center
    w-screen h-16 bg-[#FAF9F6] px-16"
    >
      <section>
        <h1 className="font-semibold text-2xl">Bastion</h1>
      </section>
      <section className="flex h-6 gap-8">
        <h1 className="navbar-text">Home</h1>
        <h1 className="navbar-text">Shop</h1>
        <h1 className="navbar-text">Blog</h1>
        <h1 className="navbar-text">About</h1>
        <h1 className="navbar-text">Contact</h1>
      </section>
      <section className="flex place-items-center gap-4">
        <Icon
          icon="material-symbols:account-circle-outline-sharp"
          color="gray"
          width="32"
          height="32"
        />
        <div className="h-[24px] border-[1px] border-gray-400"></div>
        <Icon icon="ph:bag" color="gray" width="32" height="32" />
      </section>
    </nav>
  );
};

export default Navbar;
