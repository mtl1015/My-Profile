export const mainDetail = (req, res) => {
  res.render("detail", { pageTitle: "Detail" });
};

export const codingDetail = (req, res) => {
  res.render("coding", { pageTitle: "Coding" });
};
export const civilDetail = (req, res) => {
  res.render("Civil", { pageTitle: "Civil" });
};
export const travelDetail = (req, res) => {
  res.render("travel", { pageTitle: "Travel" });
};
export const teacherDetail = (req, res) => {
  res.render("teacher", { pageTitle: "Teacher" });
};
