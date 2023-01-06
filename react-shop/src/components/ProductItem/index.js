import { Grid, Card, CardContent } from "@material-ui/core";
import Button from "../Button";
import { FlexDiv } from "./style";

function ProductItem(props) {
  return (
    <Grid item xs={4}>
      <Card className="card-layout">
        <CardContent>
          <FlexDiv>
            <img src={props.image} alt={props.title} />
            <p>{props.title}</p>
            <Button size="11" width="50">
              Buy Now
            </Button>
          </FlexDiv>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ProductItem;
