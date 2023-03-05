import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "../../../styl/App.styl";
import logoMain from "./images/logo-main.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className="Home">
      <header>
        <h1>EverBrand</h1>
        <img alt="Product" src={logoMain} style={{ width: "300px" }} />
      </header>
      <main>
        <div className="card-container">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://via.placeholder.com/150"
                title="Image 1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Image 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is a description of Image 1.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://via.placeholder.com/150"
                title="Image 2"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Image 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is a description of Image 2.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://via.placeholder.com/150"
                title="Image 3"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Image 3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is a description of Image 3.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Home;
