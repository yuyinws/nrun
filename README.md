# nrun
Interactive npm sciprts completion.

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![License][license-src]][license-href]



![Kapture 2023-11-21 at 14.24.10](https://cdn.jsdelivr.net/gh/yuyinws/static@master/2023/11/upgit_20231121_1700548797.gif)



## Usage

### cli

```
npm insall -g @yuyin/nrun
```

```
nrun
```

### Zsh Integration

> **note**
> Make sure you have globally installed `@yuyin/nrun`.

```
git clone -b zsh https://github.com/yuyinws/nrun ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-nrun
```

```sh
# .zshrc

plugins=(
  ...
  zsh-nrun
)
```



Now, when you enter `npm run` and press the space key twice, it will work.

It also detects [commands](https://github.com/yuyinws/nrun/blob/6a285bfd9a6fc4e123511b4ea2f76e62d748aa3b/zsh-nrun.plugin.zsh#L2C1-L2C1) such as `yarn`, `pnpm`, and `nr`...



<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@yuyin/nrun?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@yuyin/nrun
[npm-downloads-src]: https://img.shields.io/npm/dm/@yuyin/nrun?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@yuyin/nrun
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@yuyin/nrun?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@yuyin/nrun
[license-src]: https://img.shields.io/github/license/antfu/@yuyin/nrun.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/antfu/@yuyin/nrun/blob/main/LICENSE
