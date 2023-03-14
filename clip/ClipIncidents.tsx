import { Group, CSSEffect, Combo } from "@donkeyclip/motorcortex";
import { Left, Opacity, Top, Width } from "./effects/incidents";

export const ClipIncidents = (selector) => {
  const myGroup = new Group();
  // myGroup.addIncident(Opacity(0, 1, `${selector} .play-button`, 10), 0);
  // myGroup.addIncident(Opacity(1, 0, `${selector} .pause-button`, 10), 0);
  // myGroup.addIncident(
  //   Top(`50%`, `155%`, `${selector}  .title, .subtitle`, 400),
  //   39
  // );
  // myGroup.addIncident(
  //   Top(`156%`, `50%`, `${selector} .title,.subtitle`, 400),
  //   2000
  // );

  // myGroup.addIncident(
  //   Left(
  //     `0%`,
  //     `-100%`,
  //     `${selector} .product-title,.product-description,.product-price,.product-button,.image`,
  //     400
  //   ),
  //   2400
  // );

  // myGroup.addIncident(
  //   Width(`410px`, `0px`, `${selector}  .play-bar-progress`, 4650),
  //   39
  // );

  // myGroup.addIncident(
  //   Left(
  //     `-100%`,
  //     `0%`,
  //     `${selector}  .product-title,.product-description,.product-price,.product-button,.image`,
  //     400
  //   ),
  //   4289
  // );

  // myGroup.addIncident(Opacity(1, 0, `${selector} .play-button`, 10), 4689);
  // myGroup.addIncident(Opacity(0, 1, `${selector} .pause-button`, 10), 4689);
  // return myGroup;
  return new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 0,
            },
            initialValues: {
              opacity: 1,
            },
          },
          props: {
            selector: ".play-button",
            duration: 10,
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 1,
            },
            initialValues: {
              opacity: 0,
            },
          },
          props: {
            selector: `.pause-button`,
            duration: 10,
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: `50%`,
            },
            initialValues: {
              top: `155%`,
            },
          },
          props: {
            selector: `.title, .subtitle`,
            duration: 400,
          },
          position: 39,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: `156%`,
            },
            initialValues: {
              top: `50%`,
            },
          },
          props: {
            selector: `.title, .subtitle`,
            duration: 400,
          },
          position: 2000,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              left: `0%`,
            },
            initialValues: {
              left: `-100%`,
            },
          },
          props: {
            selector: `.product-title,.product-description,.product-price,.product-button,.image`,
            duration: 400,
          },
          position: 2400,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              width: `410px`,
            },
            initialValues: {
              width: `0px`,
            },
          },
          props: {
            selector: `.play-bar-progress`,
            duration: 4650,
          },
          position: 39,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              left: `100%`,
            },
            initialValues: {
              left: `0%`,
            },
          },
          props: {
            selector: `.product-title,.product-description,.product-price,.product-button,.image`,
            duration: 400,
          },
          position: 4289,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 1,
            },
            initialValues: {
              opacity: 0,
            },
          },
          props: {
            selector: `.play-button`,
            duration: 10,
          },
          position: 4689,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 0,
            },
            initialValues: {
              opacity: 1,
            },
          },
          props: {
            selector: `.pause-button`,
            duration: 10,
          },
          position: 4689,
        },
      ],
    },
    {
      selector: selector,
      // delay: "@expression(5300*index)",
      duration: 2000,
    }
  );
};
