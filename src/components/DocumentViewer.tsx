import Image from "next/image";
import riskTrend from "@/assets/risk-trend.png";

const DocumentViewer = () => {
  return (
    <div className="flex-1 bg-[#111827] overflow-auto flex justify-center py-8 px-4 bg-blend-darken">
      <div className="bg-doc-bg rounded shadow-lg w-full max-w-[700px] min-h-[900px] px-16 py-14 text-doc-fg bg-white">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-black uppercase">
              SECTION 4: RISK FACTORS
            </h1>
            <p className="text-base text-doc-highlight-text mt-1  text-black opacity-80">
              Fiscal Year 2024 Q3 Update
            </p>
          </div>
          <span className="text-xs text-muted-foreground tracking-wider uppercase">
            CONFIDENTIAL
          </span>
        </div>

        {/* Market Volatility Impact - highlighted box */}
        <div className="border-l-4 border-doc-highlight-border bg-doc-highlight rounded-r-md p-5 mb-8 bg-blue-100">
          <h3 className="text font-bold tracking-tight text-blue-800">
            Market Volatility Impact
          </h3>
          <p className="text-sm leading-relaxed text-doc-fg text-black">
            Recent fluctuations in the global equity markets have increased the complexity of our portfolio management. Sudden shifts in investor sentiment regarding emerging tech sectors may impact our projected revenue growth for the upcoming three quarters.
          </p>
        </div>

        {/* Supply Chain Integrity */}
        <div className="mb-8">
          <h3 className="text-base font-bold text-doc-fg mb-3 text-black">Supply Chain Integrity</h3>
          <div className="flex gap-6">
            <p className="text-sm leading-relaxed text-doc-fg flex-1 text-black">
              Disruptions in the semiconductor supply chain remain a critical risk. Dependencies on single-source suppliers in East Asia expose the manufacturing division to potential delays. We are actively diversifying our vendor base to mitigate these exposures.
            </p>
            <div className="w-[180px] flex-shrink-0">
                  <Image
                src={riskTrend}
                alt="Risk Index Trend"
                width={180}
                height={120}
                className="w-full h-auto rounded"
                priority
              />
              <p className="text-[10px] text-center text-muted-foreground mt-1.5 uppercase tracking-wider">
                Risk Index Trend
              </p>
            </div>
          </div>
        </div>

        {/* Regulatory */}
        <div className="mb-12">
          <h3 className="text-base font-bold text-doc-fg mb-3 text-black">Regulatory Compliance & Shifts</h3>
          <p className="text-sm leading-relaxed text-doc-fg text-black ">
            Upcoming legislative changes in data privacy across the EU and North American markets necessitate significant infrastructure upgrades. Failure to comply with the revised GDPR frameworks could result in penalties exceeding 4% of annual global turnover.
          </p>
        </div>

        {/* Footer */}
        <p className="text-xs text-center text-muted-foreground mt-12 text-black">
          Page 12 of "Quarterly Financial Report 2024"
        </p>
      </div>
    </div>
  );
};

export default DocumentViewer;

