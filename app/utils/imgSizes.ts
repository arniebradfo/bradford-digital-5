type Size = {
  full?: boolean;
  width: number;
  divisor?: number;
};

export const createImgSize = (sizes: Size[]) => {
  const imgSizes = sizes
    .map(({ width, divisor = 1, full = false }) => {
      let size = `(max-width: ${width}px) ${Math.round(100 / divisor)}vw`;
      if (full) size += `, ${Math.round(width / divisor)}px`;
      return size;
    })
    .join(", ");
  return imgSizes;
};

const columnMax = 1600;
const columnFull = 1080;
const columnText = 720;

// +150 for padding & scrollbar
const breakpointEven = 800 + 150;
const breakpointOdd = 700 + 150;
const breakpointAll = 600 + 150;

const column1 = (columWidth: number) => [
  {
    width: breakpointAll,
    divisor: 1,
  },
  {
    width: columWidth,
    divisor: 1,
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
    full: true,
  },
];

const column4 = (columWidth: number) => [
  {
    width: breakpointAll,
    divisor: 1,
  },
  {
    width: breakpointEven,
    divisor: 2,
  },
  {
    width: columWidth,
    divisor: 4,
    full: true,
  },
];

const column5 = (columWidth: number) => [
  {
    width: breakpointAll,
    divisor: 2,
  },
  {
    width: columWidth,
    divisor: 5,
    full: true,
  },
];

const column6 = (columWidth: number) => [
  {
    width: breakpointAll,
    divisor: 2,
  },
  {
    width: breakpointEven,
    divisor: 3,
  },
  {
    width: columWidth,
    divisor: 6,
    full: true,
  },
];

const column7 = (columWidth: number) => [
  {
    width: breakpointAll,
    divisor: 2,
  },
  {
    width: breakpointEven,
    divisor: 4,
  },
  {
    width: columWidth,
    divisor: 7,
    full: true,
  },
];

const column8 = (columWidth: number) => [
  {
    width: breakpointAll,
    divisor: 2,
  },
  {
    width: breakpointEven,
    divisor: 4,
  },
  {
    width: columWidth,
    divisor: 8,
    full: true,
  },
];

/** values correspond with how breakpoints realign in layout.module.css .ColumnN */
export const imgSizes = {
  column1Max: createImgSize(column1(columnMax)),
  column1Full: createImgSize(column1(columnFull)),
  column1Text: createImgSize(column1(columnText)),

  column2Max: createImgSize(column2(columnMax)),
  column2Full: createImgSize(column2(columnFull)),
  column2Text: createImgSize(column2(columnText)),

  column3Max: createImgSize(column3(columnMax)),
  column3Full: createImgSize(column3(columnFull)),
  column3Text: createImgSize(column3(columnText)),

  column4Full: createImgSize(column4(columnFull)),
  column5Full: createImgSize(column5(columnFull)),
  column6Full: createImgSize(column6(columnFull)),
  column7Full: createImgSize(column7(columnFull)),
  column8Full: createImgSize(column8(columnFull)),

  column4Max: createImgSize(column4(columnMax)),
  column5Max: createImgSize(column5(columnMax)),
  column6Max: createImgSize(column6(columnMax)),
  column7Max: createImgSize(column7(columnMax)),
  column8Max: createImgSize(column8(columnMax)),
};
