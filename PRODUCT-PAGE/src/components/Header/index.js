import { ReactComponent as CloseIcon } from 'assets/images/icon-close.svg';
import { ReactComponent as MenuIcon } from 'assets/images/icon-menu.svg';
import AvatarImage from 'assets/images/image-avatar.png';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ShoppingCart } from 'components/ShoppingCart';
import { useScreenSize } from 'hooks/useScreenSize';
import { useState, forwardRef, useImperativeHandle } from 'react';
import {
  StyledAvatarWrapper,
  StyledExtraWrapper,
  StyledHeader,
  StyledLogoWrapper,
  StyledMobileToggler,
  StyledNav,
  StyledNavigation,
  StyledNavItem,
} from './styles';

export const Header = forwardRef(({ onMenuOpen = () => {} }, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useScreenSize();

  const handleMenuToggler = () => {
    if (isMobile) {
      setIsMenuOpen(!isMenuOpen);
      onMenuOpen({ isOpen: isMenuOpen });
    } else {
      closeMenu();
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  useImperativeHandle(ref, () => ({
    closeMenu,
  }));

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
});
