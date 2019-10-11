import React, { useContext } from 'react';
import ImageToggleOnScroll from "./ImageToggleOnScroll";
import { ConfigContext } from './App'



const SpeakerDetail = React.memo(({ //with React.memo(), the functiontn compnent will only render when its props have changed.//added after useMemo
                           id,
                           firstName,
                           lastName,
                           favorite,
                           bio,
                           onHeartFavoriteHandler
                       }) => {
    // console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);

    const context = useContext(ConfigContext);
    console.log(`contexthhhh${context.loggedInUserEmail}`)

    return (
        <div className="card col-4 cardmin">
            <ImageToggleOnScroll
                className="card-img-top"
                primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
                secondaryImg={`/static/speakers/Speaker-${id}.jpg`}
                alt="{firstName} {lastName}"
            />
            <div className="card-body">
                <h4 className="card-title">
                    {context.loggedInUserEmail ? (
                    <button
                        data-sessionid={id}
                        className={favorite ? "heartredbutton" : "heartdarkbutton"}
                        onClick={e => {
                            onHeartFavoriteHandler(e, !favorite);
                        }}
                    />
                    ): null }
                    <span>
            {firstName} {lastName}
          </span>
                </h4>

                <span>{bio}</span>
            </div>
        </div>
    );
}
);

export default SpeakerDetail;
