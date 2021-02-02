import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial199676Navigator from '../features/Tutorial199676/navigator';
import NotificationList199648Navigator from '../features/NotificationList199648/navigator';
import Settings199647Navigator from '../features/Settings199647/navigator';
import Settings199639Navigator from '../features/Settings199639/navigator';
import UserProfile199637Navigator from '../features/UserProfile199637/navigator';
import BlankScreen0199614Navigator from '../features/BlankScreen0199614/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial199676: { screen: Tutorial199676Navigator },
NotificationList199648: { screen: NotificationList199648Navigator },
Settings199647: { screen: Settings199647Navigator },
Settings199639: { screen: Settings199639Navigator },
UserProfile199637: { screen: UserProfile199637Navigator },
BlankScreen0199614: { screen: BlankScreen0199614Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
