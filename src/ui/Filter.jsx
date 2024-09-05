import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
    //! why should i set searchParams.set() and after that setSearchParams(searchParams) it ???
    //! ----->  if you set the value directly it will replace to all of the searchParams instead of add to them.😎😎
  }

  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>وضعیت</span>
      <div className="flex items-center gap-x-2 p-1 border border-secondary-100 bg-secondary-0 rounded-lg">
        {options.map(({ value, label }) => {
          const isActive = value === currentFilter;
          return (
            <button
              key={value}
              disabled={isActive}
              onClick={() => handleClick(value)}
              className={`whitespace-nowrap rounded-md px-4 py-1 font-bold transition-all duration-300
             ${
               isActive
                 ? "!bg-primary-900 text-white"
                 : "bg-secondary-0 text-secondary-800"
             } 
              `}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default Filter;
