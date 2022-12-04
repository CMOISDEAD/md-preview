# (M)DOOM-PREVIEW

## Whats is

A very simple and minimalistic Markdown viewer, I built this tool with the idea of supplying my needs and learning in the process :)

**my needs = class note taking**

## Features

- Live reload
- KaTex and MathJax support.
- Emoji support.
- fully compatible with neovim.
- markdown flavor like github.
- and more...

## Installation

To install it must be done through npm or a similar Node package manager like yarn or pnpm.

_pnpm_

```shell
pnpm install -g mdoom-preview
```

_yarn_

```shell
yarn add -g mdoom-preview
```

_npm_

```shell
npm install -g mdoom-preview
```

### Manual

Another option is to install it manually, clone the repository and install the dependencies.

```shell
git clone <THIS_REPO>
cd <THIS_REPO>
pnpm install
```

Then you can execute the program running this command.

```shell
pnpm run dev
```

## Usage

This tool is intended to be **simple** to use and still be free to any _modification_ is why at the time of running for the first time will create a directory in `~/.config/md-preview/` there will be created the `index.html` and `index.css` files that can be modified in order to customize the styles and some functionality according to the user's needs ;)

_command structure_

```shell
mdoom-preview file.md
```

This will open a browser window with the server and the file.

## Integration with Neovim

**_Work in progress_**

## Personalization

You can customize all in this tool, if you want to change the Markdown style you can edit `~/.config/md-preview/css/style.css`.

## Contribution

Feel free to modify this tool and if you wish make a pull request :3
