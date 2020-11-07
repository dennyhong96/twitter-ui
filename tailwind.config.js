const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/components/**/*.js", "./src/pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        body: {
          default: "#15202b",
          light: "#1b2836",
        },
        primary: {
          default: "#1da1f2",
          600: "#0083e2",
        },
        secondary: {
          default: "#053350",
        },
        green: {
          ...colors.green,
          ghost: "rgba(34, 83, 60, 0.5)",
        },
        pink: {
          ...colors.pink,
          ghost: "rgba(112, 36, 89, 0.5)",
        },
      },
      fontFamily: {
        body: ["Nunito"], // will generate class name: font-body
      },
      spacing: {
        14: "3.5rem",
        80: "20rem",
        100: "25rem",
      },
      borderWidth: {
        10: "10px",
      },
      inset: {
        px: "1px",
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
        36: "9rem",
        38: "9.5rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
      },
    },
    namedGroups: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  },
  variants: {
    visibility: [
      "responsive",
      "hover",
      "focus",
      "active",
      "group-hover",
      "group-focus",
    ],
    opacity: [
      "responsive",
      "hover",
      "focus",
      "active",
      "group-hover",
      "group-focus",
    ],
    margin: ["responsive", "hover", "focus", "active", "group-hover", "last"],
    translate: ["responsive", "hover", "focus", "active", "group-hover"],
    inset: ["responsive", "hover", "focus", "active", "group-hover"],
    backgroundColor: [
      "responsive",
      "hover",
      "focus",
      "active",
      "group-hover",
      "disabled",
    ],
    textColor: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [
    require("tailwindcss"),
    require("precss"),
    require("autoprefixer"),
    require("tailwindcss-named-groups"),
  ],
};
