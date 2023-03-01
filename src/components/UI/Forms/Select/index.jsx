import * as React from "react";
import SelectMenu from "react-select";
import { Controller } from "react-hook-form";

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
    return {
      ...styles,
      backgroundColor: isSelected ? "#E5E9EB;" : data.color,
      color: isSelected ? "#000" : "#000",
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

export default function CSelect({
  placeholder,
  selectRef,
  options,
  label,
  selectId,
  defaultValue,
  name = "",
  inputId,
  control,
  errors,
  validation,
  menuPlacement = "bottom",
  isSearchable = false,
  isDisabled = false,
  isOptionDisabled = () => {},
  customOnChange = (e) => {},
  ...rest
}) {
  return (
    <div>
      <Controller
        control={control}
        rules={validation}
        name={name}
        render={({ field: { value, onChange, name } }) => {
          return (
            <SelectMenu
              className="basic-single"
              menuPlacement={menuPlacement}
              classNamePrefix="select"
              options={options}
              placeholder={placeholder || ""}
              defaultValue={defaultValue}
              styles={colourStyles}
              ref={selectRef}
              openMenuOnFocus={true}
              isSearchable={isSearchable}
              isDisabled={isDisabled}
              isOptionDisabled={isOptionDisabled}
              value={value}
              auto
              onChange={(e) => {
                onChange(e);
                customOnChange(e, name);
              }}
              id={selectId}
              components={{
                IndicatorSeparator: () => null,
              }}
              {...rest}
            />
          );
        }}
      />
      {errors?.[name]?.message && <span>{errors?.[name]?.message}</span>}

      {/* {required && (
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
      )} */}
    </div>
  );
}
