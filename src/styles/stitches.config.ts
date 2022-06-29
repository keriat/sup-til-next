import { createStitches } from '@stitches/react';
import {
  gray,
  mauve,
  slate,
  sage,
  olive,
  sand,
  tomato,
  red,
  crimson,
  pink,
  plum,
  purple,
  violet,
  indigo,
  blue,
  sky,
  mint,
  cyan,
  teal,
  green,
  grass,
  lime,
  yellow,
  amber,
  orange,
  brown,
  bronze,
  gold,
  grayA,
  mauveA,
  slateA,
  sageA,
  oliveA,
  sandA,
  tomatoA,
  redA,
  crimsonA,
  pinkA,
  plumA,
  purpleA,
  violetA,
  indigoA,
  blueA,
  skyA,
  mintA,
  cyanA,
  tealA,
  greenA,
  grassA,
  limeA,
  yellowA,
  amberA,
  orangeA,
  brownA,
  bronzeA,
  goldA,
  whiteA,
  blackA,
  grayDark,
  mauveDark,
  slateDark,
  sageDark,
  oliveDark,
  sandDark,
  tomatoDark,
  redDark,
  crimsonDark,
  pinkDark,
  plumDark,
  purpleDark,
  violetDark,
  indigoDark,
  blueDark,
  skyDark,
  mintDark,
  cyanDark,
  tealDark,
  greenDark,
  grassDark,
  limeDark,
  yellowDark,
  amberDark,
  orangeDark,
  brownDark,
  bronzeDark,
  goldDark,
  grayDarkA,
  mauveDarkA,
  slateDarkA,
  sageDarkA,
  oliveDarkA,
  sandDarkA,
  tomatoDarkA,
  redDarkA,
  crimsonDarkA,
  pinkDarkA,
  plumDarkA,
  purpleDarkA,
  violetDarkA,
  indigoDarkA,
  blueDarkA,
  skyDarkA,
  mintDarkA,
  cyanDarkA,
  tealDarkA,
  greenDarkA,
  grassDarkA,
  limeDarkA,
  yellowDarkA,
  amberDarkA,
  orangeDarkA,
  brownDarkA,
  bronzeDarkA,
  goldDarkA,
} from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';
export type { VariantProps } from '@stitches/react';

export const { styled, css, theme, createTheme, getCssText, globalCss, keyframes, config, reset } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...mauve,
      ...slate,
      ...sage,
      ...olive,
      ...sand,
      ...tomato,
      ...red,
      ...crimson,
      ...pink,
      ...plum,
      ...purple,
      ...violet,
      ...indigo,
      ...blue,
      ...sky,
      ...mint,
      ...cyan,
      ...teal,
      ...green,
      ...grass,
      ...lime,
      ...yellow,
      ...amber,
      ...orange,
      ...brown,
      ...bronze,
      ...gold,

      ...grayA,
      ...mauveA,
      ...slateA,
      ...sageA,
      ...oliveA,
      ...sandA,
      ...tomatoA,
      ...redA,
      ...crimsonA,
      ...pinkA,
      ...plumA,
      ...purpleA,
      ...violetA,
      ...indigoA,
      ...blueA,
      ...skyA,
      ...mintA,
      ...cyanA,
      ...tealA,
      ...greenA,
      ...grassA,
      ...limeA,
      ...yellowA,
      ...amberA,
      ...orangeA,
      ...brownA,
      ...bronzeA,
      ...goldA,

      ...whiteA,
      ...blackA,
      elevation0: "hsl(210, 8%, 94%)",
      elevation1: "hsl(210, 14%, 89%)", // bg color of the rows (main panel color)
      elevation2: "hsl(225, 16%, 80%)", // bg color of the root panel (main title bar)
      elevation3: "hsl(225, 15%, 75%)", // bg color of the inputs
      accent1: "hsl(212, 100%, 57%)",
      accent2: "hsl(211, 100%, 50%)",
      accent3: "hsl(213, 100%, 38%)",
      highlight1: "hsl(222, 7%, 65%)",
      highlight2: "hsl(225, 12%, 60%)",
      highlight3: "hsl(0, 0%, 0%)",
      vivid1: "hsl(48, 100%, 50%)",
      folderWidgetColor: "$highlight2",
      folderTextColor: "$highlight3",
      toolTipBackground: "$highlight3",
      toolTipText: "$elevation2",

      // Semantic colors
      hiContrast: "$slate12",
      // loContrast: '$slate1',
      loContrast: "white",
      canvas: "hsl(0 0% 93%)",
      panel: "$elevation1",
      panelHi: "$slate4",
      panelLo: "$slate2",
      transparentPanel: "hsl(0 0% 0% / 97%)",
      shadowLight: "hsl(206 22% 7% / 35%)",
      shadowDark: "hsl(206 22% 7% / 20%)",
    },
    shadows: {
      level1: "0 0 9px 0 #00000088",
      level2: "0 4px 14px #00000033",
      floating1: "0 0px 8px $colors$blackA7",
      floating2: "0 2px 10px $colors$blackA7",
    },
    fonts: {
      untitled: "Untitled Sans, -apple-system, system-ui, sans-serif",
      sans: "'Source Sans Pro', sans-serif;",
      // mono1: "Söhne Mono, menlo, monospace",
      mono: "ui-monospace, SFMono-Regular, Menlo, monospace",
    },
    space: {
      half: "3px",
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
      7: "45px",
      8: "65px",
      9: "80px",
    },
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
      7: "45px",
      8: "65px",
      9: "80px",
    },
    fontSizes: {
      1: "11px",
      2: "12px",
      3: "14px",
      4: "17px",
      5: "19px",
      6: "21px",
      7: "27px",
      8: "35px",
      9: "59px",
    },
    radii: {
      1: "4px",
      2: "6px",
      3: "8px",
      4: "12px",
      round: "50%",
      pill: "9999px",
    },
    zIndices: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      max: "999",
    },
  },
  media: {
    bp1: "(min-width: 520px)",
    bp2: "(min-width: 900px)",
    bp3: "(min-width: 1200px)",
    bp4: "(min-width: 1800px)",
    motion: "(prefers-reduced-motion)",
    hover: "(any-hover: hover)",
    dark: "(prefers-color-scheme: dark)",
    light: "(prefers-color-scheme: light)",
  },
  utils: {
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<"textAlign">) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<"flexDirection">) => ({ flexDirection: value }),
    fw: (value: Stitches.PropertyValue<"flexWrap">) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<"alignItems">) => ({ alignItems: value }),
    ac: (value: Stitches.PropertyValue<"alignContent">) => ({ alignContent: value }),
    jc: (value: Stitches.PropertyValue<"justifyContent">) => ({ justifyContent: value }),
    as: (value: Stitches.PropertyValue<"alignSelf">) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<"flexGrow">) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<"flexShrink">) => ({ flexShrink: value }),
    fb: (value: Stitches.PropertyValue<"flexBasis">) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<"borderTopRightRadius">) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<"borderBottomRightRadius">) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<"borderBottomLeftRadius">) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<"borderTopLeftRadius">) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<"boxShadow">) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<"lineHeight">) => ({ lineHeight: value }),

    ox: (value: Stitches.PropertyValue<"overflowX">) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<"overflowY">) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<"pointerEvents">) => ({ pointerEvents: value }),
    us: (value: Stitches.PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<"appearance">) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<"backgroundClip">) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const lightThemeMode = "light-theme";
export const lightTheme = createTheme(lightThemeMode, {
  colors: {
    ...gray,
    ...mauve,
    ...slate,
    ...sage,
    ...olive,
    ...sand,
    ...tomato,
    ...red,
    ...crimson,
    ...pink,
    ...plum,
    ...purple,
    ...violet,
    ...indigo,
    ...blue,
    ...sky,
    ...mint,
    ...cyan,
    ...teal,
    ...green,
    ...grass,
    ...lime,
    ...yellow,
    ...amber,
    ...orange,
    ...brown,
    ...bronze,
    ...gold,

    ...grayA,
    ...mauveA,
    ...slateA,
    ...sageA,
    ...oliveA,
    ...sandA,
    ...tomatoA,
    ...redA,
    ...crimsonA,
    ...pinkA,
    ...plumA,
    ...purpleA,
    ...violetA,
    ...indigoA,
    ...blueA,
    ...skyA,
    ...mintA,
    ...cyanA,
    ...tealA,
    ...greenA,
    ...grassA,
    ...limeA,
    ...yellowA,
    ...amberA,
    ...orangeA,
    ...brownA,
    ...bronzeA,
    ...goldA,

    ...whiteA,
    ...blackA,
    elevation0: "hsl(210, 8%, 94%)",
    elevation1: "hsl(210, 14%, 89%)", // bg color of the rows (main panel color)
    elevation2: "hsl(225, 16%, 80%)", // bg color of the root panel (main title bar)
    elevation3: "hsl(225, 15%, 75%)", // bg color of the inputs
    accent1: "hsl(212, 100%, 57%)",
    accent2: "hsl(211, 100%, 50%)",
    accent3: "hsl(213, 100%, 38%)",
    highlight1: "hsl(222, 7%, 65%)",
    highlight2: "hsl(225, 12%, 60%)",
    highlight3: "hsl(0, 0%, 0%)",
    vivid1: "hsl(48, 100%, 50%)",
    folderWidgetColor: "$highlight2",
    folderTextColor: "$highlight3",
    toolTipBackground: "$highlight3",
    toolTipText: "$elevation2",

    // Semantic colors
    hiContrast: "$slate12",
    // loContrast: '$slate1',
    loContrast: "white",
    canvas: "hsl(0 0% 93%)",
    panel: "$elevation1",
    panelHi: "$slate4",
    panelLo: "$slate2",
    transparentPanel: "hsl(0 0% 0% / 97%)",
    shadowLight: "hsl(206 22% 7% / 35%)",
    shadowDark: "hsl(206 22% 7% / 20%)",
  },
});

export const darkThemeMode = "dark-theme";
export const darkTheme = createTheme(darkThemeMode, {
  colors: {
    ...grayDark,
    ...mauveDark,
    ...slateDark,
    ...sageDark,
    ...oliveDark,
    ...sandDark,
    ...tomatoDark,
    ...redDark,
    ...crimsonDark,
    ...pinkDark,
    ...plumDark,
    ...purpleDark,
    ...violetDark,
    ...indigoDark,
    ...blueDark,
    ...skyDark,
    ...mintDark,
    ...cyanDark,
    ...tealDark,
    ...greenDark,
    ...grassDark,
    ...limeDark,
    ...yellowDark,
    ...amberDark,
    ...orangeDark,
    ...brownDark,
    ...bronzeDark,
    ...goldDark,

    ...grayDarkA,
    ...mauveDarkA,
    ...slateDarkA,
    ...sageDarkA,
    ...oliveDarkA,
    ...sandDarkA,
    ...tomatoDarkA,
    ...redDarkA,
    ...crimsonDarkA,
    ...pinkDarkA,
    ...plumDarkA,
    ...purpleDarkA,
    ...violetDarkA,
    ...indigoDarkA,
    ...blueDarkA,
    ...skyDarkA,
    ...mintDarkA,
    ...cyanDarkA,
    ...tealDarkA,
    ...greenDarkA,
    ...grassDarkA,
    ...limeDarkA,
    ...yellowDarkA,
    ...amberDarkA,
    ...orangeDarkA,
    ...brownDarkA,
    ...bronzeDarkA,
    ...goldDarkA,

    elevation0: "hsl(210, 8%, 6%)",
    elevation1: "hsl(210, 14%, 11%)", // bg color of the rows (main panel color)
    elevation2: "hsl(225, 16%, 20%)", // bg color of the root panel (main title bar)
    elevation3: "hsl(225, 15%, 25%)", // bg color of the inputs
    accent1: "hsl(212, 100%, 43%)",
    accent2: "hsl(211, 100%, 50%)",
    accent3: "hsl(213, 100%, 62%)",
    highlight1: "hsl(222, 7%, 35%)",
    highlight2: "hsl(225, 12%, 60%)",
    highlight3: "hsl(0, 0%, 100%)",
    vivid1: "hsl(48, 100%, 50%)",
    folderWidgetColor: "$highlight2",
    folderTextColor: "$highlight3",
    toolTipBackground: "$highlight3",
    toolTipText: "$elevation2",

    // Semantic colors
    hiContrast: "$slate12",
    loContrast: "$slate9",
    canvas: "hsl(0 0% 15%)",
    panel: "$elevation1",
    panelHi: "$slate4",
    panelLo: "$slate2",
    transparentPanel: "hsl(0 100% 100% / 97%)",
    shadowLight: "hsl(206 22% 7% / 35%)",
    shadowDark: "hsl(206 22% 7% / 20%)",
  },
});
