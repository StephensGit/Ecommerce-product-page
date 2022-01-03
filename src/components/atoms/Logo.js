export default function Logo(props) {
  const { image, imgClass } = props;
  return (
    <>
      <img className={imgClass} src={image} alt='img' />
    </>
  );
}
