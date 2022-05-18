import React from "react";

const ImproveSection = () => {

  const list = [
    'Learn new recepies',
    'Experiment with food',
    'Write your own recepies',
    'Know nutrition facts',
    'Get cooking tips',
    'Get ranked'
  ]

  return (
    <div className="improve section">
      <div className="col img">
        <img src="/img/gallery/img_10.jpg" alt="" />
      </div>


      <div className="col typography">
        <h1 className="title">Improve Your Culinary Skills</h1>
      {list.map((link, index) => (
          <div className="skill-item" key={index}>{link}</div>
        ))}
        <button className="btn">SIGNUP NOW</button>
      </div>
    </div>
  )
}

export default ImproveSection