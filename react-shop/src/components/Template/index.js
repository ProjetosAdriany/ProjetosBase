import { Toolbar, Container, Grid } from "@material-ui/core";
import {
  AppBarBlack,
  ContainerDiv,
  Footer,
  TitleFooter,
  SocialButton,
  Search,
  ButtonCart,
} from "./styles";
import Logo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaShoppingBag,
} from "react-icons/fa";
function Template(props) {
  return (
    <>
      <header>
        <AppBarBlack position="static" className="teste">
          <Toolbar>
            <img src={Logo} alt="Logo loja virtual" />
            <ContainerDiv justifyContent="flex-end">
              <Grid item xs={1}>
                <TitleFooter size={14}>Women</TitleFooter>
              </Grid>
              <Grid item xs={1}>
                <TitleFooter size={14}>Men</TitleFooter>
              </Grid>
              <Grid item xs={1}>
                <TitleFooter size={14}>Kids</TitleFooter>
              </Grid>
              <Grid item xs={1}>
                <TitleFooter size={14}>Shoes</TitleFooter>
              </Grid>
              <Grid item xs={1}>
                <TitleFooter size={14}>Brands</TitleFooter>
              </Grid>
              <Grid item xs={3}>
                <TitleFooter size={14}>
                  <Search type="text" placeholder="Search anything" />
                </TitleFooter>
              </Grid>
              <Grid item xs={1}>
                <TitleFooter size={14}>
                  <ButtonCart>
                    <FaShoppingBag size={18} />
                    <span>Cart</span>
                  </ButtonCart>
                </TitleFooter>
              </Grid>
            </ContainerDiv>
          </Toolbar>
        </AppBarBlack>
      </header>
      <Container>{props.children}</Container>
      <Footer>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <TitleFooter size={21}>Women</TitleFooter>
          </Grid>
          <Grid item xs={2}>
            <TitleFooter size={21}>Men</TitleFooter>
          </Grid>
          <Grid item xs={2}>
            <TitleFooter size={21}>Kids</TitleFooter>
          </Grid>
          <Grid item xs={2}>
            <TitleFooter size={21}>Shoes</TitleFooter>
          </Grid>
          <Grid item xs={2}>
            <TitleFooter size={21}>Brands</TitleFooter>
          </Grid>
        </Grid>
        <ContainerDiv paddingTop={7} justifyContent="center">
          <Grid item xs={1}>
            <SocialButton>
              <FaInstagram />
            </SocialButton>
          </Grid>
          <Grid item xs={1}>
            <SocialButton>
              <FaPinterest />
            </SocialButton>
          </Grid>
          <Grid item xs={1}>
            <SocialButton>
              <FaTwitter />
            </SocialButton>
          </Grid>
          <Grid item xs={1}>
            <SocialButton>
              <FaFacebook />
            </SocialButton>
          </Grid>
        </ContainerDiv>
      </Footer>
    </>
  );
}

export default Template;
