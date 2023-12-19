import styled from 'styled-components'


export const Navbar = styled.nav`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  padding: 5px 100px;
  @media screen and (max-width: 768px) {
   padding: 6px 20px;
  }
  
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const WebsiteLogo = styled.img`
  height: 30px;
  width: 70px  
  @media screen and (max-width: 768px){
    width: 40px;
    height: 25px;
  }
`
export const InstaShare = styled.h3`
font-size: 16px;
font-family: Roboto;
`

export const NavbarItemsContainer = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavbarSearchContainer = styled.div`
 width: 214px;
  height: 28px;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
  .nav-search-container {
    display: none;
  }
}
`

export const Input = styled.input`
  color: #000000;
  font-size: 12px;
  font-family: Roboto;
  border: none;
  outline: none;
  margin-left: 3px;
  width: 100%;
`

export const SearchButton = styled.button`
background-color: transparent;
  border: none;
  outline: none;
  border-radius: 0px 2px 2px 0px;
  background: #dbdbdb;
  height: 28px;
  width: 30px;
`

export const NavbarItems = styled.div`
 margin-left: 33px;
`

export const ListContainer = styled.ul`
 list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
`

export const List = styled.li`
margin-right: 16px;
  color: #262626;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 18px;
`

export const LogoutButton = styled.button`
border-radius: 4px;
  background: #4094ef;
  color: #ffffff;
  border: none;
  outline: none;
  width: 86px;
  height: 32px;
  cursor: pointer;
`