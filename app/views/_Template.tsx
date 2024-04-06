import { cx } from "../utils/joinClassNames";
// import style from "./Template.module.css";

export const Template: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => (
  <div className={cx(className)} {...props}>
    {/* content */}
  </div>
);
