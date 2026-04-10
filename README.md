# Frescopa B2B Backend

Mock enterprise CRM API built on [Adobe App Builder](https://developer.adobe.com/app-builder/docs/overview/) for the Frescopa B2B demo. Returns customer profile data including company info, revenue metrics, and coffee machine fleet details.

## Live Endpoint

```
https://3374739-frescopab2b.adobeioruntime.net/api/v1/web/frescopa-b2b/crm
```

## Usage

**GET** (browser-friendly):

```
https://3374739-frescopab2b.adobeioruntime.net/api/v1/web/frescopa-b2b/crm?username=megan@wknd.com
```

**POST**:

```bash
curl -X POST "https://3374739-frescopab2b.adobeioruntime.net/api/v1/web/frescopa-b2b/crm" \
  -H "Content-Type: application/json" \
  -d '{"username": "megan@wknd.com"}'
```

## Available Mock Accounts

| Username | Name | Company | Machines |
|---|---|---|---|
| `megan@wknd.com` | Megan | WKND | 4 |
| `fred@securbank.com` | Fred | SecurBank | 5 |

## Example Response

```json
{
  "name": "Megan",
  "company": "WKND",
  "revenue": {
    "current": 9200,
    "currency": "USD",
    "trend": "+1.4K MoM"
  },
  "fleetSummary": {
    "uptime": 97.3,
    "usageThisMonth": 78,
    "machineRating": 4.9,
    "guestNps": 84,
    "avgDailyCups": 140
  },
  "machineFleet": [
    {
      "id": "F0-2748",
      "model": "Fresco Original",
      "location": "Lake Tahoe Ski Lodge",
      "unitId": "Unit F0-2748",
      "status": "Online",
      "cupsToday": 100,
      "uptime": 99.1,
      "rating": 4.9,
      "nextService": "2026-06-03"
    }
  ]
}
```

## Development

### Prerequisites

- [Adobe I/O CLI](https://developer.adobe.com/runtime/docs/guides/tools/cli_install/)
- Node.js 18+
- An Adobe App Builder project with Runtime credentials

### Setup

```bash
npm install
aio app use <path-to-console-json>
```

### Local Development

```bash
aio app run
```

### Deploy

```bash
aio app deploy
```

## Project Structure

```
├── actions/
│   └── crm/
│       └── index.js        # Mock CRM action
├── app.config.yaml         # App Builder manifest
├── package.json
└── .env                    # Runtime credentials (not committed)
```
