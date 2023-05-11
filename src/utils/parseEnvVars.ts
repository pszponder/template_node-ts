import "dotenv/config"; // Load environmental variables from root .env file into environment
import { z } from "zod";

// Define a schema for Environmental Variables in project root .env file
const envSchema = z.object({
  NODE_ENV: z.string().min(1),
});

// Parse out the environmental variables using the envSchema
const envVars = envSchema.parse(process.env);

// Export parsed environmental variables to be used in other modules
// Recommend to import as => import { envVars as env} from ...
export { envVars };
