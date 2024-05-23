import Link from "next/link";
import Cards from "../components/cards";

function TopLoosers({ projects }) {
  return (
    <div className="grid grid-cols-5 gap-4">
      {projects.map((project, index) => (
        <li key={index}>
          <Link href={`/dashboard/${project.ticker}`}>
            <Cards data={project} />
          </Link>
        </li>
      ))}
    </div>
  );
}

export default TopLoosers;
