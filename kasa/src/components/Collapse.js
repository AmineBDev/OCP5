import React, { useState, useRef, useEffect } from "react";

export default function Collapse(props) {
  const [collapseOpened, setCollapseOpened] = useState(false);
  const [heightText, setHeightText] = useState();

  const toggleCollapse = () => {
    setCollapseOpened(!collapseOpened);
  };

  const heightRef = useRef();

  useEffect(() => {
    if (heightRef.current) {
      setHeightText(
        collapseOpened ? `${heightRef.current.scrollHeight + 20}px` : "0px"
      );
    }
  }, [collapseOpened]);

  const renderContent = () => {
    if (typeof props.textCollapse === "string") {
      return <p>{props.textCollapse}</p>;
    } else if (Array.isArray(props.textCollapse)) {
      return <ul>{props.textCollapse}</ul>;
    }
    return null;
  };

  return (
    <div className={`collapse ${collapseOpened ? "" : "closed"}`}>
      <div className="title-collapse" onClick={toggleCollapse}>
        <h2>{props.titleCollapse}</h2>
        <i
          className={`fa-solid fa-chevron-up ${collapseOpened ? "rotate" : ""}`}
        />
      </div>
      <div
        className="text-collapse"
        ref={heightRef}
        style={{
          maxHeight: collapseOpened ? heightText : "0px",
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
}
