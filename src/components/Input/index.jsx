import classes from "./Input.module.scss";
import classNames from "classnames";
const Input = ({
  className,
  onBlur,
  type,
  onChange,
  name,
  placeholder,
  value,
  style,
  searchIcon,
  error,
  errorClass,
  ...restProps
}) => (
  <>
    <input
      // autoComplete="off"
      style={style}
      className={classNames(
        classes.input,
        className,
        "inputClass",
        searchIcon ? "searchIconInputClass" : ""
      )}
      type={type}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      onBlur={onBlur}
      value={value}
      {...restProps}
    />
    {error && (
      <div className={errorClass ? errorClass : "formError"}>
        <span className="text-danger">{!!error ? error : ""}</span>
      </div>
    )}
  </>
);

export default Input;
