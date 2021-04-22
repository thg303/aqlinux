import React from 'react'
import {
  Segment,
  Header,
  Grid,
  Form,
  TextArea,
  List,
  Message,
  Button,
  Transition,
  Divider
} from 'semantic-ui-react'
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3'
import saveMessage from '../pages/api/save-message'

const Contact = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [isSafe, setIsSafe] = React.useState(false)
  const [isFormVisible, showForm] = React.useState(true)
  const [isLoading, setIsLoading] = React.useState(false)

  const submitter = async () => {
    if (!isSafe) {
      return false
    }
    setIsLoading(true)
    try {
      await saveMessage({
        name,
        email,
        message
      })
      showForm(false)
      setMessage('')
    } catch (e) {
      console.log('got error', e)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Segment style={{ padding: '0em' }} vertical id="contact">
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Why should you send me a message?
            </Header>
            <List size="big" style={{ paddingLeft: '4em', textAlign: 'left' }}>
              <List.Item>
                <List.Icon name="check square outline" />
                <List.Content>You found a bug or issue in this page</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="check square outline" />
                <List.Content>
                  You have a question about this website or my resume or projects
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="check square outline" />
                <List.Content>You think we can help each other in a way</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="check square outline" />
                <List.Content>You like my photos</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="check square outline" />
                <List.Content>You like checkboxes</List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Transition.Group duration={500}>
              {isFormVisible && (
                <Grid.Row style={{ textAlign: 'left', paddingLeft: '2em', paddingRight: '2em' }}>
                  <Header as="h3" style={{ fontSize: '2em' }}>
                    Send me a message
                  </Header>
                  <Form size="large" onSubmit={submitter}>
                    <Form.Field>
                      <Form.Input
                        label="Name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e, { value }) => setName(value)}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Form.Input
                        label="Email"
                        placeholder="for example: something@yahoo.com"
                        value={email}
                        onChange={(e, { value }) => setEmail(value)}
                      />
                    </Form.Field>
                    <Form.Field>
                      <TextArea
                        label="Message"
                        placeholder="What is going on..."
                        value={message}
                        onChange={(e, { value }) => setMessage(value)}
                      />
                    </Form.Field>
                    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA}>
                      <GoogleReCaptcha onVerify={() => setIsSafe(true)} />
                    </GoogleReCaptchaProvider>
                    <Form.Button loading={isLoading} style={{ marginTop: '1em' }} type="submit">
                      Send
                    </Form.Button>
                  </Form>
                </Grid.Row>
              )}
              {!isFormVisible && (
                <Message positive size="huge" style={{ marginTop: '1em', marginBottom: '1em' }}>
                  <Message.Header style={{ marginTop: '2em', marginBottom: '2em' }}>
                    Thank you {name},
                  </Message.Header>
                  <Message.Content style={{ marginBottom: '2em' }}>
                    <p style={{ marginBottom: '2em' }}>
                      I usually read messages on weekends. I reply to your message when I read it.
                    </p>
                    <Divider horizontal hidden />
                    <Button
                      positive
                      labelPosition="left"
                      icon="left chevron"
                      content="send another message?"
                      onClick={() => showForm(true)}
                    />
                  </Message.Content>
                </Message>
              )}
            </Transition.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default Contact
