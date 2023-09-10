const TeachingAssistant = ({ data }) => {
  const ExperienceDescription = ({ description }) => {
    if (!description?.length) return 'description not found';
    return description?.map((desc, index) => (
      <li key={`desc-${index}`} className="py-1">
        {desc}
      </li>
    ));
  };

  return (
    <div>
      {data?.data?.map((teaching, ind) => (
        <div
          key={teaching.course}
          className={`py-4 ${
            ind !== data?.data?.length - 1 && 'border-b-[2px]'
          } border-gray-200`}
        >
          <p className="font-bold text-lg">{teaching?.course}</p>
          <p className="text-gray-500 text-sm">{teaching?.date}</p>
          <div className="gap-3 mt-4">
            <div>
              <p className="font-semibold">Description</p>
              <ul className="list-disc px-4 pt-4 text-sm">
                <ExperienceDescription description={teaching?.description} />
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeachingAssistant;
