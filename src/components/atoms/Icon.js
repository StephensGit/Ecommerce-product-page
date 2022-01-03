export default function Icon(props) {
  const { icon, imgClass } = props;
  return (
    <>
      <img className={imgClass} src={icon} alt='img' />
    </>
  );
}
