import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid} from '@material-ui/core';
import input from '../styles/Drivefor.module.css';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Basic Info', 'Additional Information', 'Upload Files'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <Grid container  justify='center' spacing={2} >
          <Grid item  xs={8}>
            <form className={input.group}>
              <div className={input.name}>
                <input type="text" name="" id="" placeholder='First Name'/>
                <input type="text" name="" id="" placeholder='Middle Name'/>
                <input type="text" name="" id="" placeholder='Last Name'/>
              </div>

              <div id='radio' className={input.radio}>
                  <div>
                    <label htmlFor="radio">Gender :</label>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" id="gender" />
                    <label htmlFor="female">Female</label>
                    <input type="radio" name="gender" id="gender" />
                  </div>
              </div>

              <div className={input.name}>
                <input type="email" required name="" id="" placeholder='Email Address'/>
                <input type="tel" required name="" id="" placeholder='Phone'/>
                <input type="tel" required name="" id="" placeholder='Alternate Number'/>
              </div>

              <div className={input.agree}>
                <select name="" id="">
                  <option disabled selected> Education</option>
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="polytechnic">Polytechnic</option>
                  <option value="university">University</option>
                  <option value="other">Other</option>
                </select>
                <input type="checkbox"  required name="" id="" />
                I agree to the Privacy Policy
              </div>

            </form>
          </Grid>
        </Grid>
      );
    case 1:
      return (
         <Grid container  justify='center' spacing={2} >
          <Grid item  xs={8}>
            <form className={input.group}>
              <div className={input.agree}>
                <select name="" id="">
                  <option disabled selected> Car Type</option>
                  <option value="primary">Salon</option>
                  <option value="secondary">SUV</option>
                  <option value="polytechnic">Mini Bus</option>
                </select>
                <input type="text" name="" id="" placeholder='Car Name'/>
                <input type="text" name="" id="" placeholder='Model'/>
                <input type="number" name="" id="" placeholder='Year'/>
              
              </div>
              
              <div id='radio' className={input.radio}>
                  <div>
                    <label htmlFor="radio">Marital Status :</label>
                    <label htmlFor="male">Married</label>
                    <input type="radio" name="status" id="maritalstatus" />
                    <label htmlFor="status">Single</label>
                    <input type="radio" name="status" id="maritalstatus" />
                  </div>
              </div>

              <div className={input.name}>
                <input type="text" required name="" id="" placeholder='Address'/>
                <input type="text" required name="" id="" placeholder='City'/>
                <input type="text" required name="" id="" placeholder='State'/>
              </div>
              <h3>Emergency Contact</h3>
              <div className={input.name}>
                <input type="text" name="" id="" placeholder='First Name'/>
                <input type="text" name="" id="" placeholder='Middle Name'/>
                <input type="text" name="" id="" placeholder='Last Name'/>
              </div>
              <div>
                <input type="tel" name="" id="" placeholder='Phone Number'/>
                <input type="text" name="" id="" placeholder='Address'/>
              </div>
  
              <div id='radio' className={input.radio}>
                    <label htmlFor="radio">Are you currently driving for any ride-hailing platforms? (eg. Uber, Taxify, Oride,etc.)</label>
                  <div>
                    <label htmlFor="male">Yes</label>
                    <input type="radio" name="service" id="otherservice" />
                    <label htmlFor="status">No</label>
                    <input type="radio" name="service" id="otherservice" />
                  </div>
                  <input type="text" name="" id="" placeholder='if yes Please Specify the name  ' />
              </div>

            </form>
          </Grid>
        </Grid>
      );
    case 2:
      return (
        <Grid container  justify='center' spacing={2} >
          <Grid item  xs={8}>
            <form className={input.files}>
             <div>
               <label htmlFor="passport">Passport</label>
                <input type="file" name="" id="passport" style={{ width:'80%'}} />
             </div>
             <div >
               <label htmlFor="License">Driver License</label>
                <input type="file" name="" id="License" style={{ width:'80%'}} />
             </div>
             <div >
               <label htmlFor="cinsuarance">Comprehensive Insuarance</label>
                <input type="file" name="" id="cinsuarance" style={{ width:'80%'}} />
             </div>
             <div >
                <label htmlFor="insuarance">Certificate of Insuarance</label>
                <input type="file" name="" id="insuarance" style={{ width:'80%'}} />
             </div>
             <div>
               <label htmlFor="lasdri">Lasdri</label>
                <input type="file" name="" id="lasdri" style={{ width:'80%'}}/>
             </div>
             <div>
               <label htmlFor="interior1">Interior (Photo1)</label>
                <input type="file" name="" id="interior1" style={{ width:'80%'}} />
             </div>
             <div>
               <label htmlFor="interior2">Interior (Photo2)</label>
                <input type="file" name="" id="interior2" style={{ width:'80%'}} />
             </div>
             <div>
               <label htmlFor="interior3">Interior (Photo3)</label>
                <input type="file" name="" id="interior3" style={{ width:'80%'}}/>
             </div>
             <div>
               <label htmlFor="interior4">Interior (Photo4)</label>
                <input type="file" name="" id="interior4" style={{ width:'80%'}}/>
             </div>
             <div>
               <label htmlFor="exterior1">Exterior (Photo1)</label>
                <input type="file" name="" id="exterior1" style={{ width:'80%'}}/>
             </div>
             <div>
               <label htmlFor="exterior2">Exterior (Photo2)</label>
                <input type="file" name="" id="exterior2" style={{ width:'80%'}}/>
             </div>
             <div>
               <label htmlFor="exterior3">Exterior (Photo3)</label>
                <input type="file" name="" id="exterior3" style={{ width:'80%'}}/>
             </div>
             <div>
               <label htmlFor="exterior4">Exterior (Photo4)</label>
                <input type="file" name="" id="exterior4" style={{ width:'80%'}}/>
             </div>
 
              
          </form>
          </Grid>
        </Grid>
      );
    default:
      return 'Unknown step';
  }
}

export default function Form() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  

  const handleNext = () => {
   
   

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Grid container justify='center'  className={classes.root}>
      <Grid item xs={8}>
      <h2 style={{textAlign:'center', color:'#000080'}}>Drive for Shuttlelane</h2>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          /* if (isStepOptional(index)) {
          //   labelProps.optional = <Typography variant="caption">Optional</Typography>;
          /}*/ 
          
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
        </Grid>
      <Grid item xs={8}>
        {activeStep === steps.length ? (
     <Grid container  justify='center' spacing={2} >
          <Grid item  style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'2rem'}} xs={8}>
           <svg className={input.success} width="159px" height="159px" viewBox="0 0 159 159" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
    <title>Group</title>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="kuittaus---maksu-onnistui" transform="translate(-81.000000, -239.000000)">
            <g id="Group" transform="translate(81.000000, 239.000000)">
                <polyline id="Stroke-52" stroke="#000080" stroke-width="18" points="44 76.578 71.37 103.058 114.816 56"></polyline>
                <path d="M79.278,135.52 C48.324,135.52 23.132,110.328 23.132,79.374 C23.132,48.412 48.324,23.22 79.278,23.22 C110.24,23.22 135.424,48.412 135.424,79.374 C135.424,110.328 110.24,135.52 79.278,135.52 M79.278,0 C35.558,0 -2.27373675e-13,35.56 -2.27373675e-13,79.278 C-2.27373675e-13,122.996 35.558,158.574 79.278,158.574 C122.996,158.574 158.574,122.996 158.574,79.278 C158.574,35.56 122.996,0 79.278,0" id="Fill-136" fill="#E2B543"></path>
            </g>
        </g>
    </g>
</svg>
            
            </Grid>
          </Grid>
        ) : (
          <div style={{marginBottom:'2rem'}}>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </Grid>
    </Grid>
  );
}
