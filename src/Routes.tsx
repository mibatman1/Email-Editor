import { FC, Fragment } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route } from "react-router-dom";
import Editor from "./Editor/container";

const Routes: FC = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BrowserRouter>
          <Route path="/">
            
          </Route>
      </BrowserRouter>
    </Fragment>
  );
};

export default Routes;
