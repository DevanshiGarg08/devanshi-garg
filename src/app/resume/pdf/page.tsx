// ✅ FILE: src/app/resume/pdf/page.tsx
import Resume from "../page"; // Reuse the Resume component

export const metadata = {
  title: "Resume PDF",
};

export default function ResumePDFPage() {
  return (
    <div className="bg-white text-black">
      <Resume isPdfMode />
    </div>
  );
}
