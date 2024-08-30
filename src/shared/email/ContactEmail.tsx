import { ContactFormValues } from '@/src/pages/Contact/ContactForm';
import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

export const ContactEmail: React.FC<ContactFormValues> = ({
  email,
  message,
  name,
  phone,
  surname,
}) => {
  return (
    <Html>
      <Head />
      <Preview>Kontakt zo stránky</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Row>
              <Column>
                <Img
                  src="https://naitec.b-cdn.net/naitec-logo.png"
                  width="140"
                  height="25"
                  alt="Logo"
                />
              </Column>
              <Column align="right" style={tableCell}>
                <Text style={heading}>Kontakt zo stránky</Text>
              </Column>
            </Row>
          </Section>
          <Section>
            {name && surname && (
              <Text style={textStyle}>
                Meno a priezvisko: {name} {surname}
              </Text>
            )}
          </Section>
          {email && (
            <Text style={textStyle}>
              E-mail: <a href={`mailto: ${email}`}>{email}</a>
            </Text>
          )}
          {phone && (
            <Text style={textStyle}>
              Telefon: <a href={`tel: ${phone}`}>{phone}</a>
            </Text>
          )}
          {message && <Text style={textStyle}>Zpráva: {message}</Text>}
          <Hr style={hrStyle} />
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;

const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  backgroundColor: '#ffffff',
  padding: '20px',
};

const container = {
  margin: '0 auto',
  padding: '20px',
  maxWidth: '600px',
  border: '1px solid #eaeaea',
  borderRadius: '8px',
};

const tableCell = { display: 'table-cell' };

const heading = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333',
};

const hrStyle = {
  margin: '40px 0',
  borderColor: '#eaeaea',
};

const textStyle = { margin: '4px 0' };
