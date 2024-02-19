import { jCN } from "../utils/joinClassNames";
// import style from "./Template.module.css";

export const Template: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => (
  <div className={jCN([className])} {...props}>
    {/* content */}
  </div>
);
