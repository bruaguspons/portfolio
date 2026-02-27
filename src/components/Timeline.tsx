interface Props {
  items: {
    title: string;
    description?: string;
    date?: string;
  }[];
}

const Timeline = ({ items }: Props): React.ReactNode => {
  return (
    <>
      {/* espacio inicial */}
      <div className="ml-6 w-px h-12 bg-linear-to-t from-zinc-300 to-transparent"></div>
      
      <div className="relative ml-6">
        {/* línea vertical */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-300"></div>


        {items.map((item, index) => (
          <div key={index} className={`${index < items.length - 1 ? "mb-10" : "mb-0"} ml-6 group`}>

            {/* Punto */}
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-300 ring-4 ring-white transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-blue-500 group-hover:to-sky-500">
              <span className="h-2 w-2 rounded-full bg-white"></span>
            </span>

            {/* Card */}
            <div className="relative bg-zinc-600/30 backdrop-blur-md p-4 rounded-lg border border-zinc-600/30 shadow-sm transition-all duration-300 hover:shadow-lg overflow-hidden">


              {/* border top animado */}
              <div className="absolute top-0 left-0 h-0.5 w-full bg-blue-500 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>

              {item.date && (
                <time className="text-sm text-neutral-200 transition-colors duration-300 group-hover:text-blue-400">
                  {item.date}
                </time>
              )}

              <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-blue-400">
                {item.title}
              </h3>

              {item.description && (
                <p className="mt-1 opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-40">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}

      </div>
      {/* espacio final */}
      <div className="ml-6 w-px h-12 bg-linear-to-t to-zinc-300 from-transparent"></div>
    </>
  );
};

export default Timeline;
