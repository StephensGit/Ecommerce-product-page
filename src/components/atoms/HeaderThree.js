export default function HeaderThree(props) {
  const { text, h3Class } = props;
  return (
    <>
      <h3 className={h3Class}>{text}</h3>
    </>
  );
}
