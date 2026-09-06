import ButtonStyles from "@/Entities/Button/Types/ButtonStyles.ts";
import TextStyles from "@/Entities/Text/Types/TextStyles.ts";

const ButtonStyleToTextStyleMap = {
  [ButtonStyles.PRIMARY]: TextStyles.BLACK,
  [ButtonStyles.SECONDARY]: TextStyles.WHITE,
  [ButtonStyles.BORDER]: TextStyles.WHITE,
  [ButtonStyles.TRANSPARENT]: TextStyles.WHITE,
  [ButtonStyles.PRIMARY_RED]: TextStyles.WHITE,
};

export default ButtonStyleToTextStyleMap;
