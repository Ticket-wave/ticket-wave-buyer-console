import { Event } from "../constants/IEvent";

export const events: Event[] = [
  {
    title: "Music Festival",
    dateCreated: "2023-08-03",
    publisher: {
      name: "Event Pro",
      joinDate: "2022-05-15",
      eventsHosted: 15,
      picture: "publisher_image_url.jpg",
    },
    eventDateTime: "2023-09-15 18:00",
    eventDate: "2023-09-15",
    location: {
      blockNumber: "123",
      street: "Main Street",
      city: "Cityville",
      state: "California",
      country: "USA",
    },
    ticketPrice: {
      amount: 5000,
      currency: "NGN",
    },
    ticketTypes: [
      {
        name: "General Admission",
        price: 5000,
      },
      {
        name: "VIP",
        price: 10000,
      },
    ],
    description:
      "Join us for a night of music and fun at the annual Music Festival. Enjoy performances from top artists and dance the night away!",
    image: "event_image_url.jpg",
  },
  {
    title: "Tech Conference",
    dateCreated: "2023-07-20",
    publisher: {
      name: "TechConnect",
      joinDate: "2022-02-10",
      eventsHosted: 8,
      picture: "publisher_image_url.jpg",
    },
    eventDateTime: "2023-10-10 09:00",
    eventDate: "2023-10-10",
    location: {
      blockNumber: "456",
      street: "Tech Avenue",
      city: "Techtopia",
      state: "Texas",
      country: "USA",
    },
    ticketPrice: {
      amount: 20000,
      currency: "NGN",
    },
    ticketTypes: null,
    description:
      "The annual Tech Conference is back! Join us for a day of insightful talks, workshops, and networking opportunities.",
    image: "event_image_url.jpg",
  },
  {
    title: "Food Festival",
    dateCreated: "2023-06-10",
    publisher: {
      name: "Taste Delights",
      joinDate: "2021-09-05",
      eventsHosted: 12,
      picture: "publisher_image_url.jpg",
    },
    eventDateTime: "2023-08-25 12:00",
    eventDate: "2023-08-25",
    location: {
      blockNumber: "789",
      street: "Food Street",
      city: "Culinaryville",
      state: "New York",
      country: "USA",
    },
    ticketPrice: {
      amount: 2500,
      currency: "NGN",
    },
    ticketTypes: null,
    description:
      "Indulge in a variety of mouthwatering dishes and experience a culinary adventure at the Food Festival.",
    image: "event_image_url.jpg",
  },
  {
    title: "Art Exhibition",
    dateCreated: "2023-07-02",
    publisher: {
      name: "Artistic Expressions",
      joinDate: "2020-11-15",
      eventsHosted: 18,
      picture: "publisher_image_url.jpg",
    },
    eventDateTime: "2023-09-05 10:00",
    eventDate: "2023-09-05",
    location: {
      blockNumber: "234",
      street: "Gallery Lane",
      city: "Artville",
      state: "California",
      country: "USA",
    },
    ticketPrice: {
      amount: 1500,
      currency: "NGN",
    },
    ticketTypes: null,
    description:
      "Discover a world of creativity and inspiration at the Art Exhibition showcasing diverse artistic expressions.",
    image: "event_image_url.jpg",
  },
  {
    title: "Sports Tournament",
    dateCreated: "2023-06-18",
    publisher: {
      name: "Sports United",
      joinDate: "2022-01-25",
      eventsHosted: 10,
      picture: "publisher_image_url.jpg",
    },
    eventDateTime: "2023-08-12 14:00",
    eventDate: "2023-08-12",
    location: {
      blockNumber: "567",
      street: "Sports Street",
      city: "Athletictown",
      state: "Florida",
      country: "USA",
    },
    ticketPrice: {
      amount: 3000,
      currency: "NGN",
    },
    ticketTypes: null,
    description:
      "Cheer for your favorite teams and athletes as they compete in an exhilarating sports tournament.",
    image: "event_image_url.jpg",
  },
  {
    title: "Fashion Show",
    dateCreated: "2023-08-10",
    publisher: {
      name: "Glamour Trends",
      joinDate: "2022-04-02",
      eventsHosted: 6,
      picture: "publisher_image_url.jpg",
    },
    eventDateTime: "2023-09-20 16:00",
    eventDate: "2023-09-20",
    location: {
      blockNumber: "890",
      street: "Fashion Boulevard",
      city: "Stylecity",
      state: "New York",
      country: "USA",
    },
    ticketPrice: {
      amount: 1800,
      currency: "NGN",
    },
    ticketTypes: [
      {
        name: "Regular",
        price: 1800,
      },
      {
        name: "VIP",
        price: 3500,
      },
    ],
    description:
      "Experience the latest trends in fashion and witness captivating runway displays at the Fashion Show.",
    image: "event_image_url.jpg",
  },
  {
    title: "Comedy Night",
    dateCreated: "2023-07-05",
    publisher: {
      name: "Laugh Out Loud",
      joinDate: "2022-03-18",
      eventsHosted: 9,
      picture: "publisher_image_url.jpg",
    },
    eventDateTime: "2023-09-08 19:30",
    eventDate: "2023-09-08",
    location: {
      blockNumber: "345",
      street: "Comedy Lane",
      city: "Humorville",
      state: "California",
      country: "USA",
    },
    ticketPrice: {
      amount: 1200,
      currency: "NGN",
    },
    ticketTypes: null,
    description:
      "Get ready for an evening filled with laughter and hilarious stand-up performances at Comedy Night.",
    image: "event_image_url.jpg",
  },
  {
    title: "Gaming Expo",
    dateCreated: "2023-06-29",
    publisher: {
      name: "Game Central",
      joinDate: "2022-01-10",
      eventsHosted: 7,
      picture: "publisher_image_url.jpg",
    },
    eventDateTime: "2023-08-18 11:00",
    eventDate: "2023-08-18",
    location: {
      blockNumber: "678",
      street: "Gamer's Paradise",
      city: "Playtown",
      state: "Texas",
      country: "USA",
    },
    ticketPrice: {
      amount: 2500,
      currency: "NGN",
    },
    ticketTypes: null,
    description:
      "Immerse yourself in the world of gaming and explore the latest video games and technologies at the Gaming Expo.",
    image: "event_image_url.jpg",
  },
  {
    title: "Health & Wellness Retreat",
    dateCreated: "2023-08-01",
    publisher: {
      name: "Wellbeing Journeys",
      joinDate: "2022-04-30",
      eventsHosted: 5,
      picture: "publisher_image_url.jpg",
    },
    eventDateTime: "2023-09-30 08:00",
    eventDate: "2023-09-30",
    location: {
      blockNumber: "901",
      street: "Serene Avenue",
      city: "Tranquilityville",
      state: "California",
      country: "USA",
    },
    ticketPrice: {
      amount: 3500,
      currency: "NGN",
    },
    ticketTypes: null,
    description:
      "Embark on a journey of self-care and rejuvenation at the Health & Wellness Retreat, featuring workshops and activities for a healthier you.",
    image: "event_image_url.jpg",
  },
  {
    title: "Film Screening",
    dateCreated: "2023-07-12",
    publisher: {
      name: "Cinephile Society",
      joinDate: "2022-03-05",
      eventsHosted: 8,
      picture: "publisher_image_url.jpg",
    },
    eventDateTime: "2023-09-12 17:30",
    eventDate: "2023-09-12",
    location: {
      blockNumber: "123",
      street: "Cinema Lane",
      city: "Filmville",
      state: "California",
      country: "USA",
    },
    ticketPrice: {
      amount: 1800,
      currency: "NGN",
    },
    ticketTypes: null,
    description:
      "Join fellow film enthusiasts for a screening of a critically acclaimed movie at the Film Screening event.",
    image: "event_image_url.jpg",
  },
  {
    title: "Culinary Workshop",
    dateCreated: "2023-08-09",
    publisher: {
      name: "Taste Explorations",
      joinDate: "2022-06-25",
      eventsHosted: 7,
      picture: "publisher_image_url.jpg",
    },
    eventDateTime: "2023-09-25 13:00",
    eventDate: "2023-09-25",
    location: {
      blockNumber: "456",
      street: "Cooking Street",
      city: "Flavorville",
      state: "New York",
      country: "USA",
    },
    ticketPrice: {
      amount: 2800,
      currency: "NGN",
    },
    ticketTypes: [
      {
        name: "Standard",
        price: 2800,
      },
      {
        name: "Premium",
        price: 4500,
      },
    ],
    description:
      "Enhance your culinary skills and learn from expert chefs at the interactive Culinary Workshop.",
    image: "event_image_url.jpg",
  },
  {
    title: "Environmental Conference",
    dateCreated: "2023-06-22",
    publisher: {
      name: "Eco Initiatives",
      joinDate: "2022-03-15",
      eventsHosted: 6,
      picture: "publisher_image_url.jpg",
    },
    eventDateTime: "2023-08-15 09:30",
    eventDate: "2023-08-15",
    location: {
      blockNumber: "789",
      street: "Green Avenue",
      city: "Eco City",
      state: "California",
      country: "USA",
    },
    ticketPrice: {
      amount: 1500,
      currency: "NGN",
    },
    ticketTypes: null,
    description:
      "Join experts, activists, and enthusiasts for discussions and workshops on environmental sustainability at the Environmental Conference.",
    image: "event_image_url.jpg",
  },
  {
    title: "Dance Workshop",
    dateCreated: "2023-07-15",
    publisher: {
      name: "Rhythmic Moves",
      joinDate: "2022-05-01",
      eventsHosted: 9,
      picture: "publisher_image_url.jpg",
    },
    eventDateTime: "2023-09-18 15:30",
    eventDate: "2023-09-18",
    location: {
      blockNumber: "234",
      street: "Dance Street",
      city: "Groovetown",
      state: "Texas",
      country: "USA",
    },
    ticketPrice: {
      amount: 2000,
      currency: "NGN",
    },
    ticketTypes: null,
    description:
      "Discover the joy of dance and improve your dance skills at the engaging Dance Workshop.",
    image: "event_image_url.jpg",
  },
  {
    title: "Literary Symposium",
    dateCreated: "2023-08-05",
    publisher: {
      name: "WordWise",
      joinDate: "2022-04-20",
      eventsHosted: 6,
      picture: "publisher_image_url.jpg",
    },
    eventDateTime: "2023-09-22 10:00",
    eventDate: "2023-09-22",
    location: {
      blockNumber: "567",
      street: "Book Avenue",
      city: "Literaryburg",
      state: "New York",
      country: "USA",
    },
    ticketPrice: {
      amount: 1800,
      currency: "NGN",
    },
    ticketTypes: null,
    description:
      "Engage in thought-provoking discussions and celebrate literature at the Literary Symposium.",
    image: "event_image_url.jpg",
  },
  {
    title: "Startup Pitch Competition",
    dateCreated: "2023-07-25",
    publisher: {
      name: "InnovateHub",
      joinDate: "2022-06-10",
      eventsHosted: 5,
      picture: "publisher_image_url.jpg",
    },
    eventDateTime: "2023-09-28 13:00",
    eventDate: "2023-09-28",
    location: {
      blockNumber: "890",
      street: "Innovation Street",
      city: "Startupville",
      state: "California",
      country: "USA",
    },
    ticketPrice: {
      amount: 2500,
      currency: "NGN",
    },
    ticketTypes: [
      {
        name: "Participant",
        price: 2500,
      },
      {
        name: "Observer",
        price: 1000,
      },
    ],
    description:
      "Witness innovative ideas and startups compete in the Startup Pitch Competition for a chance to win prizes and support.",
    image: "event_image_url.jpg",
  },
  {
    title: "Photography Workshop",
    dateCreated: "2023-08-08",
    publisher: {
      name: "ShutterCraft",
      joinDate: "2022-05-05",
      eventsHosted: 4,
      picture: "publisher_image_url.jpg",
    },
    eventDateTime: "2023-09-26 11:00",
    eventDate: "2023-09-26",
    location: {
      blockNumber: "123",
      street: "Photo Lane",
      city: "Captureville",
      state: "California",
      country: "USA",
    },
    ticketPrice: {
      amount: 2200,
      currency: "NGN",
    },
    ticketTypes: null,
    description:
      "Learn photography techniques, composition, and post-processing at the hands-on Photography Workshop.",
    image: "event_image_url.jpg",
  },
  {
    title: "Fitness Bootcamp",
    dateCreated: "2023-07-28",
    publisher: {
      name: "FitLife",
      joinDate: "2022-05-18",
      eventsHosted: 7,
      picture: "publisher_image_url.jpg",
    },
    eventDateTime: "2023-09-21 07:00",
    eventDate: "2023-09-21",
    location: {
      blockNumber: "456",
      street: "Fitness Street",
      city: "Healthville",
      state: "Florida",
      country: "USA",
    },
    ticketPrice: {
      amount: 2800,
      currency: "NGN",
    },
    ticketTypes: [
      {
        name: "Early Bird",
        price: 2800,
      },
      {
        name: "Regular",
        price: 3500,
      },
    ],
    description:
      "Challenge yourself with intense workouts and fitness routines at the energetic Fitness Bootcamp.",
    image: "event_image_url.jpg",
  },
  {
    title: "TEDx Conference",
    dateCreated: "2023-08-15",
    publisher: {
      name: "Ideas Unleashed",
      joinDate: "2022-06-15",
      eventsHosted: 5,
      picture: "publisher_image_url.jpg",
    },
    eventDateTime: "2023-09-29 09:00",
    eventDate: "2023-09-29",
    location: {
      blockNumber: "789",
      street: "Inspiration Avenue",
      city: "Thoughtville",
      state: "California",
      country: "USA",
    },
    ticketPrice: {
      amount: 1500,
      currency: "NGN",
    },
    ticketTypes: null,
    description:
      "Experience a day of thought-provoking talks and ideas worth spreading at the TEDx Conference.",
    image: "event_image_url.jpg",
  },
  {
    title: "Science Fair",
    dateCreated: "2023-08-12",
    publisher: {
      name: "SciExplore",
      joinDate: "2022-04-12",
      eventsHosted: 6,
      picture: "publisher_image_url.jpg",
    },
    eventDateTime: "2023-09-23 10:00",
    eventDate: "2023-09-23",
    location: {
      blockNumber: "901",
      street: "Science Street",
      city: "Innovationburg",
      state: "Texas",
      country: "USA",
    },
    ticketPrice: {
      amount: 1800,
      currency: "NGN",
    },
    ticketTypes: null,
    description:
      "Explore the wonders of science through interactive exhibits and demonstrations at the engaging Science Fair.",
    image: "event_image_url.jpg",
  },
  {
    title: "Charity Gala",
    dateCreated: "2023-08-18",
    publisher: {
      name: "Heartfelt Foundation",
      joinDate: "2022-07-18",
      eventsHosted: 4,
      picture: "publisher_image_url.jpg",
    },
    eventDateTime: "2023-09-27 19:00",
    eventDate: "2023-09-27",
    location: {
      blockNumber: "234",
      street: "Hope Avenue",
      city: "Philanthropyville",
      state: "New York",
      country: "USA",
    },
    ticketPrice: {
      amount: 3000,
      currency: "NGN",
    },
    ticketTypes: null,
    description:
      "Support a noble cause and enjoy an elegant evening of dining, entertainment, and fundraising at the Charity Gala.",
    image: "event_image_url.jpg",
  },
  // Continue adding more events with similar structure
];
