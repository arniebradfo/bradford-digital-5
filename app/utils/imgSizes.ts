type Size = {
  full?: boolean;
  width: number;
  divisor?: number;
};

export const createImgSize = (sizes: Size[]) => {
  const imgSizes = sizes
    .map(({ width, divisor = 1, full = false }) => {
      return full
        ? `${Math.round(width / divisor)}px`
        : `(max-width: ${width}px) ${Math.round(100 / divisor)}vw`;
    })
    .join(", ");

  console.log(imgSizes);

  return imgSizes;

  // `sizes="
  //  (max-width:${ width }px) ${ 100 / divisor }, // largest
  //  (max-width:${ width }px) ${ 100 / divisor }, // smaller
  //  ${ width / divisor } px // smallest
  // "`
};

const columnMax = 1600;
const columnFull = 1080;
const columnText = 720;

// +150 for padding & scrollbar
const breakpointEven = 800+150;
const breakpointOdd = 700+150;
const breakpointAll = 600+150;


const column1 = (columWidth: number) => [
  {
    width: breakpointAll,
    divisor: 1,
  },
  {
    width: columWidth,
    divisor: 1,
  },
  {
    width: columWidth,
    full: true,
  },
];

const column2 = (columWidth: number) => [
  {
    width: breakpointAll,
    divisor: 1,
  },
  {
    width: columWidth,
    divisor: 2,
  },
  {
    width: columWidth,
    divisor: 2,
    full: true,
  },
];

const column3 = (columWidth: number) => [
  {
    width: breakpointAll,
    divisor: 1,
  },
  {
    width: breakpointOdd,
    divisor: 1,
  },
  {
    width: columWidth,
    divisor: 3,
  },
  {
    width: columWidth,
    divisor: 3,
    full: true,
  },
];

export const imgSizes = {
  column1Max: createImgSize(column1(columnMax)),
  column1Full: createImgSize(column1(columnFull)),
  column1Text: createImgSize(column1(columnText)),

  column2Max:  createImgSize(column2(columnMax)),
  column2Full: createImgSize(column2(columnFull)),
  column2Text: createImgSize(column2(columnText)),

  column3Max:  createImgSize(column3(columnMax)),
  column3Full: createImgSize(column3(columnFull)),
  column3Text: createImgSize(column3(columnText)),

};
