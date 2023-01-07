import Link from "next/link";
import React from "react";

import ss from "./Sidebar.module.scss";

interface SidebarProps {}

const labels = ["Общее", "Проекты", "Навыки"];

export const Sidebar: React.FC<SidebarProps> = () => {
  const [activeComponent, setActiveComponent] = React.useState(0);

  return (
    <aside className="sidebar">
      <Link href="/root/create" className="btn">
        Добавить проект
      </Link>
      <ul>
        {labels.map((label, index) => (
          <li
            onClick={() => setActiveComponent(index)}
            className={activeComponent === index ? "active" : ""}
            key={index}
          >
            {label}
          </li>
        ))}
      </ul>
    </aside>
  );
};
