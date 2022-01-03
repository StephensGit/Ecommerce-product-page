export default function HeaderTwo(props) {
  const { text, h2Class } = props;
  return (
    <>
      <h2 className={h2Class}>{text}</h2>
    </>
  );
}
