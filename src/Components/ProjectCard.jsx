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
    <div className=" carousel-item bg-base-300 rounded-lg shadow-lg overflow-hidden w-full h-full max-w-xs mx-auto flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img src={image} alt={title} className="w-full h-60 p-4 object-cover " />
      <div className="p-4 flex-grow">
        <h3 className="font-bold text-left text-xl mb-2 ">{title}</h3>
        <p className=" text-justify mb-3">{truncatedDescription}</p>
        <div className="mt-2 flex flex-wrap justify-start">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`${tagColors[tag] || "bg-gray-300 text-black"} badge mr-2 mb-1 rounded-lg px-3 py-1 text-xs font-semibold`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-between mb-4 px-4">
        <a
          href={liveLink}
          className="btn btn-primary flex-1 mr-2 transition-transform duration-200 transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <a
          href={repoLink}
          className="btn btn-outline btn-success flex-1 transition-transform duration-200 transform hover:scale-105"
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
