import { NavbarContainer, NavbarLink } from "./styles"

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarLink to="/home" isActive={location.pathname === "/home"}>
        Головна
      </NavbarLink>
      <NavbarLink to="/starofmemory" isActive={location.pathname === "/starofmemory"}>
        Зірка пам'яті
      </NavbarLink>
      <NavbarLink to="/about" isActive={location.pathname === "/about"}>
        Про нас
      </NavbarLink>
      <NavbarLink to="/contact" isActive={location.pathname === "/contact"}>
        Контакти
      </NavbarLink>
      <NavbarLink to="/wholesaleoffers" isActive={location.pathname === "/wholesaleoffers"}>
        Оптові пропозиції
      </NavbarLink>
    </NavbarContainer>
  )
}
