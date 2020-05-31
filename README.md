# const-settings
[![npm version](https://badge.fury.io/js/const-settings.svg)](https://badge.fury.io/js/const-settings)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/93e21620984a4d69ab9b2a54bf17dadc)](https://www.codacy.com/manual/smicle/const-settings?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=smicle/const-settings&amp;utm_campaign=Badge_Grade)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Intro
You can easily use it by defining the value in config/settings.yaml

## Installation
```sh
npm install const-settings
```

## Settings
Write constants in config/settings.yaml

## Usage
### JavaScript
```js
const Settings = require('const-settings').default

Settings.IDOL.forEach(v => console.log(v))
```

### TypeScript
```ts
import Settings from 'const-settings'

Settings.IDOL.forEach((v: string) => console.log(v))
```

## Test
```sh
npm run test
```
