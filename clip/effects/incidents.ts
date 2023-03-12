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
