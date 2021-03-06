import {Box} from 'grid-emotion';
import PropTypes from 'prop-types';
import React from 'react';

import SettingsNavigationGroup from '../components/settingsNavigationGroup';
import SentryTypes from '../../../proptypes';

class SettingsNavigation extends React.Component {
  static propTypes = {
    hooks: PropTypes.array,
    hookConfigs: PropTypes.array,
    navigationObjects: PropTypes.arrayOf(SentryTypes.NavigationObject).isRequired,
  };

  static defaultProps = {
    hooks: [],
    hookConfigs: [],
  };

  render() {
    let {navigationObjects, hooks, hookConfigs, ...otherProps} = this.props;
    let navWithHooks = navigationObjects.concat(hookConfigs);

    return (
      <Box>
        {navWithHooks.map(config => (
          <SettingsNavigationGroup key={config.name} {...otherProps} {...config} />
        ))}
        {hooks.map((Hook, i) => Hook)}
      </Box>
    );
  }
}

export default SettingsNavigation;
