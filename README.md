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
