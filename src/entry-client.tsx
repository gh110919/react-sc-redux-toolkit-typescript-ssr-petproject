import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { content, root } from "./main";

import "./index.css"

if (typeof window !== "undefined") {
  hydrateRoot(root!, <BrowserRouter>{content}</BrowserRouter>);
}