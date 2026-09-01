import { createRoot } from "react-dom/client";

import { glyphMetrics } from "@taktstock/core";
import "@taktstock/react/bravura.css";

const GLYPHS = [
  { name: "gClef", glyph: "\uE050" },
  { name: "timeSig4", glyph: "\uE084" },
  { name: "noteheadBlack", glyph: "\uE0A4" },
  { name: "restQuarter", glyph: "\uE0E0" },
  { name: "flag8thUp", glyph: "\uE240" },
];

function App() {
  return (
    <main>
      <h1>taktstock — Bravura glyph metrics</h1>
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none", padding: 0 }}>
        {GLYPHS.map(({ name, glyph }) => {
          const metrics = glyphMetrics(name);
          return (
            <li key={name}>
              <div style={{ fontFamily: "Bravura", fontSize: "48px" }}>
                {glyph}
              </div>
              <div>{name}</div>
              <div>
                {metrics
                  ? `advance: ${metrics.advanceWidth} staff spaces`
                  : "no metrics"}
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
