import React from 'react';
import PageHeader from './PageHeader';
import pageHeaderDriverFactory from './PageHeader.driver';
import {createDriverFactory} from '../test-common';
import Button from '../Button';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const generateBreadcrumbs = title =>
  <Breadcrumbs
    items={[{id: '1', value: title}]}
    activeId="1"
    size="medium"
    theme="onGrayBackground"
    onClick={() => {}}
    />;

describe('PageHeader', () => {
  const title = 'This is a title';
  const subtitle = 'This is a subtitle';
  const breadcrumbs = generateBreadcrumbs(title);
  const actionsBar = <Button>Action</Button>;
  const onBackClicked = () => {};
  const createDriver = createDriverFactory(pageHeaderDriverFactory);

  it('should initialize component with title', () => {
    const pageHeader = <PageHeader title={title}/>;
    const driver = createDriver(pageHeader);
    expect(driver.titleText()).toBe(title);
    expect(driver.isTitleExists()).toBeTruthy();
    expect(driver.isSubtitleExists()).toBeFalsy();
    expect(driver.isBreadcrumbsExists()).toBeFalsy();
  });

  it('should initialize component with minimized title', () => {
    const pageHeader = <PageHeader minimized title={title}/>;
    const driver = createDriver(pageHeader);
    expect(driver.isTitleExists()).toBeFalsy();
    expect(driver.isSubtitleExists()).toBeFalsy();
    expect(driver.isBreadcrumbsExists()).toBeTruthy();
  });

  it('should initialize component with title and subtitle', () => {
    const pageHeader = <PageHeader title={title} subtitle={subtitle}/>;
    const driver = createDriver(pageHeader);
    expect(driver.titleText()).toBe(title);
    expect(driver.subtitleText()).toBe(subtitle);
    expect(driver.isTitleExists()).toBeTruthy();
    expect(driver.isSubtitleExists()).toBeTruthy();
    expect(driver.isBreadcrumbsExists()).toBeFalsy();
  });

  it('should initialize component with title and subtitle with a special character', () => {
    const someTextWithSpecialCharachters = 'tom & jerry';
    const pageHeader = <PageHeader title={someTextWithSpecialCharachters} subtitle={someTextWithSpecialCharachters}/>;
    const driver = createDriver(pageHeader);
    expect(driver.titleText()).toEqual(someTextWithSpecialCharachters);
    expect(driver.subtitleText()).toEqual(someTextWithSpecialCharachters);
  });

  it('should initialize component with minimized title and subtitle', () => {
    const pageHeader = <PageHeader minimized title={title} subtitle={subtitle}/>;
    const driver = createDriver(pageHeader);
    expect(driver.isTitleExists()).toBeFalsy();
    expect(driver.isSubtitleExists()).toBeFalsy();
    expect(driver.isBreadcrumbsExists()).toBeTruthy();
  });

  it('should initialize component with breadcrumbs and title', () => {
    const pageHeader = <PageHeader breadcrumbs={breadcrumbs} title={title}/>;
    const driver = createDriver(pageHeader);
    expect(driver.titleText()).toBe(title);
    expect(driver.isTitleExists()).toBeTruthy();
    expect(driver.isSubtitleExists()).toBeFalsy();
    expect(driver.isBreadcrumbsExists()).toBeTruthy();
  });

  it('should initialize component with minimized breadcrumbs and title', () => {
    const pageHeader = <PageHeader minimized breadcrumbs={breadcrumbs} title={title}/>;
    const driver = createDriver(pageHeader);
    expect(driver.isTitleExists()).toBeFalsy();
    expect(driver.isSubtitleExists()).toBeFalsy();
    expect(driver.isBreadcrumbsExists()).toBeTruthy();
  });

  it('should initialize component with breadcrumbs, title and subtitle', () => {
    const pageHeader = <PageHeader breadcrumbs={breadcrumbs} title={title} subtitle={subtitle}/>;
    const driver = createDriver(pageHeader);
    expect(driver.titleText()).toBe(title);
    expect(driver.subtitleText()).toBe(subtitle);
    expect(driver.isTitleExists()).toBeTruthy();
    expect(driver.isSubtitleExists()).toBeTruthy();
    expect(driver.isBreadcrumbsExists()).toBeTruthy();
  });

  it('should initialize component with minimized breadcrumbs, title and subtitle', () => {
    const pageHeader = <PageHeader minimized breadcrumbs={breadcrumbs} title={title} subtitle={subtitle}/>;
    const driver = createDriver(pageHeader);
    expect(driver.isTitleExists()).toBeFalsy();
    expect(driver.isSubtitleExists()).toBeFalsy();
    expect(driver.isBreadcrumbsExists()).toBeTruthy();
  });

  it('should initialize component with title and actionsBar', () => {
    const pageHeader = <PageHeader title={title} actionsBar={actionsBar}/>;
    const driver = createDriver(pageHeader);
    expect(driver.isActionBarExists()).toBeTruthy();
  });

  it('should initialize component with minimized title and actionsBar', () => {
    const pageHeader = <PageHeader minimized title={title} actionsBar={actionsBar}/>;
    const driver = createDriver(pageHeader);
    expect(driver.isActionBarExists()).toBeTruthy();
  });

  it('should initialize component with title and back button without callback', () => {
    const pageHeader = <PageHeader title={title} showBackButton/>;
    const driver = createDriver(pageHeader);
    expect(driver.isBackButtonExists()).toBeFalsy();
  });

  it('should initialize component with title and back button callback', () => {
    const pageHeader = <PageHeader title={title} onBackClicked={onBackClicked}/>;
    const driver = createDriver(pageHeader);
    expect(driver.isBackButtonExists()).toBeFalsy();
  });

  it('should initialize component with title and back button callback and back button', () => {
    const pageHeader = <PageHeader title={title} showBackButton onBackClicked={onBackClicked}/>;
    const driver = createDriver(pageHeader);
    expect(driver.isBackButtonExists()).toBeTruthy();
  });

  it('should initialize component with minimized title and back button callback and back button', () => {
    const pageHeader = <PageHeader minimized title={title} showBackButton onBackClicked={onBackClicked}/>;
    const driver = createDriver(pageHeader);
    expect(driver.isBackButtonExists()).toBeFalsy();
  });

  it('should set a dark theme when displaying a background image', () => {
    const pageHeader = (<PageHeader
      title={title}
      subtitle={subtitle}
      hasBackgroundImage
      breadcrumbs={breadcrumbs}
      actionsBar={actionsBar}
      showBackButton
      onBackClicked={onBackClicked}
      />);

    const driver = createDriver(pageHeader);

    expect(driver.isTitleDarkTheme()).toBeTruthy();
    expect(driver.isSubtitleDarkTheme()).toBeTruthy();
    expect(driver.isBackButtonDarkTheme()).toBeTruthy();
    expect(driver.isBreadcrumbsDarkTheme()).toBeTruthy();
  });
});
