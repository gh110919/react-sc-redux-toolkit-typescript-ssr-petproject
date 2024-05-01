import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { content } from "./main";

export const render = (url: string) => {
  return renderToString(<StaticRouter location={url}>{content}</StaticRouter>);
};