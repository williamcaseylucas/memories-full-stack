// Not everything works with React 18

import { makeStyles } from "@mui/styles";

// export default makeStyles(() => ({
    // appBar: {
    //     borderRadius: 15,
    //     margin: '30px 0',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   },
    //   heading: {
    //     color: 'rgba(0,183,255, 1)',
    //   },
    //   image: {
    //     marginLeft: '15px',
    //   },
// }))

export const styles = {
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    // margin: '5px',
    // padding: '5px'
  },
  image: {
    marginLeft: '15px',
  },
}