const { withUiHook, htm } = require("@vercel/integration-utils");
import axios from "axios";

let count = 0;

module.exports = withUiHook(async (options) => {
	const { payload, vercelClient } = options;
	let metadata = await vercelClient.getMetadata();
	console.log("================>", payload.projectId);
	// const { data } = await axios({
	// 	method: "get",
	// 	url: `https://vercel.com/api/v1/integrations/configurations?integrationId=${vercelClient.options.integrationId}`,
	// 	headers: {
	// 		Authorization: `Bearer ${vercelClient.options.token}`,
	// 	},
	// });

	console.log("=======>", payload, "////", vercelClient);

	count += 1;

	return htm`
    <Page>
      <P>Counter: ${count}</P>
      <Button>Count Me</Button>
      <P> OK !!!</P>
      <Box display="flex" justifyContent="center">ok</Box>
      <Input
        label="Graph Query"
        name="graphQuery"
        placeholder="avg:system.load.1{*}"
        width="100%"
      />
    </Page>
  `;
});
