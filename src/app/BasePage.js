import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import PlayersProfilesPage from "./pages/PlayersProfilesPage";
import SponsorsProfilesPage from "./pages/SponsorsProfilesPage";
import UpComingTournaments from "./pages/UpComingTournamnets";
import CompletedTournaments from "./pages/CompletedTournaments";
import NetworksList from "./pages/PlatformNetworks";
import NetworkReviewPage from "./pages/NetworkReviewPage";
import AllNetworksPage from "./pages/NetworkPages";
import NewNetworkPage from "./pages/NewNetworkPage";
import CommonPagesAll from "./pages/CommonPagesAll";
import CommonPagesNew from "./pages/CommonPagesNew";
import EditNetwork from "./pages/EditNetworkPage";
import EditCommonPages from "./pages/EditCommonPages";

const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Switch>
      {
        /* Redirect from root URL to /dashboard. */
        <Redirect exact from="/" to="/dashboard" />
      }
      <ContentRoute path="/dashboard" component={DashboardPage} />
      <ContentRoute path="/builder" component={BuilderPage} />
      <ContentRoute path="/my-page" component={MyPage} />
      <ContentRoute path="/profiles/players" component={PlayersProfilesPage} />
      <ContentRoute
        path="/profiles/sponsors"
        component={SponsorsProfilesPage}
      />
      <ContentRoute
        path="/tournaments/upcoming"
        component={UpComingTournaments}
      />
      <ContentRoute
        path="/tournaments/completed"
        component={CompletedTournaments}
      />
      <ContentRoute path="/networks/all" component={AllNetworksPage} />
      <ContentRoute path="/networks/new" component={NewNetworkPage} />
      <ContentRoute path="/networks/edit" component={EditNetwork} />

      {/* <ContentRoute path="/networks/newpage" component={NewNetworkPage} /> */}
      <ContentRoute path="/pages/all" component={CommonPagesAll} />
      <ContentRoute path="/pages/new" component={CommonPagesNew} />
      <ContentRoute path="/pages/edit" component={EditCommonPages} />

      <ContentRoute
        path="/deals/888poker-review"
        component={NetworkReviewPage}
      />

      <Route path="/google-material" component={GoogleMaterialPage} />
      <Route path="/react-bootstrap" component={ReactBootstrapPage} />
      <Route path="/e-commerce" component={ECommercePage} />
      <Redirect to="error/error-v1" />
    </Switch>
  );
}
