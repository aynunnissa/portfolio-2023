import Image from 'next/image';

const Project = () => {
  return (
    <main className="py-10 px-8 sm:px-16 md:px-22 lg:px-44">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 pb-6">
        <div className="card">
          <div className="card-image lg">
            <Image
              src="/project/teamdash.svg"
              alt="Header icon"
              width={300}
              height={300}
            />
          </div>
          <div className="card-action">
            <a href="https://github.com/Teamdash-Propensi" target="_blank">
              <i class="ease-in-out duration-300 hover:text-blue-primary bi bi-github text-xl"></i>
            </a>
          </div>
          <div className="card-header">
            <h3 className="card-title">TEAM DASH x BNI as lead programmer</h3>
            <p className="card-subtitle">University Project</p>
          </div>
          <div className="card-body">
            <div className="mt-2">
              <p className="font-medium">Description:</p>
              <ul className="list-disc ps-4">
                <li>
                  Collaborated with BNI Marketing Team to automate project
                  monitoring via a microsite
                </li>
                <li>
                  Participated in analysis and designing process using draw.io
                  and Figma
                </li>
                <li>
                  Performed code review and performed deployment using Heroku
                  and Vercel
                </li>
                <li>Led the overall execution of the development pipeline</li>
                <li>Created test cases for User Acceptance Test (UAT)</li>
                <li>
                  Ready 24/7 to assist team members in solving programming
                  problems
                </li>
                <li>
                  Utilized Java, Spring Framework, JSON Web Token (JWT), Next
                  Js, ApexCharts, Axios, and Material UI to drive project
                  outcomes
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image lg">
            <Image
              src="/project/sifactory.jpg"
              alt="Header icon"
              width={300}
              height={200}
            />
          </div>
          <div className="card-action">
            <a
              href="https://github.com/aynunnissa/sifactory-dev"
              target="_blank"
            >
              <i class="ease-in-out duration-300 hover:text-blue-primary bi bi-github text-xl"></i>
            </a>
          </div>
          <div className="card-header">
            <h3 className="card-title">SIFACTORY as developer</h3>
            <p className="card-subtitle">University Project</p>
          </div>
          <div className="card-body">
            <p className="font-medium">Description:</p>
            <ul className="list-disc ps-4">
              <li>Led the entire deployment process</li>
              <li>Created an API endpoint for GET request</li>
              <li>
                Utilized Java SpringBoot authentication and authorization,
                PostgreSQL, and Bootstrap to drive project outcomes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
