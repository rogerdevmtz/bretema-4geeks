import type { Metadata } from "next";
import { CatalogView } from "@/components/CatalogView";

export const metadata: Metadata = { title: "Catálogo" };

const CatalogPage = async ({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) => {
  const { q } = await searchParams;
  return <CatalogView query={typeof q === "string" ? q.trim() : ""} />;
};
export default CatalogPage;
