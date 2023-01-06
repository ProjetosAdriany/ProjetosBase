import React from "react";

import {
  Backdrop,
  Fade,
  Modal,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import { FaOpencart } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  table: {
    minWidth: 650,
  },
  button: {
    display: "flex",
    alignItems: "right",
  },
}));

function createData(item, size, amount, price) {
  return { item, size, amount, price };
}

const rows = [
  createData("Item 1", "XXL", 2, 21),
  createData("Item 2", "XL", 2, 13),
  createData("Item 3", "L", 2, 42),
  createData("Item 4", "XS", 2, 24),
];

function Cart() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const items = rows.length;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        <FaOpencart />
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2>{items} Items in Your Cart</h2>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell align="right">Size</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.item}>
                      <TableCell component="th" scope="row">
                        {row.image}
                        {row.item}
                      </TableCell>
                      <TableCell align="right">{row.size}</TableCell>
                      <TableCell align="right">{row.amount}</TableCell>
                      <TableCell align="right">$ {row.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <br />
            <hr />
            <br />
            <Button variant="outlined" color="primary">
              Back to Shop
            </Button>
            <Button className="button" variant="outlined" color="secondary">
              Checkout
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Cart;
