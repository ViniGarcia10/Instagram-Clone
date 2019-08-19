import { createAppContainer, createStackNavigator } from 'react-navigation';

import Feed from './Pages/Feed';

const Routes = createAppContainer(
  createStackNavigator({
    Feed
  })
);

export default Routes;

