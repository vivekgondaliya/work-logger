import React from 'react'
import { Header, Container, Form, Button } from 'semantic-ui-react'

const AddWork = () => (
  <Container text>
	<Header as='h1'>
		Add Work
	</Header>	
	<Form>
		<Form.Field>
			<label>Title</label>
			<input placeholder='Define your problem' />
		</Form.Field>
		<Form.Field>
			<label>Solution</label>
			<textarea placeholder='Describe your solution' rows="3"></textarea>
		</Form.Field>
		<Form.Field>
			<label>Project</label>
			<input placeholder='NAED' />
		</Form.Field>
		<Button color="blue">Add Work</Button>
		<Button>Cancel</Button>
	</Form>
  </Container>
)

export default AddWork;