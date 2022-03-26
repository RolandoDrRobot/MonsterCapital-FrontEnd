import { transitions, positions, Provider as AlertProvider, types } from 'react-alert';

const styles = {
 
}


// optional configuration for alerts
const alertOptions = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.FADE,
  type: types.SUCCESS,
  containerStyle: styles
};

export default alertOptions;
