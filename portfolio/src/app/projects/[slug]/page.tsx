import { projects } from "@/content/projects";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <h1 className="text-3xl font-bold text-black">
        {project.title}
      </h1>

      <p className="mt-4 max-w-2xl text-gray-700">
        {project.description}
      </p>

      <p className="mt-6 text-sm text-gray-500">
        <span className="font-medium text-gray-700">Tech:</span>{" "}
        {project.tech}
      </p>

      {project.slug === "stock-sentiment-analyzer" && (
        <div className="mt-4">
          <a
            href="https://github.com/iluvcoding123/stock-sentiment-analyzer.git"
            target="_blank"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View GitHub Repository →
          </a>
        </div>
      )}
      {project.slug === "british-airways-tableau" && (
        <div className="mt-4">
          <a
            href="https://public.tableau.com/views/AirlineReviewDashboard_17630720914910/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
            target="_blank"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View Tableau Dashboard →
          </a>
        </div>
      )}

      {project.slug === "smartrefi" && (
        <div className="mt-4">
          <a
            href="https://github.com/iluvcoding123/smartrefi-data-management-system.git"
            target="_blank"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View GitHub Repository →
          </a>
        </div>
      )}

      {project.slug === "housing-price-prediction" && (
        <div className="mt-4">
          <a
            href="https://github.com/iluvcoding123/housing-price-predictor.git"
            target="_blank"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View GitHub Repository →
          </a>
        </div>
      )}

      {/* stock-sentiment-analyzer */}
      {project.slug === "stock-sentiment-analyzer" && (
        <div className="mt-8 max-w-2xl">
          <h2 className="text-lg font-semibold text-black">Approach</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
            <li>Collected and normalized financial news headlines by ticker.</li>
            <li>Applied sentiment classification to label each headline.</li>
            <li>Aggregated sentiment over time to identify market trends.</li>
          </ul>
        </div>
      )}
      {project.slug === "stock-sentiment-analyzer" && (
        <section className="mt-10">
          <h2 className="mb-4 text-lg font-semibold text-black">
            Results
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <a href="/images/stock-sentiment-headlines.png" target="_blank">
              <img
                src="/images/stock-sentiment-headlines.png"
                alt="Stock sentiment headlines table"
                className="w-full rounded-lg border"
              />
              <p className="mt-2 text-xs text-gray-500">
                Sample financial news headlines mapped to sentiment labels.
              </p>
            </a>
            <a href="/images/stock-sentiment-distribution.png" target="_blank">
              <img
                src="/images/stock-sentiment-distribution.png"
                alt="Sentiment label distribution chart"
                className="w-full rounded-lg border"
              />
              <p className="mt-2 text-xs text-gray-500">
                Distribution of sentiment classifications across collected headlines.
              </p>
            </a>
            <a href="/images/stock-sentiment-trends.png" target="_blank">
              <img
                src="/images/stock-sentiment-trends.png"
                alt="Sentiment trends over time"
                className="w-full rounded-lg border"
              />
              <p className="mt-2 text-xs text-gray-500">
                Aggregated sentiment trends over time by ticker.
              </p>
            </a>
          </div>
        </section>
      )}

      {/* british-airways-tableau */}
      {project.slug === "british-airways-tableau" && (
        <div className="mt-8 max-w-2xl">
          <h2 className="text-lg font-semibold text-black">Approach</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
            <li>Cleaned and structured airline customer review data for analysis.</li>
            <li>Built interactive Tableau dashboards with filters for aircraft type, cabin class, country, and service category.</li>
            <li>Designed views to highlight satisfaction drivers and recurring customer pain points.</li>
          </ul>
        </div>
      )}
      {project.slug === "british-airways-tableau" && (
        <section className="mt-10">
          <h2 className="mb-4 text-lg font-semibold text-black">
            Results
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <a href="/images/airline-1.png" target="_blank">
              <img
                src="/images/airline-1.png"
                alt="British Airways overall customer review dashboard"
                className="w-full rounded-lg border"
              />
              <p className="mt-2 text-xs text-gray-500">
                Overview dashboard summarizing customer ratings, trends over time, and geographic distribution.
              </p>
            </a>

            <a href="/images/airline-2.png" target="_blank">
              <img
                src="/images/airline-2.png"
                alt="Business and economy class ratings by aircraft"
                className="w-full rounded-lg border"
              />
              <p className="mt-2 text-xs text-gray-500">
                Aircraft-level ratings segmented by traveler type and seat class to highlight service differences.
              </p>
            </a>

            <a href="/images/airline-3.png" target="_blank">
              <img
                src="/images/airline-3.png"
                alt="Entertainment ratings by aircraft and country"
                className="w-full rounded-lg border"
              />
              <p className="mt-2 text-xs text-gray-500">
                Entertainment satisfaction analysis across aircraft models and regions.
              </p>
            </a>
          </div>
        </section>
      )}

      {/* smartrefi */}
      {project.slug === "smartrefi" && (
        <div className="mt-8 max-w-2xl">
          <h2 className="text-lg font-semibold text-black">Approach</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
            <li>Designed a normalized relational schema to model borrowers, lenders, and offers.</li>
            <li>Implemented pricing logic to evaluate refinance eligibility.</li>
            <li>Analyzed borrower outcomes to quantify interest rate improvements.</li>
          </ul>
        </div>
      )}
      {project.slug === "smartrefi" && (
        <section className="mt-10">
          <h2 className="mb-4 text-lg font-semibold text-black">
            Results
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <a href="/images/smartrefi-eer.png" target="_blank">
              <img
                src="/images/smartrefi-eer.png"
                alt="SmartRefi entity-relationship diagram"
                className="w-full rounded-lg border"
              />
              <p className="mt-2 text-xs text-gray-500">
                Entity-relationship model defining borrowers, lenders, offers, and refinance contracts.
              </p>
            </a>
            <a href="/images/smartrefi-uml.png" target="_blank">
              <img
                src="/images/smartrefi-uml.png"
                alt="SmartRefi UML diagram"
                className="w-full rounded-lg border"
              />
              <p className="mt-2 text-xs text-gray-500">
                System-level UML diagram showing application and data flow.
              </p>
            </a>
            <a href="/images/smartrefi-scatter.png" target="_blank">
              <img
                src="/images/smartrefi-scatter.png"
                alt="GPA versus offer pricing scatter plot"
                className="w-full rounded-lg border"
              />
              <p className="mt-2 text-xs text-gray-500">
                Relationship between borrower GPA and offered interest rates.
              </p>
            </a>
            <a href="/images/smartrefi-bar.png" target="_blank">
              <img
                src="/images/smartrefi-bar.png"
                alt="Interest rate improvement from refinancing"
                className="w-full rounded-lg border"
              />
              <p className="mt-2 text-xs text-gray-500">
                Interest rate improvement achieved through refinancing.
              </p>
            </a>
            <a href="/images/smartrefi-lender.png" target="_blank">
              <img
                src="/images/smartrefi-lender.png"
                alt="SmartRefi lender disbursement analysis"
                className="w-full rounded-lg border"
              />
              <p className="mt-2 text-xs text-gray-500">
                Lender participation and disbursement distribution.
              </p>
            </a>
          </div>
        </section>
      )}

      {/* housing-price-predictor */}
      {project.slug === "housing-price-prediction" && (
        <div className="mt-8 max-w-2xl">
          <h2 className="text-lg font-semibold text-black">Approach</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
            <li>Performed data cleaning and feature engineering on housing attributes.</li>
            <li>Trained and evaluated an XGBoost regression model.</li>
            <li>Deployed the trained model behind a FastAPI inference endpoint.</li>
          </ul>
        </div>
      )}
      {project.slug === "housing-price-prediction" && (
        <section className="mt-10">
          <h2 className="mb-4 text-lg font-semibold text-black">
            Results
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <a href="/images/housing-request.png" target="_blank">
              <img
                src="/images/housing-request.png"
                alt="Housing price predictor API request example"
                className="w-full rounded-lg border"
              />
              <p className="mt-2 text-xs text-gray-500">
                Example POST request to the housing price prediction API.
              </p>
            </a>

            <a href="/images/housing-response.png" target="_blank">
              <img
                src="/images/housing-response.png"
                alt="Housing price predictor API response example"
                className="w-full rounded-lg border"
              />
              <p className="mt-2 text-xs text-gray-500">
                API response returning predicted home sale price.
              </p>
            </a>

            <a href="/images/housing-predicted-vs-actual.png" target="_blank">
              <img
                src="/images/housing-predicted-vs-actual.png"
                alt="Actual versus predicted sale price plot"
                className="w-full rounded-lg border"
              />
              <p className="mt-2 text-xs text-gray-500">
                Predicted versus actual sale prices on the test dataset.
              </p>
            </a>

            <a href="/images/housing-feature-importance.png" target="_blank">
              <img
                src="/images/housing-feature-importance.png"
                alt="XGBoost feature importance chart"
                className="w-full rounded-lg border"
              />
              <p className="mt-2 text-xs text-gray-500">
                Feature importance scores from the trained XGBoost model.
              </p>
            </a>
          </div>
        </section>
      )}
    </main>
  );
}