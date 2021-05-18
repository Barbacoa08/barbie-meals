import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Spacer } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";
import { useState } from "react";

export interface IToggleButton {
  isChecked: boolean;
  label: string;
  labelElement?: JSX.Element;
  onChange: (isChecked: boolean) => void;
}

export const ToggleButton = ({
  isChecked,
  label,
  labelElement,
  onChange,
}: IToggleButton) => {
  const [switchId] = useState(`toggle-button-${label.replace(/ /g, "_")}`);

  return (
    <FormControl
      alignItems="center"
      data-testid="ToggleButton-root"
      display="flex"
      px="1"
    >
      <FormLabel htmlFor={switchId} my="0" mx="1">
        {labelElement || label}
      </FormLabel>

      <Spacer />

      <Switch
        onChange={(e) => onChange(e.target.checked)}
        isChecked={isChecked}
        id={switchId}
      />
    </FormControl>
  );
};
