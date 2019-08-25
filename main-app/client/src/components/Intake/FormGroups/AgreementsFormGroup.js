import React from 'react'
import { Field } from 'formik'
import { makeStyles, Typography, Box, Divider } from '@material-ui/core'
import FormSection from '../FormSection'
import { BaseCheckBox } from '../../ParticipantProfile/FormElements'

const useStyles = makeStyles(theme => ({
  agreements: {
    padding: '20px 0 10px 0',
  },
  field: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}))

const Question = ({ name, label }) => {
  const classes = useStyles()
  return (
    <Box className={classes.field}>
      <Field component={BaseCheckBox} name={name} label={label} />
    </Box>
  )
}

export const AgreementsFormGroup = ({ ...props }) => {
  const classes = useStyles()
  return (
    <FormSection heading="Agreements">
      <Question
        name="agreements_obligations.agreement_voluntary"
        label="I am taking part of this program voluntarily"
      />
      <Question
        name="agreements_obligations.agreement_at_risk"
        label="I am currently homeless or at risk of homelessness"
      />

      <Box className={classes.agreements}>
        <Typography gutterBottom variant="h6">
          I understand that...
        </Typography>
        <Question
          name="agreements_obligations.agreement_obligations"
          label="in order to take part of this program, I will need to complete X obligations"
        />
        <Question
          name="agreements_obligations.agreement_infractions"
          label="Only infractions are eligible to be expunged and that misdemeanors and felonies are not eligible to be expunged through this program"
        />
        <Question
          name="agreements_obligations.agreement_warrants"
          label="Any active warrants in my name will block any expungement that I could have obtained through the program"
        />
      </Box>

      <Box className={classes.agreements}>
        <Typography gutterBottom variant="h6">
          I understand that...
        </Typography>
        <Question
          name="agreements_obligations.agreement_court_form"
          label="This is not a court form, and that I cannot bring this form to court for any proceedings I have been asked to appear to"
        />
        <Question
          name="agreements_obligations.agreement_progress"
          label="This program can take up to 3 or 4 months to take effect, and that I can check up on my cases's progress at anytime by contacting xxxxxxxxx"
        />
      </Box>

      <Box className={classes.agreements}>
        <Typography gutterBottom variant="h6">
          I give the HEART team permission to follow up with me on my
          application's progress, the best way to contact me is
        </Typography>
        <Question
          name="agreements_obligations.agreement_phone_contact"
          label="phone"
        />
        <Question
          name="agreements_obligations.agreement_email_contact"
          label="email"
        />
      </Box>
      <Divider />
      <Box>
        <Question
          name="participants.urgent"
          label="Is this an urgent case? 🔥🔥🔥"
        />
      </Box>
    </FormSection>
  )
}

export default AgreementsFormGroup
