import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const source = fs.readFileSync(path.join(root, "endpoint/win-fs01/staging_source/board_notes_feb.txt"), "utf8");
const lines = source.split(/\r?\n/).filter(Boolean).map(line => line.replace(/[()\\]/g, m => `\\${m}`));
const text = ["BT", "/F1 11 Tf", "54 740 Td", ...lines.flatMap((line, i) => i === 0 ? [`(${line}) Tj`] : ["0 -18 Td", `(${line}) Tj`]), "ET"].join("\n");
const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
  `<< /Length ${Buffer.byteLength(text)} >>\nstream\n${text}\nendstream`,
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"
];
let pdf = "%PDF-1.4\n";
const offsets = [0];
objects.forEach((obj, i) => { offsets.push(Buffer.byteLength(pdf)); pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`; });
const xref = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (const off of offsets.slice(1)) pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
fs.writeFileSync(path.join(root, "endpoint/win-fs01/staged_objects/BoardNotes-Feb.pdf"), pdf);
