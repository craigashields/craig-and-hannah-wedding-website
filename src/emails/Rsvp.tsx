import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface Guest {
  id: string;
  guest_name: string;
  attending: boolean;
  dietary_requirements: string;
  rsvp_date: string;
}

interface RsvpEmailProps {
  coupleName?: string;
  guests?: Guest[];
  responseDate?: Date;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000/";

export const RsvpEmail = ({
  coupleName,
  guests,
  responseDate,
}: RsvpEmailProps) => {
  const formattedDate = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(responseDate);

  return (
    <Html>
      <Head />
      <Preview>Guest RSVP</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row>
              <Img
                style={image}
                width={620}
                src={`${baseUrl}/static/hannah_craig_getting_married.png`}
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi {coupleName},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Guests have responded.
                </Heading>

                <Text style={paragraph}>
                  <b>Response Date: </b>
                  {formattedDate}
                </Text>
              </Column>
            </Row>
          </Section>
          <Section style={informationTable}>
            <Row style={informationTableRow}>
              <Column colSpan={2}>
                {guests &&
                  guests.map((guest) => (
                    <Section key={guest.guest_name}>
                      <Row>
                        <Column style={informationTableColumn}>
                          <Heading as="h3">{guest.guest_name}</Heading>
                        </Column>
                      </Row>

                      <Row>
                        <Column style={informationTableColumn}>
                          <Text style={informationTableLabel}>ATTENDING</Text>
                          <Text style={informationTableValue}>
                            {`${guest.attending}`}
                          </Text>
                        </Column>
                      </Row>

                      <Row>
                        <Column style={informationTableColumn}>
                          <Text style={informationTableLabel}>
                            DIETARY NEEDS
                          </Text>
                          <Text style={informationTableValue}>
                            {guest.dietary_requirements}
                          </Text>
                        </Column>
                      </Row>
                    </Section>
                  ))}
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

RsvpEmail.PreviewProps = {
  coupleName: "Hannah & Craig",
  responseDate: new Date("September 7, 2022, 10:58 am"),
  guests: [
    {
      id: "rec_123",
      guest_name: "Craig Shields",
      attending: true,
      dietary_requirements: "none",
      rsvp_date: "2024-03-23T20:01:37.467Z",
    },
    {
      id: "rec_456",
      guest_name: "Hannah Brooks",
      attending: false,
      dietary_requirements: "something here",
      rsvp_date: "2024-03-23T20:01:37.467Z",
    },
  ],
} as RsvpEmailProps;

export default RsvpEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const informationTable = {
  borderCollapse: "collapse" as const,
  borderSpacing: "0px",
  color: "rgb(51,51,51)",
  backgroundColor: "rgb(250,250,250)",
  borderRadius: "3px",
  fontSize: "12px",
};

const informationTableRow = {
  height: "46px",
};

const informationTableColumn = {
  paddingLeft: "20px",
  borderStyle: "solid",
  borderColor: "white",
  borderWidth: "0px 1px 1px 0px",
  height: "44px",
};

const resetText = {
  margin: "0",
  padding: "0",
  lineHeight: 1.4,
};
const informationTableLabel = {
  ...resetText,
  color: "rgb(102,102,102)",
  fontSize: "10px",
};

const informationTableValue = {
  fontSize: "12px",
  margin: "0",
  padding: "0",
  lineHeight: 1.4,
};
