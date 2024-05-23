import { makeStyles } from '@mui/styles';

const dashBoardStyles = makeStyles({
  mainContainer:{
    backgroundImage:'url(https://img.freepik.com/free-photo/beautiful-road-going-through-farm-cornfield-with-tree-end-colorful-sky_181624-23214.jpg?w=740&t=st=1716281294~exp=1716281894~hmac=57416c0a314ba54a699b24f9ae7b44fad970ad1109e82842a7f032283cfc7e93)',
    height:"100vh",
    // width:"100%",
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    padding:10
  },
  mainTemp:{
    color: 'white',
    "&.MuiTypography-root":{
        fontSize: "3rem",
        fontFamily: 'roboto',
        margin: '0px 10px 0px 0px',
    }
  },
  highLowTemps:{
    color: "white",
    fontSize: "22px"
  },
  tempContainer:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  description:{
    color: 'white',
    '&.MuiTypography-root':{
        fontSize: '3rem'
    }
  },
  locationName:{
    color:'white'
  },
  input: {
    height: '40px', 
    '& .MuiInputBase-root': {
      height: '100%',
    },
  },
  button: {
    height: '40px', 
    // marginTop:10
  },
  flexRow:{
    display:'flex',
    flexDirection:'row'
  },
  suggestion:{
    color: 'black',
    '&.MuiTypography-root':{
    fontSize: '2rem',
    fontFamily: 'roboto' ,
    margin:0,
    marginTop:50,   
    }
  }
});

export default dashBoardStyles;