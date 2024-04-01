module.exports = (sequelize, Sequelize) => {
  const checklist = sequelize.define("checklists", {
    checklist: {
      type: Sequelize.JSON,
    },
  });

  return checklist;
};
