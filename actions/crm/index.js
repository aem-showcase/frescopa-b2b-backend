const { Core } = require('@adobe/aio-sdk')

const MOCK_DB = {
  'megan@wknd.com': {
    name: 'Megan',
    company: 'WKND',
    revenue: {
      current: 9200,
      currency: 'USD',
      trend: '+1.4K MoM'
    },
    fleetSummary: {
      uptime: 97.3,
      usageThisMonth: 78,
      machineRating: 4.9,
      guestNps: 84,
      avgDailyCups: 140
    },
    machineFleet: [
      {
        id: 'F0-2748',
        model: 'Fresco Original',
        location: 'Lake Tahoe Ski Lodge',
        unitId: 'Unit F0-2748',
        status: 'Online',
        cupsToday: 100,
        uptime: 99.1,
        rating: 4.9,
        nextService: '2026-06-03',
        image: '/dashboard/media_1583f3e9fb09c2caefda625cb10d55951d4dd9204.jpg?width=750&format=webply&optimize=medium'
      },
      {
        id: 'FD-8584',
        model: 'Fresco Deluxe',
        location: 'Yosemite Base Camp',
        unitId: 'Unit FD-8584',
        status: 'Online',
        cupsToday: 62,
        uptime: 98.7,
        rating: 4.7,
        nextService: '2026-06-03',
        image: '/dashboard/media_17e4294d46219f3f59d3865f5d5c595cdae975ecc.jpg?width=750&format=webply&optimize=medium'
      },
      {
        id: 'FE-6761',
        model: 'Fresco Expresso',
        location: 'Bali Surf Camp',
        unitId: 'Unit FE-6761',
        status: 'Offline',
        cupsToday: 0,
        uptime: 94.7,
        rating: 4.6,
        nextService: '2026-05-02',
        image: '/dashboard/media_11f3b80adfab87b8db2f202ba93db5b708977c21f.jpg?width=750&format=webply&optimize=medium'
      },
      {
        id: 'F0-2749',
        model: 'Fresco Original',
        location: 'Lake Tahoe Ski Lodge',
        unitId: 'Unit F0-2749',
        status: 'Online',
        cupsToday: 40,
        uptime: 99.1,
        rating: 4.9,
        nextService: '2026-06-03',
        image: '/dashboard/media_1583f3e9fb09c2caefda625cb10d55951d4dd9204.jpg?width=750&format=webply&optimize=medium'
      }
    ]
  },
  'fred@securbank.com': {
    name: 'Fred',
    company: 'SecurBank',
    revenue: {
      current: 14800,
      currency: 'USD',
      trend: '+2.1K MoM'
    },
    fleetSummary: {
      uptime: 95.8,
      usageThisMonth: 82,
      machineRating: 4.7,
      guestNps: 72,
      avgDailyCups: 210
    },
    machineFleet: [
      {
        id: 'FD-4401',
        model: 'Fresco Deluxe',
        location: 'NYC Headquarters',
        unitId: 'Unit FD-4401',
        status: 'Online',
        cupsToday: 85,
        uptime: 99.5,
        rating: 4.8,
        nextService: '2026-05-15',
        image: '/dashboard/media_17e4294d46219f3f59d3865f5d5c595cdae975ecc.jpg?width=750&format=webply&optimize=medium'
      },
      {
        id: 'FD-4402',
        model: 'Fresco Deluxe',
        location: 'Chicago Branch',
        unitId: 'Unit FD-4402',
        status: 'Online',
        cupsToday: 63,
        uptime: 97.2,
        rating: 4.7,
        nextService: '2026-05-15',
        image: '/dashboard/media_17e4294d46219f3f59d3865f5d5c595cdae975ecc.jpg?width=750&format=webply&optimize=medium'
      },
      {
        id: 'F0-3310',
        model: 'Fresco Original',
        location: 'Miami Branch',
        unitId: 'Unit F0-3310',
        status: 'Offline',
        cupsToday: 0,
        uptime: 87.3,
        rating: 4.5,
        nextService: '2026-04-12',
        image: '/dashboard/media_1583f3e9fb09c2caefda625cb10d55951d4dd9204.jpg?width=750&format=webply&optimize=medium'
      },
      {
        id: 'FE-7720',
        model: 'Fresco Expresso',
        location: 'SF Innovation Lab',
        unitId: 'Unit FE-7720',
        status: 'Online',
        cupsToday: 42,
        uptime: 98.1,
        rating: 4.9,
        nextService: '2026-06-20',
        image: '/dashboard/media_11f3b80adfab87b8db2f202ba93db5b708977c21f.jpg?width=750&format=webply&optimize=medium'
      },
      {
        id: 'F0-3311',
        model: 'Fresco Original',
        location: 'Dallas Branch',
        unitId: 'Unit F0-3311',
        status: 'Online',
        cupsToday: 20,
        uptime: 96.4,
        rating: 4.6,
        nextService: '2026-05-28',
        image: '/dashboard/media_1583f3e9fb09c2caefda625cb10d55951d4dd9204.jpg?width=750&format=webply&optimize=medium'
      }
    ]
  }
}

async function main (params) {
  const logger = Core.Logger('crm', { level: params.LOG_LEVEL || 'info' })
  logger.info('CRM action invoked')

  try {
    const username = params.username
    if (!username) {
      return {
        statusCode: 400,
        body: { error: 'Missing required parameter: username' }
      }
    }

    const user = MOCK_DB[username.toLowerCase()]
    if (!user) {
      return {
        statusCode: 404,
        body: { error: `No account found for ${username}` }
      }
    }

    return {
      statusCode: 200,
      body: user
    }
  } catch (e) {
    logger.error(e)
    return {
      statusCode: 500,
      body: { error: 'Internal server error' }
    }
  }
}

exports.main = main
