import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { describe, expect, it } from "vitest";
import {
  exportedForTesting,
  getRootDir,
  getRootDirParent,
} from "./findRootDir.js";

// extract fileExists function for testing purposes
const { fileExists } = exportedForTesting;

describe("findRootDir Module", () => {
  describe("fileExists method (private method)", () => {
    it("should return true if the file exists", async () => {
      // ARRANGE - Define testing environments & values
      const __dirname = dirname(fileURLToPath(import.meta.url));
      const filePath = `${__dirname}/findRootDir.test.ts`; // file path to this test file

      // ACT - Run the code that is being tested
      const exists = await fileExists(filePath);

      // ASSERT - Evaluate result and compare to expected value
      expect(exists).toBe(true);
    });

    it("should return false if the file does not exist", async () => {
      // ARRANGE - Define testing environments & values
      const __dirname = dirname(fileURLToPath(import.meta.url));
      const filePath = `${__dirname}/fileWhichDoesNotExist`;

      // ACT - Run the code that is being tested
      const exists = await fileExists(filePath);

      // ASSERT - Evaluate result and compare to expected value
      expect(exists).toBe(false);
    });
  });

  describe("getRootDir method", () => {
    it("should return the root directory path", async () => {
      // ARRANGE - Define testing environments & values
      const __dirname = dirname(fileURLToPath(import.meta.url));
      const rootDirPath = join(__dirname, "../../..");

      // ACT - Run the code that is being tested
      const rootDir = await getRootDir();

      // ASSERT - Evaluate result and compare to expected value
      expect(rootDir).toMatch(rootDirPath);
    });
  });

  describe("getRootDirParent method", () => {
    it("should return the parent directory path of the root directory path", async () => {
      // ARRANGE - Define testing environments & values
      const rootDir = await getRootDir();
      const parentDir = join(rootDir, "..");

      // ACT - Run the code that is being tested
      const result = await getRootDirParent();

      // ASSERT - Evaluate result and compare to expected value
      expect(result).toMatch(parentDir);
    });
  });
});
