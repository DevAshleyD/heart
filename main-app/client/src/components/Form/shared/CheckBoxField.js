import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  agreementGroup: {
    display: 'flex',
    margin: '10px 0px 10px 0px',
    alignItems: 'center',
  },
}))

const GreenCheckbox = withStyles({
  root: {
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />)

export const CheckBoxField = ({
  index,
  field: { name, onChange },
  value,
  values,
  label,
}) => {
  const classes = useStyles()
  return (
    <div key={index} className={classes.agreementGroup}>
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={values[name] || false}
            onChange={onChange}
            name={name}
            value={value}
          />
        }
        label={label || name}
      />
    </div>
  )
}

export default CheckBoxField
