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
    ],
    usage: {
      unitLabel: 'CUPS PER DAY',
      dailySpikes: [
        { label: 'Mon', value: 420 },
        { label: 'Tue', value: 510 },
        { label: 'Wed', value: 380 },
        { label: 'Thu', value: 620 },
        { label: 'Fri', value: 590 }
      ],
      byLocation: [
        { label: 'LAKE TAHOE', value: 720 },
        { label: 'YOSEMITE', value: 540 },
        { label: 'BALI', value: 410 },
        { label: 'MONT BLANC', value: 360 },
        { label: 'WHISTLER', value: 240 }
      ],
      seasonalSummaries: [
        { label: 'Winter', value: 480 },
        { label: 'Spring', value: 520 },
        { label: 'Summer', value: 610 },
        { label: 'Fall', value: 455 }
      ]
    },
    insights: [
      {
        title: 'LAKE TAHOE is your top performer',
        titleEmphasis: 'LAKE TAHOE',
        summary: '140 cups/day avg. 58% above fleet average. Consider adding a second machine before the Feb ski peak.',
        ctaLabel: 'See Expansion Deal',
        ctaUrl: '/dashboard/schedule'
      },
      {
        title: 'CONTRACT RENEWAL in 47 days.',
        titleEmphasis: 'CONTRACT RENEWAL',
        summary: 'Renew before May 15 and lock in current pricing, rates increase 8% on May 16.',
        ctaLabel: 'Renew Now',
        ctaUrl: '/dashboard/regions'
      },
      {
        title: 'BALI CAMP underutilized post-event hours',
        titleEmphasis: 'BALI CAMP',
        summary: 'Evening cold brew activations could add ~$480/mo in beverage revenue. Install our RTD kit as an add-on.',
        ctaLabel: 'Add now',
        ctaUrl: '/dashboard/inventory'
      }
    ],
    insightsListUrl: '/insights'
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
    ],
    usage: {
      unitLabel: 'CUPS PER DAY',
      dailySpikes: [
        { label: 'Mon', value: 680 },
        { label: 'Tue', value: 720 },
        { label: 'Wed', value: 695 },
        { label: 'Thu', value: 740 },
        { label: 'Fri', value: 550 }
      ],
      byLocation: [
        { label: 'NYC HQ', value: 890 },
        { label: 'CHICAGO', value: 640 },
        { label: 'MIAMI', value: 310 },
        { label: 'SF LAB', value: 520 },
        { label: 'DALLAS', value: 280 }
      ],
      seasonalSummaries: [
        { label: 'Winter', value: 590 },
        { label: 'Spring', value: 640 },
        { label: 'Summer', value: 510 },
        { label: 'Fall', value: 680 }
      ]
    },
    insights: [
      {
        title: 'NYC HEADQUARTERS is your top performer',
        titleEmphasis: 'NYC HEADQUARTERS',
        summary: '178 cups/day avg. 72% above fleet average. Executive floor accounts for 40% of volume — consider a second unit.',
        ctaLabel: 'See Expansion Deal',
        ctaUrl: '/dashboard/schedule'
      },
      {
        title: 'MIAMI BRANCH machine offline for 3 days',
        titleEmphasis: 'MIAMI BRANCH',
        summary: 'Unit F0-3310 needs servicing. Overdue since Apr 12. Estimated revenue loss: $320/week.',
        ctaLabel: 'Schedule Service',
        ctaUrl: '/dashboard/service'
      },
      {
        title: 'CONTRACT RENEWAL in 35 days.',
        titleEmphasis: 'CONTRACT RENEWAL',
        summary: 'Renew before May 15 and lock in current pricing. Multi-year discount available for 5+ machine fleets.',
        ctaLabel: 'Renew Now',
        ctaUrl: '/dashboard/regions'
      }
    ],
    insightsListUrl: '/insights'
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
