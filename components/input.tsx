import { cn } from "../utils/cn";

export default function Input({
  name,
  type,
  autoComplete,
  inputClassName,
  divClassName,
  labelClassName,
  onChange,
}: {
  name: string;
  type: string;
  autoComplete: string;
  inputClassName?: string;
  divClassName?: string;
  labelClassName?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className={divClassName}>
      <label
        htmlFor={name}
        className={cn(
          "block text-sm font-medium text-gray-700 dark:text-white",
          labelClassName
        )}
      >
        Email address
      </label>

      <div className="mt-1">
        <input
          id={name}
          name={name}
          type={type}
          autoComplete={autoComplete}
          className={cn(
            "block w-full appearance-none rounded-md border border-gray-300 dark:border-gray-500 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
            inputClassName
          )}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
