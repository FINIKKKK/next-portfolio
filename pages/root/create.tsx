import React from "react";
import { NextPage } from "next";
import Link from "next/link";

import ss from '../../styles/modules/create.module.scss'
import { Input } from "components";

interface CreateProjectPageProps {}

const CreateProjectPage: NextPage<CreateProjectPageProps> = ({}) => {
  const [valueTitle, setValueTitle] = React.useState("");
  const [valueLink, setValueLink] = React.useState("");
  const [valueText, setValueText] = React.useState("");
  const [image, setImage] = React.useState(null);

  const onChangeImage = (e: any) => {
    if (e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className={ss.create}>
      <div className="container">
        <div className={ss.inner}>
          <Link href="/root" className={ss.back}>
            <svg width="20" height="20">
              <use xlinkHref="../assets/img/icons/icons.svg#back" />
            </svg>
            <p>Назад</p>
          </Link>

          <div className={ss.img}>
            {image && <img src={URL.createObjectURL(image)} alt="img" />}
            <input onChange={onChangeImage} type="file" />
            <div className={ss.content}>
              <svg width="20" height="20">
                <use xlinkHref="../assets/img/icons/icons.svg#upload" />
              </svg>
            </div>
          </div>

          <Input
            value={valueTitle}
            setValue={setValueTitle}
            label="Заголовок"
          />

          <Input value={valueLink} setValue={setValueLink} label="Ссылка" />

          <Input
            value={valueText}
            setValue={setValueText}
            label="Описание"
            isTextarea={true}
          />

          <button className="btn">Создать проект</button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectPage;
