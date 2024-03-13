import { FC, Fragment } from "react";
import ContainerWrapper from "../Container";
import styles from "./style";
import { TwoColumnLayoutTypes } from "./types";
import clsx from "clsx";
import { Grid, Typography } from "@mui/material";

const TwoColumnLayout: FC<TwoColumnLayoutTypes> = ({
  LeftSection,
  leftSectionStyles,
  RightSection,
  rightSectionStyles,
  pageTitle,
}): JSX.Element => {

  return (
    <ContainerWrapper>
      <Fragment>
        <Grid container>
          <Grid item md={8} xs={12}>
            <div className={clsx(styles.leftColumn, leftSectionStyles)}>
              {LeftSection}
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className={clsx(styles.rightColumn, rightSectionStyles)}>
              {RightSection}
            </div>
          </Grid>
        </Grid>
      </Fragment>
    </ContainerWrapper>
  );
};

export default TwoColumnLayout;
