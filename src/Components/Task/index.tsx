import { CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Checkbox, Input, Text } from "@chakra-ui/react";

import React from "react";
import { useState } from "react";

type TaskProps = {
  text: string;
  id: number;
  onEditItem: (id: number, value: string) => void;
  onClick: () => void;
  checked: boolean;
  onChange: () => void;
};

export default function Task({
  text,
  id,
  onClick,
  onEditItem,
  checked,
  onChange,
}: TaskProps) {
  const [edit, setEdit] = useState<boolean>(false);
  const [newValue, setNewValue] = useState<string>(text);
  function handleEdit() {
    setEdit(true);
  }

  function handleSave() {
    setEdit(false);
    onEditItem(id, newValue);
  }
  return (
    <Box
      key={id}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      display="flex"
      m={4}
      boxShadow="base"
      minWidth="400px"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
    >
      <Box display="flex" flexDirection="column" alignItems="flexStart" m={5}>
        <DeleteIcon onClick={onClick} />
        <Checkbox colorScheme="green" checked={checked} onChange={onChange}>
          Done
        </Checkbox>
      </Box>

      {edit === true ? (
        <>
          <Input
            value={newValue}
            onChange={(ev) => setNewValue(ev.target.value)}
          />
          <CheckIcon onClick={handleSave} />
        </>
      ) : (
        <>
          {checked === true ? (
            <Text fontSize="30px" alignSelf="center" as="s">
              {text}
            </Text>
          ) : (
            <Text fontSize="30px" alignSelf="center" as="i">
              {text}
            </Text>
          )}

          <EditIcon m={8} onClick={handleEdit} />
        </>
      )}
    </Box>
  );
}
