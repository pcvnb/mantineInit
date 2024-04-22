import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { APP_PATHS } from './app-paths';
import {
  ContactsPage,
  ErrorPage,
  EvictionFeesPage,
  GuaranteedLeasesPage,
  HomePage,
  LeasesPage,
  MaliciousDamagesPage,
  OwnersPage,
  PropertiesPage,
  PropertyPage,
  RentClaimsPage,
  SettingsPage,
  SupportPage,
  TenantsPage,
  UnitsPage,
} from '@/pages';
import { AddPropertyPage } from '@/pages/Properties/add/AddProperty.page';

const propertiesRoutes = [
  {
    path: APP_PATHS.properties.property.get(),
    element: <PropertyPage />,
  },
  {
    path: APP_PATHS.properties.units.get(),
    element: <UnitsPage />,
  },
  {
    path: APP_PATHS.properties.leases.get(),
    element: <LeasesPage />,
  },
  {
    path: APP_PATHS.properties.contacts.get(),
    element: <ContactsPage />,
  },
  {
    path: APP_PATHS.properties.tenants.get(),
    element: <TenantsPage />,
  },
  {
    path: APP_PATHS.properties.owners.get(),
    element: <OwnersPage />,
  },
  {
    path: APP_PATHS.properties.add.get(),
    element: <AddPropertyPage />,
  },
];

const routes = [
  {
    path: APP_PATHS.home.get(),
    element: <HomePage />,
  },
  {
    path: APP_PATHS.properties.get(),
    element: <PropertiesPage />,
  },
  {
    path: APP_PATHS.guaranteedLeases.get(),
    element: <GuaranteedLeasesPage />,
  },
  {
    path: APP_PATHS.rentClaims.get(),
    element: <RentClaimsPage />,
  },
  {
    path: APP_PATHS.evictionFees.get(),
    element: <EvictionFeesPage />,
  },
  {
    path: APP_PATHS.maliciousDamages.get(),
    element: <MaliciousDamagesPage />,
  },
  {
    path: APP_PATHS.settings.get(),
    element: <SettingsPage />,
  },
  {
    path: APP_PATHS.support.get(),
    element: <SupportPage />,
  },
  ...propertiesRoutes,
];

export function Router() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: routes,
  },
]);
