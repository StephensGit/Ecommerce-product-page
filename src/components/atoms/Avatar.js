export default function Avatar(props) {
  const { image, imgClass } = props;
  return (
    <>
      <img className={imgClass} src={image} alt='img' />
    </>
  );
}
