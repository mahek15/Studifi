// ScheduleResultPage.js

import { Button } from "@mui/base";
import React from "react";
import BarGraph from "./components/BarGraph";
import PieGraph from "./components/PieGraph";

const ResultPage = ({
  daysLeft,
  hoursLeft,
  subjectDetails,
  scheduling,
  setScheduling,
}) => {
  console.log(subjectDetails);
  const NameArray = subjectDetails.map((obj) => obj.name);
  const NumTopics = subjectDetails.map((obj) => obj.numTopics);
  console.log(NameArray);
  console.log(NumTopics);

  // Render the input values here
  return (
    <div className="w-full">
      <h1 className="text-white text-3xl flex text-center">
        SCHEDULING SYSTEM
      </h1>
      <div className="text-white flex items-center gap-5 bg-[#1e143d]">
        <h4 className="text-xl font-semibold ">Total Hours</h4>
        <h1 className="text-xl">{hoursLeft}</h1>
      </div>
      <div className="text-white flex">
        <p>Days Left: {daysLeft}</p>
        <p>Hours Left: {hoursLeft}</p>
      </div>
      <p>Subjects:</p>
      <div className="grid grid-cols-3 gap-5 ">
        <div className=" col-span-2 bg-[#1e143d] mx-5 rounded-lg">
          <BarGraph taskExpenses={NumTopics} categories={NameArray} />
        </div>
        <div className=" mx-auto bg-[#1e143d] rounded-lg  ">
          <PieGraph taskExpenses={NumTopics} categories={NameArray} />
        </div>
      </div>

      <div className="bg-[#1e143d] mx-10 rounded-lg text-white">
        <h1 className="text-2xl">Maths</h1>
        <h2>Topic 1</h2>
        <h2>Topic 2</h2>
        <h2>Topic 3</h2>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-1"></div>

      <Button onClick={() => setScheduling(false)}>Add Schedule</Button>
      <ul>
        {/* {subjects.map((subject, index) => (
          <li key={index}>
            Subject {index + 1}: {subject.name} - {subject.numTopics} topics
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default ResultPage;
