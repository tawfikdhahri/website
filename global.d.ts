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

  type Project = {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    demoWidgetId?: string;
  };

  type Widget = {
    slug: string;
    title: string;
    description: string;
    image?: string;
    tags: string[];
    techStack: string[];
    element: string;
    widgetId: string;
    scriptSrc: string;
    layout?: string;
  };
}

export {};

