const initialState = {
  // Current User
  user: {
    ID: 1,
    dp: `https://i.pravatar.cc/50?${new Date().getTime()}`,
    name: `Dvortsov Andrey`,
    status: `Online`
  },
  chat: [
    {
      ID: 1,
      uid: 1,
      text: 'Three little foxes, who kept their handkerchiefs in cardboard boxes!',
      media: {
        type: `image`,
        src: `https://i.pravatar.cc/220`
      }
    },
    {
      ID: 2,
      uid: 1,
      text: null,
      media: {
        type: `audio`,
        src: `https://www.zuz.com.pk/audio.mp3`
      }
    },
    {
      ID: 3,
      uid: 0,
      text: null,
      media: {
        type: `video`,
        poster: 'https://i.pravatar.cc/220',
        src: `https://www.zuz.com.pk/video.mp4`
      },
    },
    {
      ID: 4,
      uid: 1,
      text: `Some text for a chat.`,
      media: null
    },
    {
      ID: 5,
      uid: 1,
      text: `Some text for a chat with video.`,
      media: {
        type: `video`,
        poster: 'https://i.pravatar.cc/220',
        src: `https://www.zuz.com.pk/video.mp4`
      }
    }
  ]
}

export function ChatReducer(state = initialState, action) {
  switch (action.type) {
    case "CHAT_STATE":
      return { ...state, ...action.state }
    default:
      return state;
  }
}
