'use client';

import ExperienceItem from '@/components/Experience/Item';
import data from '@/data/experience.js';
import { useState } from 'react';

const Experience = () => {
  const [active, setActive] = useState(0);
  const [expData, setExpData] = useState(data[0]);

  function changeActiveIndex(ind) {
    setActive(ind);
    setExpData(data[ind]);
  }

  const ListCompany = () => {
    return data?.map((exp, index) => (
      <div key={`company-${index}`}>
        <button
          className={`btn btn-sm ${
            active === index
              ? 'btn-primary'
              : 'btn-primary-reverse bg-transparent border-0'
          }`}
          onClick={() => changeActiveIndex(index)}
        >
          {exp.company}
        </button>
      </div>
    ));
  };

  return (
    <main className="py-10 px-8 sm:px-16 lg:px-22 xl:px-44">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="flex md:min-w-fit md:w-[20%] flex-row md:flex-col gap-4 pt-2 w-full max-w-full overflow-auto pb-4">
          <ListCompany />
        </div>
        <ExperienceItem data={expData} />
      </div>
    </main>
  );
};

export default Experience;
