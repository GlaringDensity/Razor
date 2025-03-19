import React from 'react'

const headphone = () => {
  return (
    <div className="sketchfab-embed-wrapper">
    <iframe
      title="Headphone"
      frameBorder="0"
      allowFullScreen
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
      allow="autoplay; fullscreen; xr-spatial-tracking"
      {...{
        "xr-spatial-tracking": "",
        "execution-while-out-of-viewport": "",
        "execution-while-not-rendered": "",
        "web-share": ""
      }}
      width="640"
      height="480"
      src="https://sketchfab.com/models/9cb17a119aec4bb78e408c0eac670886/embed?autostart=1&transparent=1&ui_theme=dark&ui_controls=0&ui_infos=0&ui_stop=0&ui_help=0"
    ></iframe>
  </div>
  )
}

export default headphone
