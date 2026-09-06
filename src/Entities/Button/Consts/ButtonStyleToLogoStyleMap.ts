import ButtonStyles from "@/Entities/Button/Types/ButtonStyles.ts";
import LogoStyles from "@/Entities/Logo/Types/LogoStyles.ts";

const ButtonStyleToTextStyleMap = {
  [ButtonStyles.PRIMARY]: LogoStyles.BLACK,
  [ButtonStyles.SECONDARY]: LogoStyles.WHITE,
  [ButtonStyles.BORDER]: LogoStyles.WHITE,
  [ButtonStyles.TRANSPARENT]: LogoStyles.WHITE,
  [ButtonStyles.PRIMARY_RED]: LogoStyles.WHITE,
};

export default ButtonStyleToTextStyleMap;
