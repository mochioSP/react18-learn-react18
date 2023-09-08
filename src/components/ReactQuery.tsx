import { ErrorBoundary } from "react-error-boundary";
import { Suspense, useState, useTransition } from "react";

import { Sidebar } from "./Sidebar";
import { AlbumList } from "./AlbumList";
import { Todo } from "./TodoList";

type Tabs = "todo" | "album";

export const ReactQuery = () => {
  const [selectedTab, setSelectedTab] = useState("todo");
  const [isPending, startTransition] = useTransition();

  const buttonStyle = {
    padding: "12px",
    fontSize: "16px",
    border: "none",
    opacity: isPending ? "0.5" : "1",
  };

  const albumButtonStyle = {
    ...buttonStyle,
    backgroundColor: selectedTab === "album" ? "royalblue" : "white",
    color: selectedTab === "album" ? "white" : "black",
  };

  const todoButtonStyle = {
    ...buttonStyle,
    backgroundColor: selectedTab === "todo" ? "royalblue" : "white",
    color: selectedTab === "todo" ? "white" : "black",
  };

  const onClickTabButton = (tab: Tabs) => {
    startTransition(() => {
      setSelectedTab(tab);
    });
  };

  return (
    <div style={{ display: "flex", padding: "16px" }}>
      <Sidebar />
      <div style={{ flexGrow: "1" }}>
        <button style={todoButtonStyle} onClick={() => onClickTabButton("todo")}>
          Todo
        </button>
        <button style={albumButtonStyle} onClick={() => onClickTabButton("album")}>
          Album
        </button>
        <ErrorBoundary fallback={<h1>Todo or AlbumList エラーです</h1>}>
          <Suspense fallback={<p>Todo or Album List Now Loading...</p>}>{selectedTab === "todo" ? <Todo /> : <AlbumList />}</Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
