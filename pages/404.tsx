import { NextPage } from "next";
import { Error404 } from "../components";

interface Error404PageProps {}

const Error404Page: NextPage<Error404PageProps> = ({}) => {
  return <Error404 />;
};

export default Error404Page;
