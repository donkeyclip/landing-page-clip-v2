import { CSSEffect } from "@donkeyclip/motorcortex";
export const Top = (
  value,
  initValue,
  selector,
  duration,
  delay: string | number = 0,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        top: value,
      },
      initialValues: {
        top: initValue,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );
export const Left = (
  value,
  initValue,
  selector,
  duration,
  delay: string | number = 0,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        left: value,
      },
      initialValues: {
        left: initValue,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );
export const BorderWidth = (
  value,
  initValue,
  selector,
  duration,
  delay: string | number = 0,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        borderWidth: value,
      },
      initialValues: {
        borderWidth: initValue,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );
export const Stroke = (
  value,
  initValue,
  selector,
  duration,
  delay: string | number = 0,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        stroke: value,
      },
      initialValues: {
        stroke: initValue,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );
export const Width = (
  value,
  initValue,
  selector,
  duration,
  delay: string | number = 0,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        width: value,
      },
      initialValues: {
        width: initValue,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );
export const Height = (
  value,
  initValue,
  selector,
  duration,
  delay: string | number = 0,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        height: value,
      },
      initialValues: {
        height: initValue,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );
export const Opacity = (
  value,
  initValue,
  selector,
  duration,
  delay: string | number = 0,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: value,
      },
      initialValues: {
        opacity: initValue,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );
export const BackGroundColor = (
  value,
  initValue,
  selector,
  duration,
  delay: string | number = 0,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        backgroundColor: value,
      },
      initialValues: {
        backgroundColor: initValue,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );
