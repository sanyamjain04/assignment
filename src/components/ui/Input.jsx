
const Input = ({
  id,
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  autofocus,
  required,
}) => {
  return (
    <label
      htmlFor={id}
      className="relative overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-lg focus-within:border-violet-600 focus-within:ring-1 focus-within:ring-violet-600 sm:w-80"
    >
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
        autoFocus={autofocus}
        required={required}
        autoComplete="off"
      />

      <span className="absolute left-3 top-2 -translate-y-1/2 text-xs text-violet-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs font-semibold">
        {label}
      </span>
    </label>
  );
};

export default Input;
