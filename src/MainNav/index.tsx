import React, { FC, useContext, useState } from 'react';
import { groupBy, sortBy } from 'lodash';
import { WhpptIcon } from '../Icon';
import { Whppt } from '../Context';

export const WhpptMainNav: FC<{ setLightMode: Function }> = ({
  setLightMode,
}) => {
  const { toggleEditing, editing } = useContext(Whppt);

  const [showFullNav, setShowFullNav] = useState(false);

  const items = [
    {
      key: 'select',
      label: 'Select Component',
      icon: 'pointer',
      action: () => toggleEditing(),
      isActive: editing,
      order: 200,
      group: 'page',
      groupOrder: 200,
    },
    {
      key: 'new-page',
      label: 'Create New Page',
      icon: 'new-page',
      // action: () => this.newPage(),
      order: 300,
      group: 'page',
      groupOrder: 200,
    },
    {
      key: 'save',
      label: 'Save Page',
      icon: 'save',

      // disabled: !this.page || !this.page._id,
      // action: this.savePage,
      order: 400,
      group: 'page',
      groupOrder: 200,
    },
    {
      key: 'nav',
      label: 'Save Navigation',
      icon: 'nav',
      // action: () => this.saveNav(),
      order: 500,
      group: 'site',
      groupOrder: 300,
    },
    {
      key: 'footer',
      label: 'Save Footer',
      icon: 'footer',
      group: 'site',
      groupOrder: 300,
      // action: () => this.saveFooter(),
      order: 600,
    },
    {
      key: 'publishPage',
      label: 'Publish Page',
      icon: 'publish',
      // icon: this.hasPublishableChanges ? 'publish-with-notification' : 'publish',
      // disabled: !this.page || !this.page._id,
      // action: () => this.doEditInModal('publishSettings'),
      order: 700,
      group: 'page',
      groupOrder: 200,
    },
    {
      key: 'config-settings',
      label: 'Open Config Settings',
      icon: 'globe',
      // action: () => this.doEditInModal('configSettings'),
      order: 800,
      group: 'config',
      groupOrder: 400,
    },
    {
      key: 'site-settings',
      label: 'Open Site Settings',
      icon: 'settings',
      // action: () => this.doEditInModal('siteSettings'),
      order: 900,
      group: 'site',
      groupOrder: 300,
    },
    {
      key: 'page-settings',
      label: 'Open Page Settings',
      icon: 'page-settings',
      // action: () => this.doEditInModal('pageSettings'),
      action: () => toggleEditing(),
      order: 1000,
      group: 'page',
      groupOrder: 200,
    },
    {
      key: 'dashboard',
      label: 'Open Dashboard',
      icon: 'dashboard',
      order: 1100,
      group: 'config',
      groupOrder: 400,
    },

    // ...this.$whppt.menuItems.map(i => ({ ...i, action: this.runAction(i.action) })),
  ];

  const groupedItems = sortBy(groupBy(sortBy(items, ['order']), 'group'), [
    'groupOrder',
  ]);

  return (
    <div
      className={`whppt-main-nav ${
        showFullNav ? 'whppt-main-nav--show-full-nav' : ''
      }`}
    >
      <div className="whppt-main-nav-contents">
        <div>
          <button
            onClick={() => setShowFullNav(!showFullNav)}
            className="whppt-main-nav__logo"
          >
            <div className="whppt-main-nav__icon">
              <WhpptIcon is="bruce"></WhpptIcon>
            </div>
            {showFullNav && (
              <div className="whppt-main-nav__whppt-label">Whppt</div>
            )}
          </button>
          <div>
            {groupedItems.map((navItems) => {
              return (
                <div key={navItems[0].group}>
                  <div className="whppt-main-nav-group--title">
                    {navItems[0].group}
                  </div>
                  <ul className="whppt-main-nav-group">
                    {navItems.map((item) => {
                      return (
                        <li key={item.key}>
                          <button
                            disabled={item.disabled}
                            className={`whppt-main-nav-group__nav-item ${
                              item.isActive
                                ? 'whppt-main-nav-group__nav-item--active'
                                : ''
                            }`}
                            onClick={() => item.action && item.action()}
                          >
                            <div className="whppt-main-nav__icon">
                              <WhpptIcon is={item.icon}></WhpptIcon>
                            </div>
                            {showFullNav && (
                              <div className="whppt-main-nav-group__label">
                                {item.label}
                              </div>
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <button
            onClick={() => setLightMode()}
            className="whppt-main-nav-group__nav-item whppt-main-nav-group--toggle"
          >
            <div className="whppt-main-nav__icon">
              T{/* <WhpptIcon is={'logout'}></WhpptIcon> */}
            </div>
            {showFullNav && (
              <div className="whppt-main-nav-group__label">
                Toggle Dark Mode
              </div>
            )}
          </button>
          <button className="whppt-main-nav-group__nav-item">
            <div className="whppt-main-nav__icon">
              <WhpptIcon is={'logout'}></WhpptIcon>
            </div>
            {showFullNav && (
              <div className="whppt-main-nav-group__label">Log Out</div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
