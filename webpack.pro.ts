import merge from "webpack-merge";
import common from "./webpack.base";

const config = merge(common, {
  mode: "production"
});

export default config;
