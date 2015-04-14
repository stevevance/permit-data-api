#Permit Data API

A RESTful API for permit information using the BLDS data format.

## API Methods

* **Get Permits**
* Description: Retrieves a list of permits.
* HTTP Method: GET
* Path: /permits

| Parameter | Required  | 
|---|---|
|  jurisdiction_id | true  | 
| limit | false |


* **Get Permit**
* Description: Retrieves a specific permit record details.
* HTTP Method: GET
* Path: /permits/{permitnum}

| Parameter | Required  | 
|---|---|
| jurisdiction_id | true  | 
| permitnum | true |


* **Get Permit Timeline**
* Description: Retrieves the history of a specific permit record.
* HTTP Method: GET
* Path: /permits/{permitnum}/timeline

| Parameter | Required  | 
|---|---|
|  jurisdiction_id | true  | 
| permitnum | true |


* **Get Permit Inspections**
* Description: Retrieves the inspections for a specific permit.
* HTTP Method: GET
* Path: /permits/{permitnum}/inspections

| Parameter | Required  | 
|---|---|
|  jurisdiction_id | true  | 
| permitnum | true |


* **Get Permit Contractors**
* Description: Retrieves the contractors for a specific permit.
* HTTP Method: GET
* Path: /permits/{permitnum}/contractors

| Parameter | Required  | 
|---|---|
|  jurisdiction_id | true  |  
| permitnum | true |


* **Get Inspections**
* Description: Retreives a list of inspections.
* HTTP Method: GET
* Path: /inspections

| Parameter | Required  | 
|---|---|
|  jurisdiction_id | true |
| limit | false | 


* **Get Inpsection**
* Description: Retrieves details of a specific inspection.
* HTTP Method: GET
* Path: /inspections/{inspectionid}

| Parameter | Required  | 
|---|---|
|  jurisdiction_id | true  | 
| inspectionid | true |


* **Get Contractors**
* Description: Retrieves a list of contractors.
* HTTP Method: GET
* Path: /contractors

| Parameter | Required  | 
|---|---|
|  jurisdiction_id | true  | 
| limit | false | 


* **Get Contractor**
* Description: Retrieves details for a specific contractor
* HTTP Method: GET
* Path: /contractors/{contractorid}

| Parameter | Required  | 
|---|---|
|  jurisdiction_id | true |
| contractorid | true |
