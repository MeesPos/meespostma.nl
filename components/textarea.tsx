import { cn } from "../utils/cn";

export default function Textarea({
  name,
  label,
  defaultValue,
  autoComplete,
  inputClassName,
  divClassName,
  labelClassName,
  errors,
  onChange,
}: {
  name: string;
  label: string;
  defaultValue?: string;
  autoComplete?: string;
  inputClassName?: string;
  divClassName?: string;
  labelClassName?: string;
  errors?: Array<string>;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
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
        {label}
      </label>

      <div className="mt-1">
        <textarea
          id={name}
          name={name}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          className={cn(
            "block w-full appearance-none rounded-md border border-gray-300 dark:border-gray-500 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
            inputClassName
          )}
          onChange={onChange}
        />
      </div>

      <ul className="mt-1">
        {errors?.map((error, index) => {
          return (
            <li className="text-red-400" key={index}>
              {error}
            </li>
          );
        })}
      </ul>
    </div>
  );
}