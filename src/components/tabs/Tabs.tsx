import React, { useState } from 'react';
import type { TabsProps, TabItemProps } from '../../types';
import './Tabs.css';

export const TabItem: React.FC<TabItemProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`paper-tab-item ${className}`}>
      {children}
    </div>
  );
};

export const Tabs: React.FC<TabsProps> = ({
  children,
  defaultActiveTab = 0,
  onChange,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  
  const tabItems = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === TabItem
  ) as React.ReactElement<TabItemProps>[];

  const handleTabClick = (index: number) => {
    if (index !== activeTab) {
      setActiveTab(index);
      onChange?.(index);
    }
  };

  const tabsClasses = [
    'paper-tabs',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={tabsClasses}>
      <div className="paper-tabs__header">
        {tabItems.map((tab, index) => {
          const isActive = index === activeTab;
          const isDisabled = tab.props.disabled;
          
          const tabClasses = [
            'paper-tab',
            isActive ? 'paper-tab--active' : 'paper-tab--inactive',
            isDisabled ? 'paper-tab--disabled' : '',
          ].filter(Boolean).join(' ');

          return (
            <button
              key={index}
              className={tabClasses}
              onClick={() => !isDisabled && handleTabClick(index)}
              disabled={isDisabled}
              role="tab"
              aria-selected={isActive}
              aria-disabled={isDisabled}
            >
              {tab.props.label}
            </button>
          );
        })}
      </div>
      <div className="paper-tabs__content">
        {tabItems[activeTab] && (
          <div className="paper-tab-panel" role="tabpanel">
            {tabItems[activeTab].props.children}
          </div>
        )}
      </div>
    </div>
  );
};
