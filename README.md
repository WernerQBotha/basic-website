# Basic Website

A basic one-page website built with Angular 21 without zone.js. Features a fixed header with navigation and multiple scrollable sections.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Features

- **Zoneless Angular 21**: Uses `provideZonelessChangeDetection()` for improved performance
- **Fixed Header Navigation**: Sticky header with smooth scrolling to sections
- **Reusable Section Component**: Easily add new sections with custom content and colors
- **Three Sections**: Home, Products, and Contact Us
- **Responsive Design**: Clean, centered layout that works on all screen sizes

## Project Structure

```
src/app/
├── header/           # Fixed navigation header component
├── section/          # Reusable section component
├── app.ts           # Root component
├── app.config.ts    # App configuration with zoneless mode
└── app.routes.ts    # Routing configuration
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
