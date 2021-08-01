import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  Text,
  VStack,
} from "@chakra-ui/react";

import React from "react";
import { useState } from "react";
import Task from "../../Components/Task";

type ItemValue = {
  id: number;
  value: string;
};

export default function MainPage() {
  const [items, setItems] = useState<ItemValue[]>([]);
  const [value, setValue] = useState<string>("");

  function handleOnSubmit() {
    const todo = {
      id: items.length + 1,
      value: value,
    };
    setItems([...items, todo]);
  }
  function handleOnInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleOnDelete(item: ItemValue) {
    const newItems = items.filter((x) => x !== item);
    setItems(newItems);
  }
  function handleOnEdit(id: number, value: string) {
    const newItems = [...items];
    const editItem = newItems.find((item) => item.id === id);

    if (!editItem) {
      return;
    }
    editItem.value = value;
    setItems(newItems);
  }

  return (
    <VStack display="flex" flexDirection="column">
      <Text fontSize="50px" color="teal" as="i">
        ToDo
      </Text>
      <div>
        <InputGroup size="md" display="flex" flexDirection="column">
          <Input
            pr="4.5rem"
            size="lg"
            variant="outline"
            placeholder="Task"
            name="taskToDo"
            value={value}
            onChange={handleOnInputChange}
            type="text"
          />
          <Button
            onClick={handleOnSubmit}
            type="submit"
            colorScheme="teal"
            m={2}
          >
            Add
          </Button>
        </InputGroup>
      </div>
      <div>
        <Text fontSize="4xl" color="gray.500" p={6} display="flex">
          Tasks
        </Text>
        <Box
          borderColor="gray.400"
          borderBottom="1px"
          minWidth="400px"
          width="100%"
        />
        <HStack display="flex" flexDirection="column" m={5}>
          {items.map((item, index: number) => (
            <Task
              onEditItem={handleOnEdit}
              id={item.id}
              key={index}
              text={item.value}
              onClick={() => handleOnDelete(item)}
            />
          ))}
        </HStack>
      </div>
    </VStack>
  );
}
