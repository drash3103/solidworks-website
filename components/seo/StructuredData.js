/**
 * StructuredData component for JSON-LD schema markup
 * Renders structured data for better search engine understanding
 */
export default function StructuredData({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
