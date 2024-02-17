import { Txt, TxtProps } from "./Text";

/** Text Spacer 2x the size of {' '}, can include an optional char spacer like '/' or '•' or '|' */
export const Spacer: React.FC<TxtProps> = ({ children, ...props }) => (
  <Txt fg={4} {...props}>
    &nbsp;{children}&nbsp;
  </Txt>
);