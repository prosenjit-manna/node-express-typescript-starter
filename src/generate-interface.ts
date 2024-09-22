import axios from 'axios';
import { compile } from 'json-schema-to-typescript';
import fs from 'fs/promises';

// URL of your consolidated schema endpoint
const schemaUrl = 'http://localhost:4000/schema';

// Fetch all schemas from the backend
async function fetchSchemas(url: string): Promise<any> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch schemas from ${url}: ${error.message}`);
  }
}

// Generate TypeScript interfaces from JSON schemas
async function generateTypes() {
  try {
    const schemas = await fetchSchemas(schemaUrl);

    const types = await Promise.all(
      Object.entries(schemas).map(async ([key, schema]) => {
        return compile(schema as any, key);
      }),
    );

    // Write TypeScript definitions to a file
    const output = `
  // Auto-generated TypeScript interfaces from JSON schema
  ${types.join('\n')}
`;
    await fs.writeFile('./src/module/schema/generatedTypes.ts', output);
    console.log('Types have been successfully generated!');
  } catch (error) {
    console.error('Error generating types:', error);
  }
}

generateTypes();
