import * as React from "react";
import SelectMenu from "react-select";
import chroma from "chroma-js";

const colourStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "white",
    borderWidth: "1px",
    borderColor: isFocused ? "var(--primary-color)" : "#E5E9EB",
    boxShadow: "none",
    height: "48px",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all .25s ease-in-out",
    ":hover": {
      borderColor: "var(--primary-color)",
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    // const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isSelected ? "var(--primary-color)" : data.color,
      color: isSelected ? "#fff" : "#000",
      cursor: !isSelected && "pointer",
      ":active": {
        // backgroundColor: !isDisabled && (isSelected ? "data.color" : undefined),
      },
    };
  },
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: "15px",
    lineHeight: "20px",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    fontSize: "15px",
    lineHeight: "20px",
  }),
};

export default function Select({
  placeholder = "",
  selectRef,
  options,
  onChange,
  required,
  value,
  isSearchable,
  isClearable,
  ...rest
}) {
  return (
    <div>
      <SelectMenu
        className="basic-single"
        classNamePrefix="select"
        options={options}
        placeholder={placeholder}
        styles={colourStyles}
        ref={selectRef}
        openMenuOnFocus={true}
        isSearchable={isSearchable}
        isClearable={isClearable}
        onChange={onChange}
        value={value}
        input
        components={{
          IndicatorSeparator: () => null,
        }}
        {...rest}
      />
      {required && (
        <input
          tabIndex={-1}
          autoComplete="off"
          style={{
            opacity: 0,
            height: 0,
            position: "absolute",
          }}
          value={value}
          required={required}
        />
      )}
    </div>
  );
}
