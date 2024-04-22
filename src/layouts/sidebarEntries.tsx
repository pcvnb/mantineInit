import {
  HomeLineIcon,
  LayersThree01Icon,
  CheckDone01Icon,
  PieChart03Icon,
  Users01Icon,
  LifeBuoy01Icon,
  Settings01Icon,
  BarChartSquare02Icon,
} from '@/assets/iconComponents';
import { APP_PATHS } from '@/routes/app-paths';

type SidebarEntry = {
  icon: JSX.Element | null;
  title: string;
  href: string;
  children?: {
    title: string;
    href: string;
    icon: JSX.Element | null;
  }[];
};

export const sidebarEntries: SidebarEntry[] = [
  {
    icon: <HomeLineIcon />,
    title: 'Home',
    href: APP_PATHS.home.get(),
  },
  {
    icon: <BarChartSquare02Icon />,
    title: 'Guaranteed Leases',
    href: APP_PATHS.guaranteedLeases.get(),
  },
  {
    icon: <LayersThree01Icon />,
    title: 'Rent Claims',
    href: APP_PATHS.rentClaims.get(),
  },
  {
    icon: <CheckDone01Icon />,
    title: 'Eviction Legal Fees',
    href: APP_PATHS.evictionFees.get(),
  },
  {
    icon: <PieChart03Icon />,
    title: 'Malicious Damages',
    href: APP_PATHS.maliciousDamages.get(),
  },
  {
    icon: <Users01Icon />,
    title: 'Properties',
    href: APP_PATHS.properties.get(),
    children: [
      {
        icon: <HomeLineIcon />,
        title: 'Property',
        href: APP_PATHS.properties.property.get(),
      },
      {
        icon: <HomeLineIcon />,
        title: 'Units',
        href: APP_PATHS.properties.units.get(),
      },
      {
        icon: <HomeLineIcon />,
        title: 'Leases',
        href: APP_PATHS.properties.leases.get(),
      },
      {
        icon: <HomeLineIcon />,
        title: 'Contacts',
        href: APP_PATHS.properties.contacts.get(),
      },
      {
        icon: <HomeLineIcon />,
        title: 'Tenants',
        href: APP_PATHS.properties.tenants.get(),
      },
      {
        icon: <HomeLineIcon />,
        title: 'Owners',
        href: APP_PATHS.properties.owners.get(),
      },
    ],
  },
  {
    icon: <LifeBuoy01Icon />,
    title: 'Support',
    href: APP_PATHS.support.get(),
  },
  {
    icon: <Settings01Icon />,
    title: 'Settings',
    href: APP_PATHS.settings.get(),
  },
];
