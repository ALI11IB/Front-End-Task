import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import StarIcon from "@material-ui/icons/Star";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CallIcon from "@material-ui/icons/Call";
import useStyles from "../styles/components/Products";

function Products() {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.parent}>
      <Grid item xs={6} className={classes.child1}>
        <Typography className={classes.title} variant="h6" noWrap>
          {
            "Home > All Industries > Consumer Electronics > Mobile Phone & Accessories > Mobile Phones"
          }
        </Typography>
        <CardMedia className={classes.media} image="/images/image1.png" />
        <Grid item className={classes.mobile2}>
          <CardMedia className={classes.media2} image="/images/image2.png" />
          <CardMedia className={classes.media2} image="/images/image3.png" />
          <CardMedia className={classes.media2} image="/images/image4.png" />
        </Grid>
      </Grid>
      <Grid item xs={6} className={classes.child2}>
        <Typography className={classes.title2} variant="h6">
          {
            "Single SIM 11 Pro Max Phone Gold 512GB6.5 Inch Hot Selling Phone Wholesale"
          }
        </Typography>

        <Grid item xs={12} className={classes.child2_1}>
          <Typography className={classes.product_code} variant="h6">
            {"Product Code: 578902-00 "}
          </Typography>
          <StarIcon className={classes.star_icon} />
          <StarIcon className={classes.star_icon} />
          <StarIcon className={classes.star_icon} />
          <StarIcon className={classes.star_icon} />
          <StarIcon className={classes.star_icon} />
          <Typography className={classes.product_eval} variant="h6">
            {"4.6(200)"}
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.child2_2}>
          <Grid item xs={4} className={classes.child2_2_1}>
            <Typography className={classes.child2_2_1_1} variant="h6">
              {"10 - 25 Pieces"}
            </Typography>
            <Typography className={classes.child2_2_1_2} variant="h6">
              {"AED 1,150,50.00 "}
            </Typography>
          </Grid>

          <Grid item xs={4} className={classes.child2_2_1}>
            <Typography className={classes.child2_2_1_1} variant="h6">
              {"10-19 Pieces"}
            </Typography>
            <Typography className={classes.child2_2_1_2} variant="h6">
              {"$1,145.00"}
            </Typography>
          </Grid>

          <Grid item xs={4} className={classes.child2_2_3}>
            <Typography className={classes.child2_2_1_1} variant="h6">
              {"50+ Pieces"}
            </Typography>
            <Typography className={classes.child2_2_1_2} variant="h6">
              {"$1,145.00"}
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.child2_3}>
          <Typography className={classes.available_color} variant="h2">
            {"Availble color "}
          </Typography>

          <Grid item className={classes.child2_3_1}>
            <Grid item xs={2} className={classes.child2_3_1_1_card}>
              <CardMedia
                className={classes.child2_3_1_1_icon}
                image="/images/image5.png"
              />
              <Typography className={classes.child2_3_1_1_color} variant="h6">
                {"Black"}
              </Typography>
            </Grid>

            <Grid item xs={2} className={classes.child2_3_1_1}>
              <CardMedia
                className={classes.child2_3_1_1_icon}
                image="/images/image6.png"
              />
              <Typography className={classes.child2_3_1_1_color} variant="h6">
                {"Red"}
              </Typography>
            </Grid>

            <Grid item xs={2} className={classes.child2_3_1_1}>
              <CardMedia
                className={classes.child2_3_1_1_icon}
                image="/images/image7.png"
              />
              <Typography className={classes.child2_3_1_1_color} variant="h6">
                {"Green"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.child2_4}>
          <Typography className={classes.capacity} variant="h2">
            {"Storage capacity"}
          </Typography>

          <Grid item className={classes.child2_4_1}>
            <Grid item xs={2} className={classes.child2_4_1_1}>
              <Typography className={classes.capacity1} variant="h2">
                {"128"}
              </Typography>

              <Typography className={classes.capacity2} variant="h6">
                {"GB"}
              </Typography>
            </Grid>

            <Grid item xs={2} className={classes.child2_4_1_1}>
              <Typography className={classes.capacity1} variant="h2">
                {"256"}
              </Typography>

              <Typography className={classes.capacity2} variant="h6">
                {"GB"}
              </Typography>
            </Grid>

            <Grid item xs={2} className={classes.child2_4_1_1_card}>
              <Typography className={classes.capacity1} variant="h2">
                {"512"}
              </Typography>

              <Typography className={classes.capacity2} variant="h6">
                {"GB"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.child2_5}>
          <Typography className={classes.quantity1} variant="h2">
            {"Quantity"}
          </Typography>
          <Typography className={classes.quantity2} variant="h2">
            {"$12,000"}
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.child2_6}>
          <Grid item className={classes.child2_6_card}>
            <RemoveIcon className={classes.remove} />
            <AddIcon className={classes.plus} />
          </Grid>
          <Typography className={classes.pieces} variant="h2">
            {"51 Pieces"}
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.child2_7}>
          <Typography className={classes.quantity1} variant="h2">
            {"Shiping"}
          </Typography>
          <Typography className={classes.quantity2} variant="h2">
            {"$100"}
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.child2_8}>
          <Grid item className={classes.child2_8_1}>
            <Typography className={classes.free1} variant="h2">
              {"Free"}
            </Typography>

            <Typography className={classes.free2} variant="h6">
              {"Estimated 15 - 30 days"}
            </Typography>
          </Grid>

          <Grid item className={classes.child2_8_card}>
            <Typography className={classes.free1} variant="h2">
              {"Fast"}
            </Typography>

            <Typography className={classes.free2} variant="h6">
              {"Estimated 5 - 7 days"}
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.child2_9}>
          <Grid item className={classes.child2_8_1}>
            <Typography className={classes.free1} variant="h2">
              {"Rocket"}
            </Typography>

            <Typography className={classes.free2} variant="h6">
              {"Estimated 2 - 5 days"}
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.child2_10}>
          <Typography className={classes.total1} variant="h2">
            {"Total"}
          </Typography>
          <Typography className={classes.total2} variant="h2">
            {"$12,100"}
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.child2_11}>
          <Typography className={classes.place_order} variant="h2">
            {"Place order now"}
          </Typography>
          <Grid item className={classes.child2_11_call}>
            <CallIcon className={classes.call_icon} />
            <Typography className={classes.call_us} variant="h2">
              {"Call us"}
            </Typography>
          </Grid>
          <Typography className={classes.available} variant="h2">
            {"We are 24/7 available"}
          </Typography>
        </Grid>

        {/* ************** */}
      </Grid>
    </Grid>
  );
}

export default Products;
