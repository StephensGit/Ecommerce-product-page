export default function HeaderFour(props) {
  const { text, h4Class } = props;
  return (
    <>
      <h3 className={h4Class}>{text}</h3>
    </>
  );
}
