export const EmotionalSupport = {
  meta: {
    id: "EmotionalSupport",
    name: "Emotional Support",
    color: "#bc9fca",
    description: "",
  },
  actionCards: [{
    title: (momName) => `Check in with ${momName} to see how she is doing emotionally`,
    who: 'mom',
    subtitle: "(give your whole attention)",
    helpLink: null,
    helpText: null,
    minAge: null,
    maxAge: null,
  }, {
    title: (momName) => `Listen to ${momName} talk about something she cares about`,
    who: 'mom',
    subtitle: "(give your whole attention)",
    helpLink: null,
    helpText: null,
    minAge: null,
    maxAge: null,
  }, {
    title: "Schedule a playdate",
    subtitle: "and plan to be there yourself",
    helpLink: null,
    helpText: null,
    minAge: 15552000,
    maxAge: null,
    nanny: false,
  }, {
    title: "Schedule an outside activity or lesson",
    subtitle: "(do some research to find one)",
    helpLink: null,
    helpText: "Look at your local libraries' schedule of events for story time, music, sign language, etc.",
    minAge: 7776000,
    maxAge: null,
    nanny: false,
  }, {
    title: (babyName) => `Schedule yourself to pick-up/drop-off ${babyName} at the nanny's`,
    who: 'baby',
    subtitle: "(or other caregiver's)",
    helpLink: null,
    helpText: null,
    minAge: null,
    maxAge: null,
    nanny: true,
  }, {
    title: "Send a thank you note for a baby gift",
    subtitle: "(a text message will do!)",
    helpLink: null,
    helpText: null,
    minAge: null,
    maxAge: null,
    nanny: false,
  }, {
    title: "Buy a gift for an upcoming occasion",
    subtitle: "Any birthdays or family visits coming up?",
    helpLink: null,
    helpText: null,
    minAge: null,
    maxAge: null,
    nanny: false,
  },
  ]
}
