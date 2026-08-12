import React, { useEffect, useState } from "react";

const AutoCounter = () => {
  const [counts, setCounts] = useState({
    users: 0,
    locations: 0,
    servers: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        users: prev.users < 90 ? prev.users + 2 : 90,
        locations: prev.locations < 100 ? prev.locations + 8 : 100,
        servers: prev.servers < 1000 ? prev.servers + 20 : 1000,
      }));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="AutoCountContainer">
      <div>
        <h2>Users</h2>
        <h3>{counts.users}+</h3>
      </div>

      <div>
        <h2>Locations</h2>
        <h3>{counts.locations}+</h3>
      </div>

      <div>
        <h2>Servers</h2>
        <h3>{counts.servers}+</h3>
      </div>
    </div>
  );
};

export default AutoCounter;