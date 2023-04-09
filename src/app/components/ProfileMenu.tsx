"use client";

import { Menu } from "@headlessui/react";
import Image from "next/image";

export function ProfileMenu() {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button
          type="button"
          className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <span className="sr-only">Open user menu</span>
          <Image
            className="h-8 w-8 rounded-full"
            src="https://gravatar.com/avatar/706b29a1c2468304ff2369e6231a33fe?s=200"
            width={200}
            height={200}
            alt=""
          />
        </Menu.Button>
      </div>

      {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
      <Menu.Items
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        //role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        //tabIndex={-1}
      >
        {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
        <Menu.Item>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-0"
          >
            Perfil
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-1"
          >
            Configurações
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-2"
          >
            Sair
          </a>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
