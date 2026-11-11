import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "cn";
import { Trash2 } from "lucide-react";
import { useState } from "react";

type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

type FilterType = "all" | "active" | "completed";

function TodoList() {
  const [list, setList] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [filter, setFilter] = useState<FilterType>("all");
  const uncompletedCount = list.filter((item) => !item.completed).length;
  const filteredList = list.filter((item) => {
    if (filter === "active") return !item.completed;
    if (filter === "completed") return item.completed;
    return true;
  });
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
  function handleDelete(id: number) {
    setList((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Enter text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="flex justify-between gap-4">
        <ToggleGroup
          variant="outline"
          defaultValue={[filter]}
          onValueChange={(value) => {
            if (value[0]) setFilter(value[0] as FilterType);
          }}
        >
          <ToggleGroupItem value="all" aria-label="Toggle all">
            All
          </ToggleGroupItem>
          <ToggleGroupItem value="active" aria-label="Toggle active">
            Active
          </ToggleGroupItem>
          <ToggleGroupItem value="completed" aria-label="Toggle completed">
            Completed
          </ToggleGroupItem>
        </ToggleGroup>
        {list.length > 0 && <div>{uncompletedCount} tasks remaining</div>}
      </div>
      {filteredList.length === 0 ? (
        <div>{list.length === 0 ? "No task yet." : "No matching tasks."}</div>
      ) : (
        <div className="flex flex-col gap-2">
          {filteredList.map((item) => (
            <Field orientation="horizontal" key={item.id}>
              <Checkbox
                id={`todo-${item.id}`}
                checked={item.completed}
                onCheckedChange={() => handleToggle(item.id)}
              />
              <FieldLabel
                htmlFor={`todo-${item.id}`}
                className={cn(item.completed && "line-through")}
              >
                {item.text}
              </FieldLabel>
              <Button
                variant="ghost"
                onClick={() => handleDelete(item.id)}
                aria-label={`Delete ${item.text}`}
              >
                <Trash2 />
              </Button>
            </Field>
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoList;
