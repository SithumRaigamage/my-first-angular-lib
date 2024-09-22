# My First Angular Library

This project demonstrates how to create a reusable Angular library using Angular CLI version 18.2.0. This library can be used across multiple Angular applications to share components, services, and modules.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Development Server](#development-server)
- [Code Scaffolding](#code-scaffolding)
- [Building the Library](#building-the-library)
- [Using the Library](#using-the-library)
- [Running Unit Tests](#running-unit-tests)
- [Running End-to-End Tests](#running-end-to-end-tests)
- [Publishing the Library](#publishing-the-library)
- [Further Help](#further-help)

## Prerequisites

- Node.js and npm installed on your machine.
- Angular CLI installed globally:

```bash
npm install -g @angular/cli
Getting Started
Create a New Angular Workspace
Generate a new Angular workspace without a default application:

bash
Copy code
ng new my-workspace --create-application=false
cd my-workspace
Generate the Angular Library
Create your library using the Angular CLI:

bash
Copy code
ng generate library my-first-angular-lib
Development Server
Run ng serve for a development server. Note that this is primarily for testing your library in an application. Navigate to http://localhost:4200/ after starting the server.

Code Scaffolding
Generate new components, services, or modules in your library with the following command:

bash
Copy code
ng generate component my-first-angular-lib/your-component-name
Building the Library
To build the library for distribution, run:

bash
Copy code
ng build my-first-angular-lib
The build artifacts will be stored in the dist/my-first-angular-lib/ directory.

Using the Library
To test your library, generate an application within the same workspace:

bash
Copy code
ng generate application my-test-app
Import your library module in the application:

typescript
Copy code
import { MyFirstAngularLibModule } from 'my-first-angular-lib';
Running Unit Tests
Execute unit tests using Karma with the following command:

bash
Copy code
ng test
Ensure your library is covered with appropriate tests.

Running End-to-End Tests
To set up end-to-end testing, install a package like Cypress:

bash
Copy code
ng add @cypress/schematics
Then, run the e2e tests:

bash
Copy code
ng e2e
Publishing the Library
To publish your library to npm, follow these steps:

Log in to your npm account:

bash
Copy code
npm login
Publish the library:

bash
Copy code
npm publish dist/my-first-angular-lib
The library can then be installed in any Angular project via npm:

bash
Copy code
npm install my-first-angular-lib
