import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    heading:{
        margin: '30px auto'
    },
    tableHead: {
        '& > *': {
            color: '#FFFFFF',
            background: '#111111',
            fontSize: 20,
            position: 'sticky',
            top: 0
        }
        },
    table: {
        margin: '25px auto',
        width: '95%'
    }
    
    }
)

export default useStyles