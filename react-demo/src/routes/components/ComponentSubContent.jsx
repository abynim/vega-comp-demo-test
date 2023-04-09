export default function ComponentSubContent(props) {
  return (
    <div className={`v-mb-size-24`}>
      <div className={`v-font-btn-label v-text-primary v-mb-size-12`}>
        {props.subTitle}
      </div>
      <div className={`v-mb-size-32`}>
        <div
          className={
            props.background
              ? `v-bg-backdrop-popover v-p-size-24 v-rounded-12`
              : `v-px-size-12`
          }
        >
          {props.background === true ? (
            <div className={`v-bg-primary v-p-size-24 v-rounded-12`}>
              {props.children}
            </div>
          ) : (
            <div>{props.children}</div>
          )}
        </div>
      </div>
    </div>
  );
}
