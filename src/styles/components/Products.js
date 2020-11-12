import { makeStyles } from "@material-ui/styles";

const productStyle = makeStyles((theme) => ({
  parent: {
    display: "flex !important",
  },
  child1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  child2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(5, 0, 0, 0),
  },
  title: {
    fontSize: 12,
    color: "#828282",
  },

  title2: {
    fontSize: 24,
    fontWeight: 600,
    color: "##111111",
    width: "100%",
  },
  media: {
    width: 619,
    height: 792,
  },
  mobile2: {
    display: "flex",
  },
  media2: {
    width: 122,
    height: 119,
    margin: theme.spacing(0, 2),
    borderRadius: 20,
  },
  child2_1: {
    display: "flex",
    width: "100%",
    margin: theme.spacing(3, 0),
    maxHeight: 50,
  },
  product_code: {
    color: "999CAD",
    fontSize: 16,
    margin: theme.spacing(0, 5, 0, 0),
  },
  product_eval: {
    color: "999CAD",
    fontSize: 16,
    margin: theme.spacing(0, 0, 0, 3),
  },
  star_icon: {
    color: "#F9C744",
  },
  child2_2: {
    display: "flex",
    maxHeight: 100,
    width: "100%",
  },
  child2_2_1_1: {
    color: "#000000",
    fontSize: 12,
    margin: theme.spacing(0, 5, 0, 0),
  },
  child2_2_1_2: {
    color: "#000000",
    fontSize: 24,
    fontWeight: 600,
  },
  child2_3: {
    maxHeight: 200,
    width: "100%",
  },
  available_color: {
    color: "#111111",
    fontSize: 20,
    fontWeight: 600,
    margin: theme.spacing(3, 0),
  },
  child2_3_1: {
    display: "flex",
    width: "100%",
  },
  child2_3_1_1: {
    display: "flex",
  },
  child2_3_1_1_card: {
    display: "flex",
    background: "#ECF1F4",
    borderRadius: 10,
  },
  child2_3_1_1_icon: {
    width: 25,
    height: 25,
    margin: theme.spacing(0, 2),
  },
  child2_3_1_1_color: {
    color: "#111111",
    fontSize: 18,
    fontWeight: 500,
  },
  child2_4: {
    maxHeight: 200,
    width: "100%",
  },
  capacity: {
    color: "#111111",
    fontSize: 18,
    fontWeight: 500,
    margin: theme.spacing(3, 0),
  },

  child2_4_1: {
    display: "flex",
    width: "100%",
  },
  child2_4_1_1: {
    display: "flex",
    padding: theme.spacing(1, 1),
  },
  child2_4_1_1_card: {
    display: "flex",
    background: "#ECF1F4",
    borderRadius: 10,
    padding: theme.spacing(1, 1),
  },
  capacity1: {
    color: "#111111",
    fontSize: 32,
    fontWeight: 600,
  },
  capacity2: {
    color: "#111111",
    fontSize: 12,
    margin: theme.spacing(2, 0, 0, 1),
  },
  child2_5: {
    display: "flex",
    width: "100%",
    margin: theme.spacing(2, 0),
  },
  quantity1: {
    color: "#111111",
    fontSize: 20,
    fontWeight: 600,
    margin: theme.spacing(0, 1),
  },
  quantity2: {
    color: "#F95659",
    fontSize: 18,
    fontWeight: 500,
    margin: theme.spacing(0.5, 1),
  },

  child2_6: {
    display: "flex",
    width: "100%",
    margin: theme.spacing(2, 0),
  },
  child2_6_card: {
    display: "flex",
    width: "15%",
    background: "#ECF1F4",
    borderRadius: 30,
  },
  plus: {
    color: "#737680",
    margin: theme.spacing(1, 2),
  },
  remove: {
    color: "#737680",
    margin: theme.spacing(1, 2, 0, 1),
  },
  pieces: {
    color: "#111111",
    fontSize: 18,
    fontWeight: 500,
    margin: theme.spacing(1, 0, 0, 2),
  },
  child2_7: {
    display: "flex",
    width: "100%",
    margin: theme.spacing(2, 0),
  },

  child2_8: {
    display: "flex",
    width: "100%",
    margin: theme.spacing(1, 0),
  },
  child2_8_1: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(0, 1),
    padding: theme.spacing(3, 3),
  },
  child2_8_card: {
    display: "flex",
    justifyContent: "center",
    background: "#ECF1F4",
    borderRadius: 10,
    padding: theme.spacing(3, 3),
  },
  free1: {
    color: "#111111",
    fontSize: 18,
    fontWeight: 500,
    margin: theme.spacing(0, 1, 0, 0),
  },
  free2: {
    color: "#828282",
    fontSize: 12,
    margin: theme.spacing(0, 0, 0, 1),
  },
  child2_9: {
    display: "flex",
    width: "100%",
    margin: theme.spacing(1, 0),
  },
  child2_10: {
    display: "flex",
    width: "100%",
    margin: theme.spacing(1, 0),
  },

  total1: {
    color: "#111111",
    fontSize: 20,
    fontWeight: 600,
    margin: theme.spacing(0, 1),
  },
  total2: {
    color: "#38B349",
    fontSize: 18,
    fontWeight: 500,
    margin: theme.spacing(0.5, 1),
  },
  child2_11: {
    display: "flex",
    width: "100%",
    margin: theme.spacing(1, 0),
  },
  child2_11_call: {
    display: "flex",
    background: "#0F3043",
    borderRadius: 10,
    padding: theme.spacing(2, 3),
    "&:hover": {
      cursor: "pointer",
    },
  },
  place_order: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    background: "#38B349",
    borderRadius: 10,
    margin: theme.spacing(0, 1),
    padding: theme.spacing(2, 3),
    "&:hover": {
      cursor: "pointer",
    },
  },
  call_icon: {
    color: "#FFFFFF",
    fontSize: 16,
    margin: theme.spacing(0, 1),
  },
  call_us: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    margin: theme.spacing(0, 1),
  },
  available: {
    color: "#828282",
    fontSize: 14,
    margin: theme.spacing(0, 5),
    padding: theme.spacing(2, 3),
  },
}));

export default productStyle;
