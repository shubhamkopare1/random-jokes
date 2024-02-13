const container = document.createElement("div");
const body = document.querySelector("body");
body.appendChild(container);
container.style.background = "var(--mycolor-bg)";
container.style.width = "40rem";
container.style.height = "20rem";
container.style.border = "1px solid var(--bordercolor-bg)";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.padding="2rem"
const firstDiv = document.createElement("div");
container.appendChild(firstDiv);

const dilogue = [
  "I was having dinner with Garry Kasporov (world chess champion) and there was a check tablecloth. It took him two hours to pass me the salt.",
  "I was in Tesco’s and I saw this man and woman wrapped in a barcode. I said, Are you two an item",
  "A group of chess enthusiasts checked into a hotel and were standing in the lobby discussing their recent tournament victories. After about an hour, the manager came out of the office and asked them to disperse. “But why?” they asked, as they moved off. “because,” he said “I can’t stand chess nuts boasting in an open foyer.”",
  "A priest, a rabbi and a vicar walk into a bar. The barman says, “Is this some kind of joke?”",
  "My therapist says I have a preoccupation with vengeance. We’ll see about that.",
  "I’m on a whiskey diet. I’ve lost three days already.",
];

const dilogueNum = Math.floor(Math.random() * dilogue.length);
const dilogueRandom = dilogue[dilogueNum];
firstDiv.innerHTML = dilogueRandom;
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.marginTop = "5rem";
body.style.background = "var( --bodycolor-bg)";

const refreshBtn = document.createElement("div");
container.appendChild(refreshBtn);
refreshBtn.style.height = "2rem";
refreshBtn.style.width = "5rem";
refreshBtn.style.background = "var(--bodycolor-bg)";
refreshBtn.style.marginTop = "2rem";
refreshBtn.innerHTML = "refresh";
refreshBtn.style.display = "flex";
refreshBtn.style.justifyContent = "center";
refreshBtn.style.alignItems = "center";
refreshBtn.style.cursor="pointer"

refreshBtn.addEventListener("click", () => {
  const newDilougeNum = Math.floor(Math.random() * dilogue.length);
  firstDiv.innerHTML = dilogue[newDilougeNum];

  const refreshBtn = document.createElement("div");
});
