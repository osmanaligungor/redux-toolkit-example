const Input = ({ value, placeholder, type, id, name, onChange }) => {
  return (
    <input
      value={value}
      className="h-10 w-full border rounded-md p-2 outline-none mt-3 file:rounded-full file:border-0 file:font-semibold file:bg-indigo-300 file:px-2 file:cursor-pointer"
      placeholder={placeholder}
      type={type}
      id={id}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;
