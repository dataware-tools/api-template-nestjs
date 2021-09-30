module.exports = {
  "**/*.{js,ts}": "eslint --fix",
  "**/*.{js,ts,md}": "prettier --write ",
  "**/*.ts": () => "tsc --noEmit --project tsconfig.json",
};
