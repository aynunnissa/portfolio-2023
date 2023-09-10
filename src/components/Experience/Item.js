const ACTIVITIESDATA = {
  bug: '',
};

const ExperienceItem = ({ data }) => {
  const ExperienceDescription = ({ description }) => {
    if (!description?.length) return 'description not found';
    return description?.map((desc, index) => (
      <li key={`desc-${index}`} className="py-1">
        {desc}
      </li>
    ));
  };

  const ActivitiesItem = code => {
    let icon = '';
    let title = '';
    switch (code) {
      case 'bug':
        icon = 'bi bi-bug-fill text-red-600';
        title = 'Bug Fixing';
        break;
      case 'coding':
        icon = 'bi bi-code-slash';
        title = 'Coding';
        break;
      case 'learn':
        icon = 'bi bi-search-heart-fill text-blue-primary';
        title = 'Research and Learning';
        break;
      case 'responsive':
        icon = 'bi bi-columns-gap text-green-700';
        title = 'Responsive Design';
        break;
      case 'database':
        icon = 'bi bi-database-fill-gear text-green-700';
        title = 'Database Design & Management';
        break;
      case 'api-design':
        icon = 'bi bi-arrow-left-right';
        title = 'API Design';
        break;
      case 'api-int':
        icon = 'bi bi-arrow-left-right';
        title = 'API Integration';
        break;
      case 'performance':
        icon = 'bi bi-lightning-fill text-orange-500';
        title = 'Performance Optimization';
        break;
      case 'refactor':
        icon = 'bi bi-gear-wide-connected';
        title = 'Code Refactoring';
        break;
      case 'doc':
        icon = 'bi bi-file-earmark-code-fill text-blue-primary';
        title = 'Documentation';
        break;
    }

    return (
      <div key={code} className="my-2 flex gap-2 items-center">
        <i class={`${icon} text-lg`}></i>
        <p className="font-medium text-gray-700">{title}</p>
      </div>
    );
  };

  const Activities = ({ activities }) => {
    if (!activities?.length) return 'activities not found';

    return activities?.map(act => ActivitiesItem(act));
  };

  return (
    <div className="flex-1">
      <h1 className="text-[24px] font-bold">{data?.company}</h1>
      <p className="text-gray-500 text-sm">{data?.date}</p>
      <div className="flex flex-col lg:flex-row gap-3 mt-8">
        <div className="flex-1">
          <h1 className="font-semibold">Description</h1>
          <ul className="list-disc px-4 pt-4 text-sm">
            <ExperienceDescription description={data?.description} />
          </ul>
        </div>
        <hr className="border-e-[1.5px] h-auto border-grey-100" />
        <div className="flex-1 ps-0 lg:ps-8">
          <h1 className="font-semibold">Activities</h1>
          <div className="pt-4">
            <Activities activities={data?.activities} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
