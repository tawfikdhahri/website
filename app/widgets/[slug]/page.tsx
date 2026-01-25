import Link from "next/link";
import Script from "next/script";
import { createElement } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import WidgetEmbedCode from "@/components/WidgetEmbedCode";
import widgets from "@/data/widgets.json";

type WidgetDetailsPageProps = {
  params: {
    slug: string;
  };
};

export default function WidgetDetailsPage({ params }: WidgetDetailsPageProps) {
  const widget = (widgets as Widget[]).find(
    (entry) => entry.slug === params.slug
  );

  if (!widget) {
    notFound();
  }

  const widgetElement = widget.element as keyof JSX.IntrinsicElements;
  const embedCode = `<${widget.element} widget-id="${widget.widgetId}"></${widget.element}>\n<script type="text/javascript" src="${widget.scriptSrc}"></script>`;
  const isFullWidth = widget.layout === "full";

  return (
    <div className="bg-background">
      <Navbar />
      <main className="py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Link
            href="/#widgets"
            className="text-sm font-semibold text-primaryDark transition duration-200 ease-out hover:text-primaryAccent"
          >
            ← Back to widgets
          </Link>
          <SectionHeading
            eyebrow="Widget"
            title={widget.title}
            description={widget.description}
          />
          <div
            className={`grid gap-8 ${
              isFullWidth
                ? "grid-cols-1"
                : "lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]"
            }`}
          >
            <section className="rounded-3xl border border-border bg-background p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-mutedText">
                Live demo
              </h3>
              <div className="mt-6 min-h-[280px] w-full rounded-2xl border border-border bg-border/40 p-4">
                {createElement(widgetElement, { "widget-id": widget.widgetId })}
              </div>
              <Script
                id={`regiondo-widget-${widget.slug}`}
                src={widget.scriptSrc}
                strategy="afterInteractive"
              />
            </section>
            <div className={`space-y-6 ${isFullWidth ? "lg:max-w-4xl" : ""}`}>
              <section className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-mutedText">
                  Tech stack
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {widget.techStack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-border px-3 py-1 text-xs text-mutedText"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
              <section className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-mutedText">
                  Embed code
                </h3>
                <div className="mt-4">
                  <WidgetEmbedCode code={embedCode} />
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
