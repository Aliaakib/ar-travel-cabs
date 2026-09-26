import Home from "../page";

export function generateStaticParams() {
  // Pre-generate the static paths for known sections so `output: "export"` works
  return [
    { slug: ["services"] },
    { slug: ["booking"] },
    { slug: ["cars"] },
    { slug: ["contact"] },
    { slug: ["about"] },
    { slug: ["privacy"] },
    { slug: ["terms"] },
  ];
}

export default function CatchAllPage() {
  return <Home />;
}
