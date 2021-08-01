import { Button, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Task from "../../Components/Task";

export default function MainPage() {
  const [items, setItems] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");

  function handleOnSubmit() {
    setItems([...items, value]);
  }
  function handleOnCreateTask(event: any) {
    setValue(event.target.value);
  }

  function handleOnDelete(item: any) {
    const newItems = items.filter((x) => x !== item);
    setItems(newItems);
  }

  return (
    <div>
      <Text>ToDo</Text>
      <div>
        <Input
          name="taskToDo"
          value={value}
          onChange={handleOnCreateTask}
          type="text"
        />
        <Button onClick={handleOnSubmit} type="submit">
          Add
        </Button>
      </div>
      <div>
        <h2>Tasks</h2>
        <span>
          {items.map((item: any, index: number) => (
            <Task id={item.id} key={index} onClick={() => handleOnDelete(item)}>
              {item}
            </Task>
          ))}
        </span>
      </div>
    </div>
  );
}
