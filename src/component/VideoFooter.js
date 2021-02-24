import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import TrackChanges from "@material-ui/icons/TrackChanges";
import Ticker from "react-ticker";

import React, { Component } from 'react'

export default class VideoFooter extends Component {
  render() {
    const { channel, description, song } = this.props;
    return (
      <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <TrackChanges fontSize="large" className="videoFooter__record" />
    </div>
    )
  }
}


