const { pass, fail } = require("create-jest-runner");
const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);

module.exports = async ({ testPath }) => {
  const start = Date.now();

  try {
    await exec(`rushx watched:integration-test:node '${testPath}'`);
    const end = Date.now();
    return pass({ start, end, test: { path: testPath } });
  } catch ({ stdout, stderr }) {
    const end = Date.now();
    console.log(stdout);
    console.log(stderr);
    return fail({ start, end, test: { path: testPath } });
  }
};
