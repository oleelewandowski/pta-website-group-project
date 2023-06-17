import React from "react";
import { Loading, Grid } from "@nextui-org/react";

const Loader = () => {
  return (
    <Grid.Container alignItems="center" justify="center">
      <Grid>
        <Loading
          loadingCss={{ $$loadingSize: "50px", $$loadingBorder: "6px" }}
          css={{ marginTop: "$2xl" }}
        />
      </Grid>
    </Grid.Container>
  );
};

export default Loader;
