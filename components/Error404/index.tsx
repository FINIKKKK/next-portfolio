import Link from "next/link";
import React from "react";

import ss from "./Error404.module.scss";

interface Error404Props {}

export const Error404: React.FC<Error404Props> = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <div className={`${ss.error} ${isLoading ? ss.active : ""}`}>
      <div className={ss.inner}>
        <div className={ss.content}>
          <h1 className={ss.title}>404</h1>
          <p className={ss.text}>Ошибка</p>
        </div>
        <p className={ss.pretitle}>Страница не найдена</p>
        <Link href="/" className={ss.btn}>
          Главная
        </Link>

        <svg className={ss.icon1} width="20" height="20">
          <use xlinkHref="./assets/img/icons/icons.svg#top__icon2" />
        </svg>
        <svg className={ss.icon2} width="20" height="20">
          <use xlinkHref="./assets/img/icons/icons.svg#top__icon2" />
        </svg>
      </div>
    </div>
  );
};
