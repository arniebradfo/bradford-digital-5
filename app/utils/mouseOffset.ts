export type MouseOffsetProps= {
  mouseEvent: React.MouseEvent | MouseEvent;
  element: HTMLElement;
};

export function mouseOffset<T extends HTMLElement>({
  mouseEvent,
  element,
}: MouseOffsetProps) {
  const { clientX: globalMouseX, clientY: globalMouseY } = mouseEvent;
  const {
    offsetHeight: elementH,
    offsetWidth: elementW,
    offsetLeft: elementX,
    offsetTop: elementY,
  } = element;

  const topLeftOffsetX = globalMouseX - elementX;
  const topLeftOffsetY = globalMouseY - elementY;

  const centerX = elementX + elementW / 2;
  const centerY = elementY + elementH / 2;

  const centerOffsetX = globalMouseX - centerX;
  const centerOffsetY = globalMouseY - centerY;

  return {
    topLeftOffsetX,
    topLeftOffsetY,

    centerX,
    centerY,

    centerOffsetX,
    centerOffsetY,
  };
}
