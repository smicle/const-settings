# const-settings

## Intro
You can easily use it by defining the value in config/settings.yaml

## Installation
```sh
npm install const-settings
```

## Settings
Write constants in config/settings.yaml

## Usage
```js
const Settings = require('const-settings').default

Settings.IDOL.forEach(v => console.log(v))
```

```ts
import Settings from 'const-settings'

Settings.IDOL.forEach((v: string) => console.log(v))
```
