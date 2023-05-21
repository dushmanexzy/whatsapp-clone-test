import React from 'react';

export function ChatBubble(props) {
  const {dir, meta, user} = props;

  const {ID, uid, text, media} = meta;
  const {name, dp} = user;

  const getMedia = React.useCallback(() => {
    if (media) {
      const {type, src, poster} = media;

      switch (type) {

        /** IMAGE */
        case 'image':
          return (
            <div className={`rel poster`}>
              <div className={`photo`} style={{backgroundImage: `url(${src})`}}/>
            </div>
          )

        /** VIDEO */
        case 'video':
          return (
            <div className={`rel poster`}>
              <div className={`photo`} style={{backgroundImage: `url(${poster})`}}/>
              <button className={`pp icon-play_arrow s24 abs abc`}/>
            </div>
          )

        /** AUDIO */
        case 'audio':
          return (
            <div className={`rel audio-player flex aic`}>
              <button className={`pp icon-play_arrow s24`}/>
              <div className={`controls flex col`}>
                <div className={`slider rel`}>
                  <div className={`knob aby rel`} />
                </div>
                <div className={`abs extra flex aic`}>
                  <span className={`s12 c777 dur`}>00:15</span>
                  <span className={`s12 c777 stmp`}>11:15 PM</span>
                </div>
              </div>
              <div className={`udp`}>
                <img src={`${dp}`} alt="sender logo"/>
              </div>
            </div>
          )
        default:
          return null;
      }
    }
  }, [media])

  return (
    <div className={`bubble flex rel ${dir === 1 ? 'mine' : ''}`}>
      <div className={`ballon rel flex col`}>
        {media?.type !== 'audio' && <h2 className={`name s13 bold`}>{name}</h2>}

        {media && <div className={`media rel ${media.type}`}>
          {getMedia()}
        </div>}

        {text && <p className={`text s13`}>{text}</p>}

        {media?.type !== 'audio' && <span className={`stamp c777 s11 abs`}>03:53 PM</span>}
      </div>
    </div>
  );
}
