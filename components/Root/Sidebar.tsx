import Link from "next/link";
import React from "react";

import ss from "./Sidebar.module.scss";

interface SidebarProps {
  active: number;
  setActive: (index: number) => void;
}

const labels = ["Общее", "Проекты", "Навыки"];

export const Sidebar: React.FC<SidebarProps> = ({ active, setActive }) => {
  return (
    <aside className="sidebar">
      <Link href="/root/create" className="btn">
        Добавить проект
      </Link>
      <ul>
        {labels.map((label, index) => (
          <li
            onClick={() => setActive(index)}
            className={active === index ? "active" : ""}
            key={index}
          >
            {label}
          </li>
        ))}
      </ul>
    </aside>
  );
};
