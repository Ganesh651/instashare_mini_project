import React, { useContext } from 'react';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import SearchAndThemeContext from '../../context/SearchContext';
import HamburgerMenu from '../HamburgerMenu';
import {
  Navbar,
  LogoContainer,
  WebsiteLogo,
  // InstaShare,
  NavbarItemsContainer,
  NavbarSearchContainer,
  Input,
  SearchButton,
  NavbarItems,
  ListContainer,
  List,
  LogoutButton
} from './header';
import './index.css';


const Header = () => {
  const navigate = useNavigate()
  const { search, setSearch } = useContext(SearchAndThemeContext)

  const onClickLogout = () => {
    Cookies.remove("jwt_token")
    navigate("/login")
  }

  const onSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const onSearchHaddler = () => {

  }

  return (
    <Navbar>
      <LogoContainer>
        <Link to="/">
        <WebsiteLogo
          src="https://res.cloudinary.com/dky69roxl/image/upload/v1687411063/Standard_Collection_8_yc8kdx.svg"
          alt="website logo"
        />
          {/* <InstaShare>Insta Share</InstaShare> */}
        </Link>
      </LogoContainer>
      <NavbarItemsContainer>
        <NavbarSearchContainer>
          <Input
            placeholder="Search Caption"
            type="search"
            onChange={onSearchChange}
            value={search}
          />
          <SearchButton type="button" onClick={onSearchHaddler}>
            <FaSearch className="search-icon" />
          </SearchButton>
        </NavbarSearchContainer>
        <NavbarItems>
          <ListContainer>
            <Link to="/" className="link">
              <List>Home</List>
            </Link>
            <Link to="/my-profile" className="link">
              <List>Profile</List>
            </Link>
            <List>
              <LogoutButton
                onClick={onClickLogout}
                type="button">
                Logout
              </LogoutButton>
            </List>
          </ListContainer>
        </NavbarItems>
      </NavbarItemsContainer>
      <HamburgerMenu />
    </Navbar>
  )
}

export default Header
