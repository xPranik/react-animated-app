import React, { useEffect, useRef, useState } from "react";
import {
  InputContainer,
  InputIcon,
  InputLabel,
  InputStyled,
  InputWrapper,
} from "./InputStyled";

export const Input = (props) => {
  const {
    center = false,
    value = "",
    setValue,
    placeholder = "",
    label,
    size = "medium",
    type = "text",
    icon,
    number,
    max = "99",
  } = props;
  const inpRef = useRef(null);
  const [val, setVal] = useState(value);

  const onChangeHandler = (el) => {
    setVal(number ? el.target.value.replace(/\D/g, "") : el.target.value);
  };

  useEffect(() => {
    setVal(value);
  }, [value]);

  useEffect(() => {
    setValue(val);
  }, [val]);

  return (
    <InputWrapper center={center}>
      {label && (
        <InputLabel onClick={() => inpRef.current?.click()}>{label}</InputLabel>
      )}
      <InputContainer>
        {icon && <InputIcon>{icon}</InputIcon>}
        <InputStyled
          ref={inpRef}
          value={val}
          placeholder={placeholder}
          onChange={onChangeHandler}
          inpSize={size}
          type={type}
          maxLength={max}
          icon={!!icon}
        />
      </InputContainer>
    </InputWrapper>
  );
};
