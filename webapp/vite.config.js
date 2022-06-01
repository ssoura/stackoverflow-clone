import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default ({ mode }) => {
  return defineConfig({
    plugins: [svgr(), react()],
    define: {
      "process.env.NODE_ENV": `"${mode}"`,
    },
  });
};
