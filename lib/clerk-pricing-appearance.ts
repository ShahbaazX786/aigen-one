import { dark } from "@clerk/themes";

/**
 * Dark + brand colors for `<PricingTable />` and billing checkout.
 */
export const clerkPricingDarkAppearance = {
    baseTheme: dark,
    variables: {
        colorPrimary: "oklch(0.7357 0.1641 34.7091)",
        colorPrimaryForeground: "oklch(1 0 0)",
        colorBackground: "oklch(0.3184 0.0176 341.4465)",
        colorForeground: "oklch(0.9397 0.0119 51.3156)",
        colorInputBackground: "oklch(0.3637 0.0203 342.2664)",
        colorInputText: "oklch(0.9397 0.0119 51.3156)",
        colorText: "oklch(0.9397 0.0119 51.3156)",
        colorTextSecondary: "oklch(0.8378 0.0237 52.6346)",
    },
} as const;

/**
 * Light + brand colors for `<PricingTable />` and billing checkout.
 */
export const clerkPricingLightAppearance = {
    variables: {
        colorPrimary: "oklch(0.7357 0.1641 34.7091)",
        colorPrimaryForeground: "oklch(1 0 0)",
        colorBackground: "oklch(1 0 0)",
        colorForeground: "oklch(0.3353 0.0132 2.7676)",
        colorInputBackground: "oklch(0.9296 0.037 38.6868)",
        colorInputText: "oklch(0.3353 0.0132 2.7676)",
        colorText: "oklch(0.3353 0.0132 2.7676)",
        colorTextSecondary: "oklch(0.5534 0.0116 58.0708)",
    },
} as const;
