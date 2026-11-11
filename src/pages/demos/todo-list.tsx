import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

function TodoList() {
  const [list, setList] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const uncompletedCount = list.filter((item) => !item.completed).length;
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      const newItem: TodoItem = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
      };
      setList((prev) => [...prev, newItem]);
      setInputValue("");
    }
  }
  function handleToggle(id: number) {
    setList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }
  function deleteItem(id: number) {
    setList((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="flex flex-col gap-2">
      <Input
        placeholder="Enter text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="flex justify-end">{uncompletedCount} tasks remaining</div>
      {list.length === 0 ? (
        <div>No task yet.</div>
      ) : (
        <div className="flex flex-col gap-2 pt-4">
          {list.map((item) => (
            <Field orientation="horizontal" key={item.id}>
              <Checkbox
                id={`todo-${item.id}`}
                checked={item.completed}
                onCheckedChange={() => handleToggle(item.id)}
              />
              <FieldLabel
                htmlFor={`todo-${item.id}`}
                className={item.completed && "line-through"}
              >
                {item.text}
              </FieldLabel>
              <Button variant="ghost" onClick={() => deleteItem(item.id)}>
                delete
              </Button>
            </Field>
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoList;
