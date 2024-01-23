import bug from "./bug";

function bugList() {
  let bugData = [];

  const bug1 = new bug({
    id: 1,
    title: "Crash on load",
    details: "It crashes as soon as it opens",
    priority: 1,
    version: "v1",
    assignedTo: "Khalid",
    reporter: "Khalidopia",
    time: "9:37",
  });
  const bug2 = new bug({
    id: 2,
    title: "links dont work on about screen",
    details: "the links provided on the about screen dont open",
    priority: 3,
    version: "v1",
    assignedTo: "Khalid",
    reporter: "Khalidopia",
    time: "9:38",
  });

  bugData.push(bug1, bug2);
  return bugData;
}

export default bugList;
