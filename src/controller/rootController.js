function getClock() {
  const date = new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  if (hours >= 12) {
    hours = hours - 12;
  } else {
    hours;
  }
  const seconds = date.getSeconds();
  const currentTime = `${hours}:${minutes}:${seconds}`;
  return currentTime;
}

export const previewPage = (req, res) => {
  getClock();
  setInterval(getClock, 1000);
  return res.render("preview", { pageTitle: "Hello!", getClock });
};

export const mainPage = (req, res) => {
  return res.render("main", { pageTitle: "Hello!" });
};
