import React from "react";

type TaskProps = {
  children: React.ReactNode;
  id: number;
  onClick: () => void;
};

export default function Task({ children, id, onClick }: TaskProps) {
  return (
    <div key={id}>
      <img src="Images/icons8-remove.svg" alt="remove" onClick={onClick} />
      <p>{children}</p>
      <span>
        <img src="Images/icons8-edit.svg" alt="edit" />{" "}
        <img src="Images/icons8-checked.svg" alt="checked" />
      </span>
    </div>
  );
}
