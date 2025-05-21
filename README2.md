# Testing Instructions

## To set up a new React project, type:
* npm create vite .
    * follow the prompts and choose your libraries/frameworks and programming language:
    * Select React
    * Select JavaScript

* Install dependencies
    * npm install

* Run the Development Script
    * npm run dev


## Install Testing Dependencies
* Enter: 
    * npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom in your terminal.

* Configure your testing framework
    * update your existing configuration file:
        * import { defineConfig } from 'vite';
        import react from '@vitejs/plugin-react'; 
        export default defineConfig({
            plugins: [react()],
            test: {
                environment: 'jsdom',
                globals: true
                }
                });

* Update your scripts in package.json:
    * Your test script should resemble this:
        * "scripts": {
            "dev": "vite",
            "build": "vite build",
            preview": "vite preview",
            "test": "vitest"
        }

## Testing Your Code
* Enter npm test, or npm run test, in your terminal.
    * Successful testing will appear in green within the terminal.

Good Luck!