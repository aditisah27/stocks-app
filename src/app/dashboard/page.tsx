// app/dashboard/page.js
import DashboardPage from "./dashboardPage";

// Fetch data from the API
async function getProjects() {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=97ZQ3CFC3FO34UID
  `,
    { cache: "no-store" }
  );
  const data = await res.json();

  console.log(data);

  return data;
}

// Server Component for Data Fetching
export default async function Page() {
  const projects = await getProjects();
  return (
    <div>
      <DashboardPage projects={projects} />
    </div>
  );
}
