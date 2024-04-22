import { Accordion, AppShell, TextInput } from '@mantine/core';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { sidebarEntries } from './sidebarEntries';
import { LogoIcon, SearchLgIcon } from '@/assets/iconComponents';

export const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <AppShell
      navbar={{
        width: 264,
        breakpoint: '500',
      }}
    >
      <AppShell.Navbar p="md" className="bg-black text-md-semibold px-6">
        <div className="flex items-center gap-2.5">
          <LogoIcon />
          <span className="text-gray-100 text-logo">Company</span>
        </div>
        <TextInput
          className="mt-6"
          placeholder="Search"
          leftSection={<SearchLgIcon className="text-gray-300" />}
          classNames={{
            input: 'bg-gray-800 text-gray-200 text-md-regular',
          }}
        />
        <Accordion
          classNames={{
            item: 'bg-black',
            content: 'p-0 pl-2',
          }}
          className="mt-6"
        >
          {sidebarEntries.map((entry) => {
            if (entry.children) {
              const isActive = pathname.startsWith(entry.href);

              return (
                <Accordion.Item key={entry.title} value={entry.href} className="border-none">
                  <NavLink key={entry.href} to={entry.href}>
                    <Accordion.Control
                      icon={entry.icon}
                      classNames={{
                        label: 'py-2 text-md-semibold',
                        icon: 'text-gray-300',
                      }}
                      className={clsx(
                        'pl-3 pr-2 text-gray-100 hover:bg-gray-900 rounded-md',
                        isActive && 'text-main'
                      )}
                    >
                      {entry.title}
                    </Accordion.Control>

                    <Accordion.Panel className="flex flex-col px-0">
                      {entry.children.map((child) => (
                        <NavLink
                          key={child.href}
                          to={child.href}
                          className="flex items-center hover:bg-gray-900 text-gray-300 px-3 py-2 gap-3"
                          onClick={() => {}}
                        >
                          {child.icon}
                          <span className="text-gray-100">{child.title}</span>
                        </NavLink>
                      ))}
                    </Accordion.Panel>
                  </NavLink>
                </Accordion.Item>
              );
            }

            return (
              <Accordion.Item key={entry.title} value={entry.href} className="border-none">
                <NavLink
                  key={entry.href}
                  to={entry.href}
                  className="flex items-center hover:bg-gray-900 text-gray-300 px-3 py-2 gap-3"
                >
                  {entry.icon}
                  <span className="text-gray-100">{entry.title}</span>
                </NavLink>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </AppShell.Navbar>

      <AppShell.Main className="flex flex-col">
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
