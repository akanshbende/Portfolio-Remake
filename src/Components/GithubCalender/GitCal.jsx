import React, { useEffect, useState } from "react";
import axios from "axios";

const GitHubCalendar = () => {
  const username = "akanshbende";

  // Replace 'YOUR_GITHUB_API_TOKEN' with your GitHub API token
  const authToken = "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";
  const [contributions, setContributions] = useState([]);
  console.log(contributions);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/events`, {
        headers: {
          Authorization: `token ${authToken}`,
        },
      })
      .then((response) => {
        // Filter the response to get only 'PushEvent' contributions
        const pushEvents = response.data.filter(
          (event) => event.type === "PushEvent"
        );

        // Extract the date from each 'PushEvent' and store it in contributions array
        const contributionsData = pushEvents.map((event) => {
          return {
            date: new Date(event.created_at).toISOString().split("T")[0],
          };
        });

        setContributions(contributionsData);
      })
      .catch((error) => {
        console.error("Error fetching GitHub data:", error);
      });
  }, []);

  // Render the contribution calendar
  return (
    <div className="github-calendar">
      {generateCalendarCells(contributions)}
    </div>
  );
};

// Function to generate calendar cells with empty boxes for blank days
function generateCalendarCells(contributions) {
  const today = new Date();
  const calendarStartDate = new Date(today.getFullYear(), today.getMonth(), 1);
  const calendarEndDate = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  );
  const calendarCells = [];

  let currentDate = new Date(calendarStartDate);

  while (currentDate <= calendarEndDate) {
    const dateString = currentDate.toISOString().split("T")[0];

    // Check if the date exists in contributions
    const hasContribution = contributions.find(
      (contribution) => contribution.date === dateString
    );

    // Add a calendar cell with a class for styling
    calendarCells.push(
      <div
        key={dateString}
        className={`github-calendar-cell ${
          hasContribution ? "contribution" : "blank-day"
        }`}
        title={dateString}
      ></div>
    );

    // Move to the next day
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return calendarCells;
}

export default GitHubCalendar;
