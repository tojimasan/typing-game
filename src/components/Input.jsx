import { Input as UiInput } from "@chakra-ui/react";
import { forwardRef } from "react";

const Input = forwardRef(({ onChange }, ref) => {
  return (
    <UiInput
      ref={ref}
      opacity={0}
      pos={"absolute"}
      bottom={"10"}
      left={"0"}
      onChange={onChange}
    />
  );
});
Input.displayName = "Input";

export { Input };
