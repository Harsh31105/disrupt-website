import React from "react";
import { CARD } from "./ConsultingConstants";
import ConsultingBenefitCard from "./ConsultingBenefitCard";
import contactArrow from "../../img/contactArrow.svg";

export default function WhyWorkWithUs() {
  return (
    <div className="bg-black text-white">
      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-faucet mb-6" style={{ fontFeatureSettings: "'dlig' on, 'ss01' on" }}>WHY WORK WITH US?</h2>
        <p className="text-2xl font-usual-light mb-12">
          Proven impact. Data-driven execution. Technical innovation. Cost-effective, student-powered consulting for fintech transformation.
        </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-stretch">
              {CARD.map(card => (
                  <ConsultingBenefitCard
                      key={card.key}
                      header={card.header}
                      img={card.img}
                      alt={card.header}
                      description={card.description}
                  />
              ))}
          </div>

      </section>

        <section className="px-6 py-20 max-w-6xl mx-auto text-white">
            <h2 className="text-4xl font-faucet mb-12 text-center">OUR APPROACH</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    "Macroeconomic, Competitor, and Market Research",
                    "Hypothesis Testing & Focus Groups",
                    "Regulatory Analysis & Compliance Strategy",
                    "Front-End Development & UX Optimization",
                    "Strategic Pitches for Untapped Markets",
                    "Product Development & Enhancement",
                ].map((item, index) => (
                    <div key={index} className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 flex items-start space-x-4 hover:border-[#BAFF29] transition duration-300">
                        <div className="flex-shrink-0 w-10 h-10 bg-[#BAFF29] rounded-full flex items-center justify-center text-black font-bold text-xl">
                            {index + 1}
                        </div>
                        <p className="text-lg font-usual-regular">{item}</p>
                    </div>
                ))}
            </div>
        </section>


        <section className="px-6 py-20 max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-faucet mb-12 text-center">CONSULTING PROCESS</h2>
            <div className="space-y-6">
                {[
                    {
                        title: "Weekly Updates",
                        desc: "To ensure alignment and transparency through every phase.",
                    },
                    {
                        title: "Mid-Semester Check-ins",
                        desc: "Roughly 2 hours of feedback and reporting for strategy refinement.",
                    },
                    {
                        title: "Final Deliverables",
                        desc: "Comprehensive, data-driven recommendations and execution roadmaps.",
                    },
                ].map((step, i) => (
                    <div key={i} className="flex items-start space-x-5 bg-zinc-900 border border-zinc-700 rounded-xl p-6 hover:border-[#009AFF] transition duration-300">
                        <div className="flex-shrink-0 w-10 h-10 bg-[#009AFF] rounded-full flex items-center justify-center font-bold text-white">
                            {i + 1}
                        </div>
                        <div>
                            <p className="text-lg font-semibold mb-1">{step.title}</p>
                            <p className="text-sm font-usual-regular">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>


        <section className="px-6 py-20 max-w-6xl mx-auto text-white">
            <h2 className="text-4xl font-faucet mb-12 text-center">CLIENT IMPACT</h2>
            <div className="space-y-10">
                {[
                    {
                        period: "Spring 2023",
                        title: "Optimizing Digital Insurance Sales",
                        points: [
                            "Research on financial product discovery among young consumers",
                            "Marketing strategy refinement for college campuses",
                            "Cost-effective acquisition methods identified",
                            "Product positioning aligned with student adoption",
                        ],
                    },
                    {
                        period: "Spring 2023",
                        title: "Enhancing Investor Engagement via CRM",
                        points: [
                            "Custom CRM built for centralized investor communication",
                            "Real-time deal tracking features added",
                            "Boosted investment engagement through better visibility",
                        ],
                    },
                    {
                        period: "Fall 2024",
                        title: "Blockchain & AI Integration",
                        points: [
                            "Compliance and legal analysis for fintech firms",
                            "Exploration of secure tokenization for asset transactions",
                            "AI-powered due diligence proposal",
                            "Referral-based marketing strategies developed",
                        ],
                    },
                    {
                        period: "Fall 2024",
                        title: "Front-End Development & UX Optimization",
                        points: [
                            "User research and behavioral analysis",
                            "Strategic design improvements for UX",
                            "Customer acquisition via digital marketing campaigns",
                        ],
                    },
                ].map((item, idx) => (
                    <div key={idx} className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 hover:border-[#BAFF29] transition duration-300 shadow-lg">
                        <p className="text-sm uppercase text-[#BAFF29] tracking-wide font-semibold">{item.period}</p>
                        <h3 className="text-2xl font-bold mt-1 mb-4">{item.title}</h3>
                        <ul className="list-disc pl-5 space-y-1 font-usual-regular text-base text-zinc-200">
                            {item.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>


        <section className="flex flex-col items-center justify-center w-full px-6 py-16 mt-20 bg-black border-t border-white">
        <h2 className="text-4xl text-center font-faucet mb-8" style={{ fontFeatureSettings: "'ss01' on" }}>
          {/*INTERESTED IN <span className="text-[#009AFF]">ELEVATING</span> YOUR ORGANIZATION?*/}
            JOIN US IN SHAPING <span className="text-[#009AFF]">FINTECH'S</span> FUTURE
        </h2>
        <p
            className="mx-auto text-white text-center max-w-4xl px-4"
            style={{ fontFamily: "Usual-Regular" }}
        >
            We are committed to helping fintech companies refine their strategies, enhance user experiences, and navigate complex regulatory environments.
            Whether you are launching a new product, expanding into new markets, or optimizing existing operations, Disrupt Consulting is here to support your journey.
        </p>

        <p className="flex items-center text-xl text-center font-usual-regular mt-8">
            Contact us at
            <a href="mailto:elevatedisruptneu@gmail.com" className="ml-2 text-[#BAFF29] underline flex items-center">
                elevatedisruptneu@gmail.com
                <img src={contactArrow} alt="Contact Arrow" className="ml-2" />
            </a>
        </p>

      </section>
    </div>
  );
}