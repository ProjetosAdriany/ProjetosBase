import {
    Card,
    CardContent,
    Button,
    Container,
  } from "@material-ui/core";
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MaskImage from "../../assets/Bitmap.png";
import Star from "../../assets/gold.png";
import Descricao from "../../assets/Descricao.png";
import Preco from "../../assets/Preco.png"
import Model from "../../assets/Model.png"


  function Componets() {
    return (
        <Container fixed>
        <Card className="card-layout">
        <CardContent>
        <Paper >
        <Table >
          <TableBody>          
              <TableRow >
                <TableCell rowSpan={9} width={600} align="center">
                    <img src={MaskImage} alt="Imagem banner" />
                </TableCell>
                <TableCell align="center">Home - All Categories Mens - Clothing Accessories</TableCell>
              </TableRow>
            <TableRow>
              <TableCell align="left">
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                <img src={Descricao} alt="descricao"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                 <img src={Preco} alt="preco" />          
                </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Color</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="Left">Size</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
              <Button variant="contained" disabled>
                XS
              </Button>
                <Button variant="contained" color="secondary">
                S
                </Button>
                <Button variant="contained" disabled>
                M
                </Button>
                <Button variant="contained" disabled>
                L
                </Button>
                <Button variant="contained" disabled>
                XL
                </Button>
                <Button variant="contained" disabled>
                XXL
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
           
              <TableCell align="Left">Quantity</TableCell>
            </TableRow>
            <TableRow>
            <TableCell rowSpan={2} width={600} align="center">
            <img src={Model} alt="preco" />          
                </TableCell>
              <TableCell align="center">
              <Button variant="contained" color="default" padding={12}>
                -
                </Button>
                <Button variant="contained" color="default">
                2
                </Button>
                <Button variant="contained" color="default">
                +
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="Center">
              <Button variant="contained" color="secondary" padding={12}>
                ADD TO CAR
                </Button>
                <Button variant="contained" color="default">
                Add wish to list
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="Left" colSpan={2}>PRODUCTS REVIEWS</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="Left">
              <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
              </TableCell>
              <TableCell align="Left">
                  Got this trought product
              </TableCell>

            </TableRow>

            <TableRow>
                <TableCell align="Left" colSpan={2}>ADD A REVIEW</TableCell>
            </TableRow>

            <TableRow>
            <TableCell align="Left" rowSpan={5}></TableCell>
              <TableCell align="Left"></TableCell>
            </TableRow>

            <TableRow>
                
              <TableCell align="left" rowSpan={3} width={700}>Comentario</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="Left"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="Left"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="Left">
              <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center"></TableCell>
              <Button variant="contained" color="secondary" padding={12}>
                SUBMIT
                </Button>
            </TableRow>
            
          </TableBody>
        </Table>
      </Paper>
      </CardContent>
      </Card>

      {/* <Card className="card-layout">
        <CardContent>
          <Grid container spacing={2}>
          <img src={MaskImage} alt="Imagem banner" />

          </Grid>
        </CardContent>
      </Card> */}
      </Container>
      
    );
  }
  
  export default Componets;
  