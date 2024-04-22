export const APP_PATHS = {
  home: {
    get: () => '/',
  },

  properties: {
    get: () => '/properties',

    add: {
      get: () => '/properties/add',
    },

    property: {
      get: () => '/properties/property',
    },

    units: {
      get: () => '/properties/units',
    },

    leases: {
      get: () => '/properties/leases',
    },

    contacts: {
      get: () => '/properties/contacts',
    },

    tenants: {
      get: () => '/properties/tenants',
    },

    owners: {
      get: () => '/properties/owners',
    },
  },

  guaranteedLeases: {
    get: () => '/guaranteed-leases',
  },
  evictionFees: {
    get: () => '/eviction-fees',
  },
  support: {
    get: () => '/support',
  },
  settings: {
    get: () => '/settings',
  },
  maliciousDamages: {
    get: () => '/malicious-damages',
  },
  rentClaims: {
    get: () => '/rent-claims',
  },
};
