import React, { Component, createRef } from 'react'
import {
  Grid,
  Button
} from 'semantic-ui-react'


export default class AddWorkButton extends Component {
  contextRef = createRef()

  render() {
    return (
      <Grid centered columns={3}>
		  <Grid.Row columns={5}>
			<Grid.Column>
			</Grid.Column>

			<Grid.Column>
				<Button basic color='brown' size='huge' fluid>Add Work</Button>
			</Grid.Column>

			<Grid.Column>
			</Grid.Column>
		</Grid.Row>
      </Grid>
    )
  }
}