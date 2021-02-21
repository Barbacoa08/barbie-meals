import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Switch } from "@chakra-ui/switch";
import { useState } from "react";

export interface IToggleButton {
  isChecked: boolean;
  label: string;
  onChange: (isChecked: boolean) => void;
}

export const ToggleButton = ({ isChecked, label, onChange }: IToggleButton) => {
  const [switchId] = useState(`toggle-button-${label.replace(/ /g, "_")}`);

  return (
    <FormControl
      alignItems="center"
      data-testid="ToggleButton-root"
      display="flex"
      px="1"
    >
      <FormLabel htmlFor={switchId} my="0" mx="1">
        {label}
      </FormLabel>

      <Switch
        onChange={(e) => onChange(e.target.checked)}
        isChecked={isChecked}
        id={switchId}
      />
    </FormControl>
  );
};
