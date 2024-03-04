import React, { useState, useRef, useEffect } from 'react';

import SoftButton from 'components/SoftButton';
import { Link } from "react-router-dom";
import SoftBox from 'components/SoftBox';
import * as PropTypes from 'prop-types'
const Timing = ({OnhandleClick}) => {
	// We need ref in this, because we are dealing
	// with JS setInterval to keep track of it and
	// stop it when needed
	const Ref = useRef(null);
    const vijay = useRef();

	// The state for our timer
	const [timer, setTimer] = useState('00:02:00');
    const [state,setState] = useState();
    // console.log(timer);



	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = (Math.floor((total / 1000) % 60));
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        setState(seconds)
		return {
			total, hours, minutes, seconds
		};
	}
         
	const startTimer = (e) => {
		let { total, hours, minutes, seconds }
					= getTimeRemaining(e);
		if (total >= 0) {

			// update the timer
			// check if less than 10 then we need to
			// add '0' at the beginning of the variable
			setTimer(
				(hours > 9 ? hours : '0' + hours) + ':' +
				(minutes > 9 ? minutes : '0' + minutes) + ':'
				+ (seconds > 9 ? seconds : '0' + seconds)
			)
		}
	}

	const clearTimer = (e) => {

		setTimer('02:00');
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;

        
	}

	const getDeadTime = () => {
		let deadline = new Date();

		// This is where you need to adjust if
		// you entend to add more time
		deadline.setSeconds(deadline.getSeconds() + 120);
		return deadline;
	}

	// We can use useEffect so that when the component
	// mount the timer will start as soon as possible

	// We put empty array to act as componentDid
	// mount only
	useEffect(() => {
      
	clearTimer(getDeadTime());
	}, []);

	const onClickReset = () => {
		clearTimer(getDeadTime());
	}

    useEffect(() => { 
      
       if (state == 0) {
		localStorage.removeItem('verify_mail')
        // window.location.href = '/';
       }
      
           console.log('render')
        }, [state]);

	return (
		<div className="App">
			<h2 style={{marginTop:'.5rem',alignItems:'center',textAlign:'center'}}>{timer}</h2>
            <SoftBox mt={4} mb={1}>
          
          </SoftBox>
		  <SoftBox mt={4} mb={1}>
              <SoftButton type='submit' component={Link} onClick={OnhandleClick}
                  variant="gradient" color="dark" fullWidth>
                Verify
              </SoftButton>
            </SoftBox>
		</div>
	)
}
Timing.propTypes = {
	OnhandleClick: PropTypes.bool,
	
  };
export default Timing;
