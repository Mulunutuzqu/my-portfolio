import { BookMarked } from "lucide-react";

export function Header() {
  return (
    <>
      <section className="flex w-full max-w-[720px] justify-center overflow-hidden rounded-[4px] bg-gradient-to-b from-[#E3E8EF] to-white p-[1px]">
        <div className="flex w-full flex-col items-center justify-start gap-[24px] overflow-hidden rounded-[4px] bg-white p-[8px] md:p-[24px]">
          <div className="mt-[24px] flex w-full flex-col items-center gap-[8px]">
            <BookMarked className="shrink-0 text-subtext" size={24} />{" "}
            <p className="notion-max-w text-[14px] text-subtext">Study case</p>
          </div>
          <p className="notion-max-w w-full text-center text-[32px] text-maintext">
            UX Case Study: Redesigning a Food Delivery App
          </p>
          <p className="notion-max-w w-full text-center text-[14px] text-subtext">
            In this case study, we'll explore the process of redesigning a
            popular food delivery app to improve user experience and increase
            customer retention.
          </p>

          <div className="flex h-[320px] w-full bg-muted"></div>
        </div>
      </section>
    </>
  );
}
