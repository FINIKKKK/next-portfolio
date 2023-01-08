import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Input } from "../../components/Root/Input";

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
    <div className="create">
      <div className="container">
        <div className="inner">
          <Link href="/root" className="back">
            <svg width="20" height="20">
              <use xlinkHref="../assets/img/icons/icons.svg#back" />
            </svg>
            <p>Назад</p>
          </Link>

          <div className="img">
            {image && <img src={URL.createObjectURL(image)} alt="img" />}
            <input onChange={onChangeImage} type="file" />
            <div className="content">
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
