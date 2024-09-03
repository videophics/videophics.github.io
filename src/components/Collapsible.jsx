import { useRef, useState } from "react";

const Collapsible = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const ref = useRef();

  const [height, setHeight] = useState();

  const handleToggle = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
    setHeight(ref.current.clientHeight);
  };

  const classes = `w-full ${isExpanded ? "is-expanded" : null}`;
  const currentHeight = isExpanded ? height : 0;
  return (
    <div className={classes}>
      <div className="flex flex-col gap-2 mb-3 border-b border-gray-600/70">
        <button className="text-xl font-[500] text-white text-left _collapsible flex items-center" onClick={handleToggle}>
          {title + " "}
          <div className={"w-fit ml-auto " + (isExpanded && "transform rotate-180")}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
          </svg>
          </div>
        </button>
        <div
          className="text-sm md:text-[15px] text-gray-400 leading-6 _card-collapse mb-3"
          style={{ height: currentHeight + "px" }}
        >
          <div className="_card-body py-4" ref={ref}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapsible;
