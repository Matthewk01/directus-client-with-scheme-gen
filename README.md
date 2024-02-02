# Directus TS schema generation example
## How to use?

1. Install the required packages
```bash
npm install
```
2. Add you Directus API URL and account credentials to the package.json codegen script
3. Run the codegen script
```bash
npm run codegen
```
4. The generated types will be in the `types/directus.ts` file
5. Use the generated types in your code
```typescript
import { Schema } from '../types/directus';
```
6. You can try out the generate types in action using example in `src/index.ts`
7. Profit!

