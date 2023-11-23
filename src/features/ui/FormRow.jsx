function FormRow({ label, children }) {
  return (
    <div className="space-y-2">
      <label
        className="block text-form-label"
        htmlFor={children.props.id}
        aria-label={label}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default FormRow;
