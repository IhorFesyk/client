import { NavLink } from "react-router-dom"

interface IProps {
  text: string
  link: string
  IconComponent: JSX.Element
}

export const NavItem: React.FC<IProps> = ({ text, link, IconComponent }) => {
  return (
    <NavLink
      to={link}
      activeClassName="text-secondary bg-primaryDark"
      className="flex p-2 justify-between rounded-md cursor-pointer my-1 text-secondaryDark hover:text-secondary hover:bg-primaryDark transition transition-200"
    >
      <div>
        <div className="flex">
          {IconComponent}
          <p className="ml-3">{text}</p>
        </div>

        <div />
      </div>
    </NavLink>
  )
}
