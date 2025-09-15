import {
  Html,
  Head,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Body,
} from '@react-email/components';

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Body style={{ fontFamily: 'Roboto, Verdana, sans-serif' }}>
        <Preview>Here's your verification code: {otp}</Preview>
        <Section>
          <Row>
            <Heading as="h2">Hello {username},</Heading>
          </Row>
          <Row>
            <Text>
              Thank you for registering. Please use the following verification
              code to complete your registration:
            </Text>
          </Row>
          <Row>
            <Text>{otp}</Text>
          </Row>
          <Row>
            <Text>
              If you did not request this code, please ignore this email.
            </Text>
          </Row>
          {/* <Row>
            <Button
              href={`http://localhost:3000/verify/${username}`}
              style={{ backgroundColor: '#61dafb', color: '#fff', padding: '10px 20px' }}
            >
              Verify here
            </Button>
          </Row> */}
        </Section>
      </Body>
    </Html>
  );
}
