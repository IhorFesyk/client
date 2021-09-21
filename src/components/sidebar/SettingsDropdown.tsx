import React from "react"
import { NavLink } from "react-router-dom"
import { Menu, Transition } from "@headlessui/react"

import { SettingsIcon } from "assets"

interface IProps {
  handleLogout: () => void
}

export const SettingsDropdown: React.FC<IProps> = ({ handleLogout }) => {
  return (
    <div className="">
      <Menu as="div" className="">
        <div className="fixed bottom-16">
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="outline-none py-3 px-1 flex flex-col bg-primaryDark rounded">
              <Menu.Item>
                {() => (
                  <NavLink
                    className="text-secondaryDark px-8 py-2 rounded hover:text-secondary hover:bg-primary"
                    to="/"
                  >
                    Settings
                  </NavLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {() => (
                  <button
                    onClick={handleLogout}
                    className="outline-none text-secondaryDark px-8 py-2 rounded hover:text-secondary hover:bg-primary"
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </div>
        <Menu.Button>
          <SettingsIcon className="w-6 h-6 text-secondaryDark transition transition-200 hover:text-secondary" />
        </Menu.Button>
      </Menu>
    </div>
  )
}
