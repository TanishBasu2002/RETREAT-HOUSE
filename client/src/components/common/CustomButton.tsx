import { Button } from "@pankod/refine-mui";

import { CustomButtonProps } from "interfaces/common";

const CustomButton = ({
  type,
  title,
  backgroundColor = "#5E72E4",
  color = "#FFFFFF",
  fullWidth = false,
  icon,
  handleClick,
  disabled = false,
}: CustomButtonProps) => {
  return (
    <Button
      disabled={disabled}
      type={type === "submit" ? "submit" : "button"}
      sx={{
        flex: fullWidth ? 1 : "unset",
        padding: "12px 20px",
        width: fullWidth ? "100%" : "fit-content",
        minWidth: 130,
        backgroundColor,
        color,
        fontSize: 16,
        fontWeight: 600,
        gap: "10px",
        textTransform: "capitalize",
        borderRadius: 25,
        "&:hover": {
          opacity: 0.9,
          backgroundColor: "#324CDD",
        },
        "&:focus": {
          boxShadow: "none",
        },
      }}
      onClick={handleClick}
      startIcon={icon}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
