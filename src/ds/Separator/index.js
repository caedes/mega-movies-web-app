import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
});

export default function Separator() {
  const classes = useStyles();

  return <div className={classes.grow} />;
}
