function Toggle() {
  return (
    <div className="toggle mx-auto flex items-center justify-center gap-24 align-bottom">
      <span className=" text-xl">Monthly</span>
      <input className="align-bottom" type="checkbox" id="temp" />
      <label className="align-bottom text-xl" for="temp">
        Yearly
      </label>
    </div>
  );
}

export default Toggle;
