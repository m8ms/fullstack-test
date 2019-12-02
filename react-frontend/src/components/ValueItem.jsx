import React from "react";
import PropTypes from "prop-types";

const StringValue = ({ value }) => <div>{value}</div>;

export const ValueItem = ({ value }) => {
  if (typeof value === "number" || typeof value === "string") {
    return <StringValue value={value} />;
  }
  if (Array.isArray(value)) {
    return (
      <ul>
        {value.map((item, i) => (
          <li key={i}>
            <ValueItem value={item} />
          </li>
        ))}
      </ul>
    );
  }

  if (value && typeof value === "object" && value.name) {
    return <StringValue value={value.name} />;
  }

  return <div>?</div>;
};

ValueItem.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array
  ])
};
