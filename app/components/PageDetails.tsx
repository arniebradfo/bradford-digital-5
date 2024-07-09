import { cx } from "../utils/joinClassNames";
import { Txt } from "./Text";
import style from "./PageDetails.module.css";
import { Fragment } from "react";

export const PageDetails: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => (
  <aside className={cx(className, style.PageDetails)} {...props}>
    <div className={cx(style.Spacer)} />
    <div className={cx(style.Table)}>
      {details.map(({ label, text }) => (
        <Fragment key={label}>
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

const details = [
  {
    label: "Role",
    text: "UX Design & Frontend Engineering",
  },
  {
    label: "Team",
    text: "6 Contributors",
  },
  {
    label: "Timeline",
    text: (
      <>
        <Txt>1 Year </Txt>
        <Txt fg={3}>(30 % weekly for 3 years) </Txt>
        <Txt fg={3}>2020-2023</Txt>
      </>
    ),
  },
  {
    label: "Client",
    text: "US CyberSecurity and Infrastructure Security Agency (CISA)",
  },
];
