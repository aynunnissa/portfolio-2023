import Image from 'next/image';

const Achievement = () => {
  return (
    <main className="py-10 px-8 sm:px-16 md:px-22 lg:px-44">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 pt-2 pb-6">
        <div className="card">
          <div className="card-image">
            <Image
              src="/achievement/gemastik.png"
              alt="Header icon"
              width={300}
              height={300}
            />
          </div>
          <div className="card-action">
            <a href="https://github.com/aynunnissa/gemastik-FE" target="_blank">
              <i class="ease-in-out duration-300 hover:text-blue-primary bi bi-github text-xl"></i>
            </a>
            <a
              href="https://drive.google.com/file/d/1S0ug4p7HPt4tbqMUol-ZdJIqz6Ha0LQH/view?usp=sharing"
              target="_blank"
            >
              <i class="ease-in-out duration-300 text-red-900 hover:text-blue-primary bi bi-file-earmark-pdf-fill text-xl"></i>
            </a>
          </div>
          <div className="card-header">
            <h3 className="card-title">Finalist Gemastik 2022</h3>
            <p className="card-subtitle">Software Development Category</p>
          </div>
          <div className="card-body">
            <p>
              Built a mobile-friendly website to facilitate the implementation
              of circular economy as a better method of managing textile waste
            </p>
            <div className="mt-2">
              <p className="font-medium">Features:</p>
              <ul className="list-disc ps-4">
                <li>Tracking the distribution of textile waste</li>
                <li>Exchange Waste to Points</li>
                <li>Trash Pickup</li>
                <li>Scan QR</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <Image
              src="/achievement/kitasembuh.jpg"
              alt="Header icon"
              width={300}
              height={200}
            />
          </div>
          <div className="card-action">
            <a
              href="https://drive.google.com/file/d/1Xnor7qnQPZyUpB086YSy2nKoWYFrTD8r/view?usp=sharing"
              target="_blank"
            >
              <i class="ease-in-out duration-300 text-red-900 hover:text-blue-primary bi bi-file-earmark-pdf-fill text-xl"></i>
            </a>
          </div>
          <div className="card-header">
            <h3 className="card-title">Finalist Anforcom 2021</h3>
            <p className="card-subtitle">
              UI/UX Competition Universitas Diponegoro
            </p>
          </div>
          <div className="card-body">
            <p>
              Design application aim to help Covid-19 patients who have
              difficulty obtaining food or medicine while undergoing
              self-isolation with the help of volunteers.
            </p>
          </div>
          <div className="card-action"></div>
        </div>
        <div className="card">
          <div className="card-image">
            <Image
              src="/achievement/incentive.svg"
              alt="Header icon"
              width={300}
              height={200}
            />
          </div>
          <div className="card-action">
            <a
              href="https://drive.google.com/file/d/1g3qi1O3bcSFU8JUezoW4oh204swcEseF/view?usp=sharing"
              target="_blank"
            >
              <i class="ease-in-out duration-300 text-red-900 hover:text-blue-primary bi bi-file-earmark-pdf-fill text-xl"></i>
            </a>
          </div>
          <div className="card-header">
            <h3 className="card-title">Incentive Winner - PKM GT 2021</h3>
            <p className="card-subtitle">
              {`Title: "ELECTRONIC TAX CONCILIATION: ALTERNATIF PENYELESAIAN SENGKETA PAJAK BERBASIS ELEKTRONIK DAN `}
              <span className="text-black">DATA ANALYTICS</span>
              {`"`}
            </p>
          </div>
          <div className="card-body">
            <p>
              Proposing data analytics to assist mediators in advising disputing
              parties for faster, simpler, and cost-effective dispute
              resolution.
            </p>
          </div>
          <div className="card-action"></div>
        </div>
      </div>
    </main>
  );
};

export default Achievement;
