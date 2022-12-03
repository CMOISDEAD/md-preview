#!/usr/bin/env node

import path from "path";
import { homedir } from "os";
import { parse } from "node-html-parser";
import chokidar from "chokidar";
import { fs } from "mz";
import remark from "./remark.js";
import LiveServer from "live-server";

const md = process.argv[2];
const workspace = path.join(homedir(), ".config", "md-preview");
const index = path.join(workspace, "index.html");

const writeHtml = (html) => {
  // Write new html
  fs.writeFile(index, html.toString())
    .then(() => console.log("file written"))
    .catch((err) => console.error(err));
};

const createHtml = (markdown) => {
  // Read content of html file.
  fs.readFile(index)
    .then((data) => {
      const root = parse(data);
      const visor = root.querySelector("#visor");
      visor.set_content(markdown);
      writeHtml(root);
    })
    .catch((err) => console.error(err));
};

const renderMd = async (file) => {
  fs.readFile(file)
    .then((data) => {
      const file = remark(data);
      file
        .then((data) => {
          createHtml(data.toString());
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.error(err));
};

const watch = (file) => {
  chokidar.watch(file).on("all", (_event, _path) => {
    renderMd(md);
  });
};

if (md) {
  watch(md);
  LiveServer.start({
    port: 8181,
    open: true,
    wait: 1000,
    root: workspace,
  });
} else console.error("Please give file path");
