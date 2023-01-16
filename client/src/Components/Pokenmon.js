import React, {useState, useEffect} from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Pagination() {
  const [currPage, setCurrPage] = useState(1); // storing current page number
  const [prevPage, setPrevPage] = useState(0); // storing prev page number
  const [userList, setUserList] = useState([]); // storing list
  const [wasLastList, setWasLastList] = useState(false); // setting a flag to know the last list
  const [data, setData] = useState('');
  const pokemon = useSelector((state) => state.pokemon)
  console.log("pokemon",pokemon);
  
  const dispatch = useDispatch()

  useEffect( ()=>{
    const getAllUser = async () => {
      const res = await axios.get(`http://localhost:8000/pokemon/`);
      console.log(res.data);
      setData(res.data);
      debugger;
      await dispatch(res.data);
    }
  },[])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(`http://localhost:8000/`);
  //     console.log("response",response);

  //     if (!response.data.data.length) {
  //       setWasLastList(true);
  //       return; 
  //     }
  //     setPrevPage(currPage);
  //     setUserList([...userList, ...response.data.data]);
  //   };
  //   if (!wasLastList && prevPage !== currPage) {
  //     fetchData();
  //   }
  // }, [currPage, wasLastList, prevPage, userList]);


  return (
    <Box sx={{ flexGrow: 1 }} p={10}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(10)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                      />
                      <CardContent>
                       
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
            </Item>
            <Item> 
              <Typography gutterBottom variant="h5" component="div">
                {data.attacks}
              </Typography>
            </Item>
            <Item>HP</Item>
            <Item>{data.abilities}</Item>
            <Item>{data.image}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}