// Components
import Avatar from '../atoms/Avatar';
import Icon from '../atoms/Icon';
import Logo from '../atoms/Logo';

// Images
import menuIcon from '../../images/icon-menu.svg';
import logo from '../../images/logo.svg';
import cartIcon from '../../images/icon-cart.svg';
import avatar from '../../images/image-avatar.png';

//  Styles

export default function Navbar() {
  return (
    <nav>
      <Icon icon={menuIcon} />
      <Logo image={logo} />
      <Icon icon={cartIcon} />
      <Avatar image={avatar} />
    </nav>
  );
}
