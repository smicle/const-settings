# const-settings
[![npm version](https://badge.fury.io/js/const-settings.svg)](https://badge.fury.io/js/const-settings)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Intro
By placing a specific YAML under `config/` and defining the constants, you can easily read the value.  

## Installation
```sh
npm install const-settings
```

## Settings
Place the file that defines the constants in `config/settings.yaml` or `config/settings.yml`.  
If you want to split the file, set YAML under `config/settings/`.  

### Configuration Example
```
├── config
│   ├── settings
│   │   ├── fuga.yaml
│   │   └── piyo.yml
│   ├── settings.yaml
│   └── settings.yml
├── package-lock.json
└── package.json
```

## Usage
### JavaScript
```js
const Settings = require('const-settings').default

Settings.PIYO.forEach(v => console.log(v))
```

### TypeScript
```ts
import Settings from 'const-settings'

Settings.PIYO.forEach((v: string) => console.log(v))
```

## Test
```sh
npm run test
```
