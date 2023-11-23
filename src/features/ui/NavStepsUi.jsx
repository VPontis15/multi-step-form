function NavStepsUi({ number, title, description, isActive }) {
  return (
    <div className="flex gap-4 items-center">
      <span
        className={
          isActive
            ? "bg-slate-300 text-slate-800"
            : "bg-transparent border border-1 rounded-full px-4 py-2 text-white"
        }
      >
        {number}
      </span>
      <div>
        <h3 className="text-gray-200 uppercase">{title}</h3>
        <span className="text-white uppercase">{description}</span>
      </div>
    </div>
  );
}

export default NavStepsUi;
