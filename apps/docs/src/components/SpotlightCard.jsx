export default function SpotlightCard({ title, icon, children, className = '' }) {
  return (
    <div
      className={`!mt-0 relative h-full bg-slate-300 dark:bg-slate-800 rounded-2xl p-px before:content-[''] after:content-[''] before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-700 dark:before:bg-slate-600 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-950 dark:after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden ${className}`}
    >
      <div className="relative h-full bg-slate-200 dark:bg-slate-900 p-6 pb-12 rounded-[inherit] z-20 overflow-hidden">
        {/* Radial gradient */}
        <div
          className="absolute bottom-0 w-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none left-1/2 -z-10 aspect-square"
          aria-hidden="true"
        >
          <div className="absolute inset-0 translate-z-0 bg-accent-200/60 dark:bg-accent-950 rounded-full blur-[80px]"></div>
        </div>

        <div className="flex flex-col h-full !mt-0">
          {/* Icon */}
          <div className="relative inline-flex self-start p-3 mt-4 text-white rounded-lg bg-accent-600 dark:bg-accent-950">
            {/* <img src={icon.src} alt={title} className="w-6 h-6" /> */}
            {icon}
          </div>

          {/* Text */}
          <div className="grow">
            <h3 className="!text-xl lg:!text-2xl font-bold text-slate-200">{title}</h3>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
