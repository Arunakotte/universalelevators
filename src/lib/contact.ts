export const PHONE = "9844141114";
export const PHONE_DISPLAY = "+91 98441 41114";
export const PHONE_INTL = "919844141114";

export const PHONE2 = "9844541114";
export const PHONE2_DISPLAY = "+91 98445 41114";
export const PHONE2_INTL = "919844541114";

export const EMAIL = "universal_elevators@rediffmail.com";
export const ADDRESS_SHORT = "Marathahalli, Bangalore – 560037";
export const ADDRESS_FULL =
  "Flat 24, Mandala House, 5th Cross, MSR Nagar, Near Buncake Palace, Marathahalli, Bangalore – 560037, Karnataka";
export const HOURS_LINES = ["Mon – Sat: 9:00 AM – 5:30 PM", "Sunday: Closed"];

export function whatsappLink(message: string, useSecondary = false) {
  const number = useSecondary ? PHONE2_INTL : PHONE_INTL;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const WA = {
  quote: whatsappLink("Hi Universal Elevators, I want a free quote."),
  install: whatsappLink("Hi Universal Elevators, I need elevator installation."),
  repair: whatsappLink("Hi Universal Elevators, I need elevator repair service."),
  amc: whatsappLink("Hi Universal Elevators, I need maintenance (AMC) service."),
  residential: whatsappLink("Hi Universal Elevators, I'm interested in a residential / home elevator."),
  commercial: whatsappLink("Hi Universal Elevators, I'm interested in a commercial elevator."),
  modernization: whatsappLink("Hi Universal Elevators, I'd like to modernise my existing elevator."),
  siteVisit: whatsappLink("Hi Universal Elevators, I'd like to book a free site visit."),
  general: whatsappLink("Hi Universal Elevators, I'd like to know more about your services."),
};
