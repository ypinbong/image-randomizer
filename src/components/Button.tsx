import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
import { Button as MaterialButton, ButtonProps } from "@mui/material";


interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
  spinnerSize?: number;
  shape?: "normal" | "pill";
  border?: "solid" | "dashed";
}
export const Button: ForwardRefExoticComponent<
  Omit<CustomButtonProps, "ref"> & RefAttributes<HTMLButtonElement>
> = forwardRef<HTMLButtonElement, CustomButtonProps>(function Button(
  { loading, spinnerSize, href, disabled, border, shape = "normal", color, ...buttonProps },
  ref,
) {
  return (
    <MaterialButton
      ref={ref}
      {...(href
        ? {
            to: href,
          }
        : {})}
      {...buttonProps}
      style={{
        boxShadow: "none",
        borderStyle: border,
        pointerEvents: disabled ? "none" : "auto",
        opacity: disabled ? 0.5 : 1,
        height: "40px",
        ...buttonProps.style,
        ...(shape === "pill"
          ? {
              borderRadius: 30,
            }
          : {}),
      }}
    >
      {buttonProps.children}
    </MaterialButton>
  );
});
