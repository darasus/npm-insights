import * as dotenv from "dotenv";

dotenv.config();

import { generatePackages } from "./scripts/generate-packages";
import { generateSizeDetails } from "./scripts/generate-size-details";

async function main() {
  await generatePackages();
  await generateSizeDetails();

  console.log("✅ Done!");
  process.exit(0);
}

main();
