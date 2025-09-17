export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full px-3 py-2 rounded-lg border 
                  border-gray-300 focus:ring-2 focus:ring-indigo-400 
                  outline-none ${className}`}
      {...props}
    />
  );
}
