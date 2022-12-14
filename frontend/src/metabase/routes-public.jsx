import React from "react";

import { t } from "ttag";
import { Route } from "metabase/hoc/Title";

import PublicNotFound from "metabase/public/components/PublicNotFound";

import PublicApp from "metabase/public/containers/PublicApp";
import LazyLoad from "./routesLazyLoad";

export const getRoutes = store => (
  <Route title={t`Metabase`}>
    <Route path="public" component={PublicApp}>
      <Route
        path="question/:uuid(/:name)"
        component={LazyLoad.PublicQuestion}
      />
      <Route path="chart/:titleAndId" component={LazyLoad.PublicQuestion} />
      <Route
        path="dashboard/:uuid(/:name)"
        component={LazyLoad.PublicDashboard}
      />
      <Route
        path="scene/chart/:titleAndId"
        component={LazyLoad.PublicQuestion}
      />
      <Route
        path="scene/dashboard/:uuid(/:name)"
        component={LazyLoad.PublicDashboard}
      />
      <Route
        path="wl/dashboard/:uuid(/:name)"
        component={LazyLoad.PublicDashboard}
      />
      <Route path="widget/chart/:uuid" component={LazyLoad.WidgetPublic} />
      <Route title={t`Explore`} path="explore" component={LazyLoad.Explore} />
      <Route path="*" component={PublicNotFound} />
    </Route>
    <Route path="*" component={PublicNotFound} />
  </Route>
);
