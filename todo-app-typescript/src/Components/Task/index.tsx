import { CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

type TaskProps = {
  text: string;
  id: number;
  onEditItem: (id: number, value: string) => void;
  onClick: () => void;
};

export default function Task({ text, id, onClick, onEditItem }: TaskProps) {
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
      width="100%"
    >
      <DeleteIcon onClick={onClick} m={5} />

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
          <Text fontSize="30px">{text}</Text>
          <EditIcon m={8} onClick={handleEdit} />
        </>
      )}
    </Box>
  );
}
