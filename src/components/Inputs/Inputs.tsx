import { FieldValues } from 'react-hook-form';
interface InputsProps extends FieldValues {
  type: string;
  label: string;
  id: string;
  name: string;
  optional: boolean;
  required: boolean;
  errors?: string;
}
export const Inputs: React.FC<InputsProps> = ({
  type,
  label,
  id,
  name,
  required,
  optional,
  register,
  errors,
}) => {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        {required && <span className="inter-light text-xs">(required)</span>}
        {optional && <span className="inter-light text-xs">(optional)</span>}
        <input
          type={type}
          id={id}
          className="inter-light py-2 rounded-sm border w-full pl-2"
          {...register(name)}
        />
      </label>
      {errors && (
        <div className="min-h-[5vh]">
          {errors && (
            <label
              className="inter-light text-md text-red-500"
              htmlFor={`error-${name}`}
            >
              {errors}
            </label>
          )}
        </div>
      )}
    </div>
  );
};
