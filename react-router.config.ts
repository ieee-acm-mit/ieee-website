import type { Config } from "@react-router/dev/config";
export default {
  appDirectory: "src",
  buildDirectory: "dist",
  ssr: false,        // no runtime server
  prerender: true,   // renders all files
} satisfies Config;
