import {
  Card,
  Grid,
  CardContent,
  Container,
  Typography,
  TextField,
  Box,
} from "@material-ui/core";
import "./style.css";
import ImgBanner from "../../assets/product-banner.png";
import Img1 from "../../assets/img.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";
import Img4 from "../../assets/img4.png";
import Img5 from "../../assets/img5.png";
import Img6 from "../../assets/img6.png";
import Button from "../../components/Button";
import ProductItem from "../../components/ProductItem";
import { FaTimes } from "react-icons/fa";
function ProductsGallery() {
  return (
    <Container fixed>
      <Card className="card-layout">
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img src={ImgBanner} alt="Imagem banner" />
            </Grid>
            <Grid item xs={8} className="grid-banner-2">
              <h1>
                Vera Bradley <span>£4.99</span>
              </h1>
              <p>
                Carry the day in style with this extra-large tote crafted in our
                chic B.B. Collection textured PVC. Featuring colorful faux
                leather trim, this tote offers a roomy interior plus just
                enough.
              </p>
              <Button size="18" width="30">
                Add to Cart
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card className="card-layout">
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={1} />
            <Grid item xs={5}>
              <form row={true} noValidate autoComplete="off">
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                      id="outlined-basic"
                      label="Gender"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="outlined-basic"
                      label="Casual"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="outlined-basic"
                      label="Color"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xs={3}>
              <Box display="flex" justifyContent="flex-end">
                <form noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="Most relevant"
                    variant="outlined"
                  />
                </form>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card className="card-layout">
            <CardContent>
              <Box className="card-filters">
                <p>
                  <FaTimes size={12} /> <span>Gender:</span> Woman
                </p>
                <p>
                  <FaTimes size={12} /> <span>Category:</span> Dresses
                </p>
              </Box>
              <Box>
                <Typography variant="h5" color="textSecondary" gutterBottom>
                  <span className="title-filters">Color</span>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={2}>
            <ProductItem image={Img1} title="Men's Knitwear Offers" />
            <ProductItem image={Img2} title="Men's Knitwear Offers" />
            <ProductItem image={Img3} title="Men's Knitwear Offers" />
            <ProductItem image={Img4} title="Men's Knitwear Offers" />
            <ProductItem image={Img5} title="Men's Knitwear Offers" />
            <ProductItem image={Img6} title="Men's Knitwear Offers" />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductsGallery;
