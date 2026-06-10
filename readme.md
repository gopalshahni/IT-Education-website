# Global Skill Tech

A Node.js/Express project template with organized folder structure.

## Project Structure

```
.
├── public/
│   └── temp/
├── src/
│   ├── controller/
│   ├── middleware/
│   ├── routes/
│   ├── models/
│   └── utils/
├── .env
├── .gitignore
├── .prettierignore
├── app.js
├── index.js
├── constants.js
├── package.json
└── readme.md
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production

```bash
npm start
```

## Folder Descriptions

- **public/**: Static files and assets
- **src/controller/**: Request handlers and business logic
- **src/middleware/**: Express middleware functions
- **src/routes/**: API routes definitions
- **src/models/**: Data models and database schemas
- **src/utils/**: Utility functions and helpers

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
NODE_ENV=development
PORT=3000
```

## License

ISC
