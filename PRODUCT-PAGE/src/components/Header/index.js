import {
  StyledLogoWrapper,
  StyledHeader,
  StyledNav,
  StyledNavItem,
  StyledExtraWrapper,
  StyledAvatarWrapper,
  StyledMobileToggler,
  StyledNavigation,
} from './styles';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as MenuIcon } from 'assets/images/icon-menu.svg';
import { ReactComponent as CloseIcon } from 'assets/images/icon-close.svg';
import AvatarImage from 'assets/images/image-avatar.png';
import { useScreenSize } from 'hooks/useScreenSize';
import { useState } from 'react';
import { ShoppingCart } from 'components/ShoppingCart';

export const Header = ({ onMenuOpen = () => {} }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useScreenSize();

  const handleMenuToggler = () => {
    if (isMobile) {
      setIsMenuOpen(!isMenuOpen);
      onMenuOpen({ isOpen: isMenuOpen });
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <StyledHeader>
      <StyledMobileToggler onClick={handleMenuToggler}>
        <MenuIcon />
      </StyledMobileToggler>
      <StyledLogoWrapper>
        <Logo />
      </StyledLogoWrapper>
      <StyledNavigation isOpen={isMenuOpen}>
        <StyledMobileToggler onClick={handleMenuToggler}>
          <CloseIcon />
        </StyledMobileToggler>
        <StyledNav>
          <StyledNavItem>Collections</StyledNavItem>
          <StyledNavItem>Men</StyledNavItem>
          <StyledNavItem>Women</StyledNavItem>
          <StyledNavItem>About</StyledNavItem>
          <StyledNavItem>Contact</StyledNavItem>
        </StyledNav>
      </StyledNavigation>
      <StyledExtraWrapper>
        <ShoppingCart />
        <StyledAvatarWrapper>
          <img src={AvatarImage} alt="avatar" />
        </StyledAvatarWrapper>
      </StyledExtraWrapper>
    </StyledHeader>
  );
};
