exports.config = config = {
	// Port for Express app to listen on.
	port: process.argv[2] || 3000,

	// Default limit for records to fetch
	LIMIT: process.argv[3] || 25,

	// CKAN API base.
	CKAN_API_BASE: 'http://www.civicdata.com/api/action/datastore_search_sql?sql=',

	// Resource IDs.
	PERMITS: "03b30af0-1ef8-4b6c-bc59-859fd8e19e5c",
	PERMIT_HISTORY: "87f54b3e-07ad-4595-b78f-e748071d6f18",
	INSPECTIONS: "f40902f2-3f3e-4aa2-9326-0f88d6d07ae4",
	CONTRACTORS: "5aed9714-8798-4948-9e58-c8a76d5fae61"
}