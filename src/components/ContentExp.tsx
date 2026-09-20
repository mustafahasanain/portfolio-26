type ContentExpProps = {
  contentExp: {
    title: string;
    date: string;
    responsibilities: string[];
  };
};

const ContentExp = ({ contentExp }: ContentExpProps) => {
  return (
    <div className="card-border rounded-xl p-10">
      <h1 className="font-semibold text-3xl">{contentExp.title}</h1>
      <p>{contentExp.date}</p>
      <p className="text-white-50">Responsibilities</p>
      <ul className="list-disc ms-5 text-white-50">
        {contentExp.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContentExp;