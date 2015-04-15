#Permit Data API

A RESTful API for permit information using the BLDS data format.

## Base URL

http://openpermit.cloudapp.net/api/

## API Methods

* **Get Jurisdictions**
* Description: Retrieves a list of jurisdictions supplying data.
* HTTP Method: GET
* Path: /jurisdictions

```json
[
  "alameda-0ad8aa80-e1cb",
  "deschutes_co-5b133ecf-43e2"
]
```


* **Get Permits**
* Description: Retrieves a list of permits.
* HTTP Method: GET
* Path: /permits

| Parameter | Required  | 
|---|---|
|  jurisdiction_id | true  | 
| limit | false |

Sample call: http://openpermit.cloudapp.net/api/permits/?jurisdiction_id=alameda-0ad8aa80-e1cb&limit=1


* **Get Permit**
* Description: Retrieves a specific permit record details.
* HTTP Method: GET
* Path: /permits/{permitnum}

| Parameter | Required  | 
|---|---|
| jurisdiction_id | true  | 
| permitnum | true |

Sample call: http://openpermit.cloudapp.net/api/permits/CB15-0157/?jurisdiction_id=alameda-0ad8aa80-e1cb


* **Get Permit Timeline**
* Description: Retrieves the history of a specific permit record.
* HTTP Method: GET
* Path: /permits/{permitnum}/timeline

| Parameter | Required  | 
|---|---|
|  jurisdiction_id | true  | 
| permitnum | true |

Sample call: http://openpermit.cloudapp.net/api/permits/CB15-0157/timeline/?jurisdiction_id=alameda-0ad8aa80-e1cb


* **Get Permit Inspections**
* Description: Retrieves the inspections for a specific permit.
* HTTP Method: GET
* Path: /permits/{permitnum}/inspections

| Parameter | Required  | 
|---|---|
|  jurisdiction_id | true  | 
| permitnum | true |

Sample call: http://openpermit.cloudapp.net/api/permits/CB14-0683/inspections/?jurisdiction_id=alameda-0ad8aa80-e1cb


* **Get Permit Contractors**
* Description: Retrieves the contractors for a specific permit.
* HTTP Method: GET
* Path: /permits/{permitnum}/contractors

| Parameter | Required  | 
|---|---|
|  jurisdiction_id | true  |  
| permitnum | true |

Sample call: http://openpermit.cloudapp.net/api/permits/B15-0153/contractors/?jurisdiction_id=alameda-0ad8aa80-e1cb


* **Get Inspections**
* Description: Retreives a list of inspections.
* HTTP Method: GET
* Path: /inspections

| Parameter | Required  | 
|---|---|
|  jurisdiction_id | true |
| limit | false | 

Sample call: http://openpermit.cloudapp.net/api/inspections?jurisdiction_id=deschutes_co-5b133ecf-43e2&limit=1


* **Get Inpsection**
* Description: Retrieves details of a specific inspection.
* HTTP Method: GET
* Path: /inspections/{inspectionid}

| Parameter | Required  | 
|---|---|
|  jurisdiction_id | true  | 
| inspectionid | true |

Sample call: http://openpermit.cloudapp.net/api/inspections/1860194/?jurisdiction_id=deschutes_co-5b133ecf-43e2


* **Get Contractors**
* Description: Retrieves a list of contractors.
* HTTP Method: GET
* Path: /contractors

| Parameter | Required  | 
|---|---|
|  jurisdiction_id | true  | 
| limit | false | 

Sample call: http://openpermit.cloudapp.net/api/contractors/?jurisdiction_id=deschutes_co-5b133ecf-43e2&limit=1


* **Get Contractor**
* Description: Retrieves details for a specific contractor
* HTTP Method: GET
* Path: /contractors/{contractorid}

| Parameter | Required  | 
|---|---|
|  jurisdiction_id | true |
| contractorid | true |

Sample call: http://openpermit.cloudapp.net/api/contractors/76888/?jurisdiction_id=deschutes_co-5b133ecf-43e2
