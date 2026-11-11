export type Demo = {
  id: string;
  title: string;
  path: string;
  label?: string[];
  description?: string;
};

export const demos: Demo[] = [
  {
    id: "todo-list",
    title: "Todo List",
    path: "/demo/todo-list",
  },
];
