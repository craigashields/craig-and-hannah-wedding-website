const siteMetadata = {
  title: "Wedding Website",
  author: "Craig Shields",
  description: "Wedding Website",
  language: "en-gb",
  locale: "en-GB",
  weddingInfo: {
    bride: "Hannah",
    groom: "Craig",
    tagLine: "Are Getting Married",
    when: "2024-09-14",
    whereTown: "Nantwich, Cheshire",
    whereVenue: "The Chestnuts",
    rsvpDate: "2024-04-01",
  },
};

type WeddingInfo = {
  bride: string;
  groom: string;
  tagLine: string;
  when: string;
  whereTown: string;
  whereVenue: string;
  rsvpDate: string;
};

const weddingInfo: WeddingInfo = {
  bride: "Hannah",
  groom: "Craig",
  tagLine: "Are Getting Married",
  when: "2024-09-14",
  whereTown: "Nantwich, Cheshire",
  whereVenue: "The Chestnuts",
  rsvpDate: "2024-04-01",
};
export { siteMetadata, weddingInfo };
