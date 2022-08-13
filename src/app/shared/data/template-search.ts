const ADMIN = 1,
  STAFF = 2,
  CREATOR = 3,
  RIGHT_HOLDER = 4;

export const LISTITEMS = [
  {
    url: '/dashboard',
    name: 'Dashboard',
    icon: 'ft-home',
    hasaccess: [ADMIN, STAFF, CREATOR, RIGHT_HOLDER],
  },
  {
    url: '/creators/profile',
    name: 'Profile',
    icon: 'ft-user',
    hasaccess: [CREATOR],
  },
  {
    url: '/right-holders/profile',
    name: 'Profile',
    icon: 'ft-user',
    hasaccess: [RIGHT_HOLDER],
  },
  {
    url: '/admins',
    name: 'Admin',
    icon: 'ft-user',
    hasaccess: [ADMIN, STAFF],
  },
  {
    url: '/creators',
    name: 'Creators / Channel Owners',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF],
  },
  {
    url: '/right-holders',
    name: 'Rights Holders / Speech Owners',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF],
  },
  {
    url: '/contracts',
    name: 'All Agreements',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF],
  },
  {
    url: '/contracts',
    name: 'All Agreements',
    icon: 'ft-users',
    hasaccess: [CREATOR],
  },
  {
    url: '/channels',
    name: 'Channels',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF, CREATOR, RIGHT_HOLDER],
  },
  {
    url: '/Fanzooma-youtube-videos',
    name: 'Fanzooma YouTube videos',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF, CREATOR, RIGHT_HOLDER],
  },
  {
    url: '/monitoring-channels',
    name: 'Monitoring Channels',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF],
  },
  {
    url: '/monitoring-youtube-videos',
    name: 'Monitoring Youtube videos',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF],
  },
  {
    url: '/content-library',
    name: 'Library',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF, CREATOR, RIGHT_HOLDER],
  },
  {
    url: '/energy-level',
    name: 'Energy',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF],
  },
  {
    url: '/categories',
    name: 'Categories',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF],
  },
  {
    url: '/content-library',
    name: 'Library',
    icon: 'ft-play',
    hasaccess: [CREATOR, RIGHT_HOLDER],
  },
  {
    url: '/artists',
    name: 'Speakers',
    icon: 'ft-mic',
    hasaccess: [ADMIN, STAFF],
  },
  {
    url: '/browse',
    name: 'Browse',
    icon: 'ft-shopping-cart',
    hasaccess: [CREATOR],
  },

  {
    url: 'royalties-earnings',
    name: 'Royalties earnings Overview',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF, CREATOR, RIGHT_HOLDER],
  },
  {
    url: 'royalties/by-creator',
    name: 'Royalties earnings by Creators',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF],
  },
  {
    url: 'royalties/by-right-holders',
    name: 'Royalties earnings byRights Holders',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF, CREATOR],
  },
  {
    url: 'royalties/by-videos',
    name: 'Royalties earnings byYoutube Videos',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF, CREATOR, RIGHT_HOLDER],
  },

  {
    url: '/payment-setting',
    name: 'Payment Setting',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF],
  },

  {
    url: 'payment-history/landing-page',
    name: 'Payment overview',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF, CREATOR, RIGHT_HOLDER],
  },
  {
    url: 'payment-history/by-creator',
    name: 'Payment history by Creators',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF],
  },
  {
    url: 'payment-history/by-right-holders',
    name: 'Payment history by Rights Holders',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF, CREATOR],
  },
  {
    url: 'payment-history/by-channel',
    name: 'Payment history by Channel',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF, CREATOR, RIGHT_HOLDER],
  },
  {
    url: 'payment-history/by-videos',
    name: 'Payment history by Youtube videos',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF, CREATOR, RIGHT_HOLDER],
  },
  {
    url: '/inquiry-list',
    name: 'Inquiry List',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF],
  },
  {
    url: '/contact-us',
    name: 'Contact Us',
    icon: 'ft-arrow-right submenu-icon',
    hasaccess: [ADMIN, STAFF],
  },

  {
    url: '/contact-us',
    name: 'Messages',
    icon: 'ft-mail',
    hasaccess: [CREATOR],
  },
  {
    url: 'https://mindsetdrm.com/faq-speakers/',
    name: 'FAQ',
    icon: 'ft-external-link',
    hasaccess: [CREATOR],
  },
];
