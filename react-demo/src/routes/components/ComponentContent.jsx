export default function ComponentContent(props) {
  return (
    <div>
      <div className={`v-font-h4 v-text-primary v-mb-size-24`}>
        {props.title}
      </div>
      <div className={`v-mb-size-24`}>{props.children}</div>
    </div>
  );
}
