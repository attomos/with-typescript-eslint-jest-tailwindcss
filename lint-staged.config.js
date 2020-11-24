module.exports = {
  "*.{js,ts,tsx,css,md}": "prettier --check",
  "*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
};
