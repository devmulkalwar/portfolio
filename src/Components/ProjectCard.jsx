

const ProjectCard = ({
  title,
  description,
  image,
  liveLink,
  repoLink,
  tags,
}) => {

  const tagColors = {
    Js: "bg-yellow-500 text-white",
    React: "bg-cyan-500 text-white",
    Css: "bg-blue-600 text-white",
    Html: "bg-orange-600 text-white",
    Java: "bg-red-600 text-white",
    NodeJs: "bg-green-600 text-white",
    Mongodb: "bg-green-500 text-white",
    Express: "bg-green-700 text-white",
    Firebase: "bg-yellow-400 text-white",
    Auth: "bg-indigo-500 text-white",
    Api: "bg-teal-500 text-white",
    TailwindCSS: "bg-pink-500 text-white",
    DaisyUI: "bg-purple-600 text-white",
  };

  const truncatedDescription =
  description.length > 70
    ? description.substring(0, 100) + "..."
    : description;
  
  return (
    <div className="bg-base-300 rounded-lg shadow-lg overflow-hidden w-full h-full max-w-xs mx-auto flex flex-col transition-transform transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-32 object-cover" />
      <div className="p-4 flex-grow">
        <h3 className="font-bold text-center text-xl">{title}</h3>
        <p className="text-gray-600 text-center">{truncatedDescription}</p>
        <div className="mt-2 flex flex-wrap justify-center">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`${tagColors[tag] || "bg-gray-300 text-black"} badge mr-2 mb-1 rounded-lg`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <a
          href={liveLink}
          className="btn btn-primary mr-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <a
          href={repoLink}
          className="btn btn-outline btn-success"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
