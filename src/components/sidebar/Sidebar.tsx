import { LogoIcon, DefaultAvatarIcon } from "assets"
import { delAccessToken } from "utils/token"
import { SettingsDropdown } from "./SettingsDropdown"
import { NavItem } from "./NavItem"
import { nav } from "./consts"

export const Sidebar: React.FC = () => {
  const handleLogout = () => {
    delAccessToken()
    location.pathname = "/login"
  }

  return (
    <div className="flex flex-col h-screen w-1/6 p-5 bg-primary justify-between ">
      <div>
        <div className="flex items-center text-secondary px-2">
          <LogoIcon className="w-10 h-10" />
          <p className="text-2xl ml-2">Wallet Coo</p>
        </div>

        <div className="mt-12">
          {nav.map((item) => {
            return (
              <NavItem
                text={item.text}
                link={item.link}
                IconComponent={item.icon}
              />
            )
          })}
        </div>

        <div className="mt-12 px-2">
          <p className="text-secondaryDark">PROJECTS</p>
          <p className="text-secondary mt-3 cursor-pointer">Personal wallet</p>
          <p className="text-secondary mt-3 cursor-pointer">Wife wallet</p>
          <p className="text-secondary mt-3 cursor-pointer">Son wallet</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={DefaultAvatarIcon}
            className="w-12 h-12 fill-current rounded-full"
            alt="default avatar"
          />

          <div className="ml-3">
            <p className="text-secondary">Dianne Robertson</p>
            <p className="text-secondaryDark">View profile</p>
          </div>
        </div>

        <SettingsDropdown handleLogout={handleLogout} />
      </div>
    </div>
  )
}
