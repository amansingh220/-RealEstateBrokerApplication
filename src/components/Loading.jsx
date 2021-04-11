import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

// Loading component is used to show animation while loading.
export default function Loading() {
  return <CircularProgress color="green" disableShrink />;
}
