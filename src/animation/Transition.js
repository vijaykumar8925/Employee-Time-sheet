import { motion } from "framer-motion";
import * as PropTypes from 'prop-types'
const animationConfiguration = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	
};
const Transitions = ({ children }) => {
	return (
		<motion.div
			variants={animationConfiguration}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 2}}
          
		>
			{children}
		</motion.div>
	);
};
Transitions.propTypes = {
    children: PropTypes.bool,
    
    
  };
export default Transitions;
