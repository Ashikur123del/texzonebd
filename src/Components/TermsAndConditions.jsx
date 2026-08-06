import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const termsList = [
  "No free sample is provided above 5 kg.",
  "No changes are accepted after order confirmation without written approval.",
  "Any quality issue must be reported within 7 days of receiving goods.",
  "No claim will be accepted without valid proof.",
];

const TermsAndConditions = () => {
  return (
    <section className="py-16 bg-stone-50 text-slate-800 font-sans border-t border-stone-200">
      <div className="container mx-auto px-6 md:max-w-7xl">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-[2px] bg-stone-300" />
          <h2 className="text-2xl md:text-4xl font-black uppercase text-red-600 tracking-tight text-center">
            TERMS & CONDITIONS
          </h2>
          <div className="flex-1 h-[2px] bg-stone-300" />
        </div>

        <div className="space-y-4 mb-10">
          {termsList.map((term, index) => (
            <div key={index} className="flex items-start gap-3 text-slate-700 font-medium text-base md:text-lg">
              <FaAngleDoubleRight className="text-red-600 text-xl flex-shrink-0 mt-1" />
              <span>{term}</span>
            </div>
          ))}
        </div>
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-md">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
            Payment Methods: <span className="text-red-600">Cash, Cheque, TT, LC</span>
          </h3>

          <div className="mb-6">
            <h4 className="text-lg font-bold text-red-600 mb-1">
              Cash / Cheque / TT:
            </h4>
            <p className="text-slate-600 text-base leading-relaxed">
              For these payment methods, 60% of the total order value must be paid in advance, and the remaining balance must be settled at the time of order closing.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-red-600 mb-2">
              Letter of Credit (LC): We follow two terms:
            </h4>
            <ul className="space-y-3 text-slate-600 text-base leading-relaxed">
              <li>
                <span className="font-bold text-red-600">Term 1:</span> The yarn value must be covered under LC in favor of the yarn supplier, and the textile processing charges must be opened under LC in favor of Tex Zone BD before production begins.
              </li>
              <li>
                <span className="font-bold text-red-600">Term 2:</span> An LC covering the total order value must be opened in favor of Tex Zone BD before production, with document approval provided by the buyer.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;