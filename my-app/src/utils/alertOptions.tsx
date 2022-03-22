import { transitions, positions, Provider as AlertProvider, types } from 'react-alert';

const styles = {
 
}


// optional configuration for alerts
const alertOptions = {
  position: positions.BOTTOM_CENTER,
  timeout: 50000,
  offset: '15px',
  transition: transitions.FADE,
  type: types.SUCCESS,
  containerStyle: styles
};

export default alertOptions;
