import { cx } from "../utils/joinClassNames";
import { Txt } from "./Text";
import style from "./PageDetails.module.css";
import { Fragment, ReactNode } from "react";

export const PageDetails: React.FC<
  React.ComponentProps<"div"> & {
    details: { label: ReactNode; text: ReactNode }[];
  }
> = ({ className, details, ...props }) => (
  <aside className={cx(className, style.PageDetails)} {...props}>
    <div className={cx(style.Spacer)} />
    <div className={cx(style.Table)}>
      {details.map(({ label, text }, i) => (
        <Fragment key={i}>
          <Txt uppercase fg={3} size={6}>
            {label}
          </Txt>
          <Txt fg={1} size={6} bold>
            {text}
          </Txt>
        </Fragment>
      ))}
    </div>
  </aside>
);
