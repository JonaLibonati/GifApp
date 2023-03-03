# Intallation and configuration of Jest + Testing Library
## On React + Vite Projects

1. Installing
```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```
or
```
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react
npm install --save-dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Optional. If we use Fetch API on the project
```
yarn add --dev whatwg-fetch
```
or
```
npm install --save-dev whatwg-fetch
```

3. Updating the __packege.json__'s scripts
```
"scripts: {
    ...
    "test": "jest --watchAll"
```

4. Creating babel config __balbel.config.js__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
}
```

5. Creating Jest config and setup (Optional, but even needed)

__jest.config.js__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
}
```

__jest.setup.js__
```
// If we use Fetch API on the project
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```

if a module error appears, try to solve it by changing the extension of __balbel.config.cjs__ and __jest.config.cjs__

6. PropTypes
```
yarn add prop-types
```

```
npm install prop-types
```