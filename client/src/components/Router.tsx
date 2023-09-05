import React, { useMemo } from "react";
import {
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import { intersection, isEmpty } from "lodash";

import { NoMatch } from "../pages/error/Error";
import HEADERS_CONFIG, { INavItemConfig } from "../config/headerConfig";
import { useSelector } from "react-redux";
import { RootState } from "../store";


const PermissionDenied = (props: any) => {
  return (
    <div>
      you don't have permission to access this page. {props.path}
    </div>
  )
}

export const ProtectedRoutes = ({navItem}: any) => {
  const user = useSelector((store: RootState) => store.user?.loggedInUser);

  if (!isEmpty(navItem.roles) && isEmpty(intersection(user?.roles || [], navItem?.roles || []))) {
    return <Route {...navItem} component = {() => 
    <Redirect to="/login"/>
  }/>
  }
  if(!!navItem.redirectPath){
    return <Redirect to={navItem.redirectPath}/>
  }
  return <Route {...navItem}></Route>

}

const CustomRouter = () => {
  const navItems = useMemo(() => HEADERS_CONFIG.navItems, [HEADERS_CONFIG.navItems])
  return (
    <Switch>
      {
        navItems.map((navItem: INavItemConfig, index) => {
          return <Route
            key={index}
            path={navItem.path}
            exact={!!navItem.exact}
            component = { () => <ProtectedRoutes navItem={navItem}/>}
          />
        })
      }
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  )
}



export default CustomRouter;
