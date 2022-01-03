export default function Bodytext(props) {
  const { text, bodyTextClass } = props;
  return (
    <>
      <p className={bodyTextClass}>{text}</p>
    </>
  );
}
