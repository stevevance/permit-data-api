exports.config = config = {

	// Default limit for records to fetch
	LIMIT: process.argv[2] || 25,

	// Port for Express app to listen on.
	PORT: process.argv[3] || 3000,

	// CKAN API base.
	CKAN_API_BASE: 'http://www.civicdata.com/api/action/datastore_search_sql?sql=',

	// CKAN API endpoint for querying resource tags.
	JURISDICTION_URL: 'http://www.civicdata.com/api/action/tag_show?id=blds-building-permit-data',

	JURISDICTIONS: 
	{
		"deschutes_co-5b133ecf-43e2": 
		{
			PERMITS: "2ee2ca8f-d75a-486c-a192-2e2f76b1235b",
			PERMIT_HISTORY: "87f54b3e-07ad-4595-b78f-e748071d6f18",
			INSPECTIONS: "f40902f2-3f3e-4aa2-9326-0f88d6d07ae4",
			CONTRACTORS: "5aed9714-8798-4948-9e58-c8a76d5fae61"
		},
		"alameda-0ad8aa80-e1cb": 
		{
			PERMITS: "f148b5d2-b278-40ba-8ca4-945031d5994c",
			PERMIT_HISTORY: "c4993843-ddd6-4bcb-a75f-885e34381d7f",
			INSPECTIONS: "0a992fba-ab8a-4f87-9d7c-21e3140826a7",
			CONTRACTORS: "015cb40b-70be-47cb-b21a-24edfc7750c4"
		}
	}

}