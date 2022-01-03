// Components
import Image from '../atoms/Image';
import Icon from '../atoms/Icon';

// Images
import imageOne from '../../images/image-product-1.jpg';
import iconNext from '../../images/icon-next.svg';
import iconPrev from '../../images/icon-previous.svg';
// Styles

export default function Header() {
  return (
    <header>
      <Image image={imageOne} />
      <Icon icon={iconNext} />
      <Icon icon={iconPrev} />
    </header>
  );
}
