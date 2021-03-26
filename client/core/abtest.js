

import Button from "@material-ui/core/Button"
import React, {component} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import BackupTwoToneIcon from '@material-ui/icons/BackupTwoTone'
import SendIcon from '@material-ui/icons/Send'



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.primary
  },



  credit: {
    padding: 10,
    textAlign: 'centre',
    backgroundColor: '#ededed',
    border: '1px solid #d0d0d0',
    '& a':{
    color: '#3f4771'
    } 
  },


  btn1: {
         
      height: 40,
      width: 150,
      borderRadius: 25,
      opacity: 1,
      marginLeft: 20,
            
           
 },


  btn2: {
      height:30,
      width:120

},

  btn3: {
     height:50,
     width:120,
     color:'#d32f2f',
     borderWidth: 2,
     borderColor: '#d32f2f'
},

  btn4: {
     height: 45,
     width:140,
},

}))




export default function Home(){
  const classes = useStyles()

  



        return (
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            Here on the A/B Test we need you to pick 1 of the 4 buttons you feel most compelled to click on.
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Log in to your account and submit your answer!
          </Typography>

          


          <Button
            className={classes.btn1}
            color="primary"
            variant="contained"
           
          >
            SUBMIT
          </Button>

        

          &nbsp;
          &nbsp;

          <Button 
            className={classes.btn2}
            startIcon={<BackupTwoToneIcon />}
            variant="contained"
        
            
          >
            SUBMIT
          </Button>
          &nbsp;
          &nbsp;         
          

          <Button 
            className={classes.btn3}
            color="inherit"
            variant="outlined"
            
          >
            SUBMIT
          </Button>

          &nbsp;
          &nbsp;

          <Button 
            className={classes.btn4}
            variant="contained"
            color="secondary"
            endIcon={<SendIcon>Send</SendIcon>}
        
          >
              Send
          </Button>

          <br />
          <br />
          
          <CardContent>
            <Typography variant="body1" component="p">
              Your answers will be recorded as part of a marketing survey.
            </Typography>
          </CardContent>
        </Card>
    )
        }






