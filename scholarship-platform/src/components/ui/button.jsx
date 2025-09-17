export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition 
                  bg-indigo-500 text-white hover:bg-indigo-600 
                  disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
