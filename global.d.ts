import type * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "product-details-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "widget-id"?: string;
      };
      "product-catalog-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "widget-id"?: string;
      };
      "booking-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "widget-id"?: string;
      };
    }
  }
}

export {};
