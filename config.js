const { withUiHook } = require("@vercel/integration-utils");

let count = 0;

module.exports = withUiHook(async (options) => {
	count += 1;

	return `
    <Page>
      <P>Counter: ${count}</P>
      <Button>Count Me</Button>
    </Page>
  `;
});
