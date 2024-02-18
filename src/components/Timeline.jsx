import React from "react";

const Timeline = ({user}) => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {user.timeline.map((item, index) => (
          <TimelineItem
            heading={item.title}
            text={item.date}
            description={item.description}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, text, description, index }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  return (
    <div
      className={`timelineItem ${
        index % 2 === 0 ? "leftTimeline" : "rightTimeline"
      }`}
    >
      <div>
        <h2>{heading}</h2>
        <p>{description}</p>
        <p>{formatDate(text)}</p>
      </div>
    </div>
  );
};

export default Timeline;
