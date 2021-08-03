import { makeStyles } from "@material-ui/core";
import React from "react";
import { useRecordContext } from "react-admin";

const useStyles = makeStyles({
  phone: {
    fontStyle: "italic",
  },
});

export default function MyPhoneField({ source }) {
  const record = useRecordContext();
  const classes = useStyles();

  return record ? (
    <span className={classes.phone}>{record[source]}</span>
  ) : null;
}
