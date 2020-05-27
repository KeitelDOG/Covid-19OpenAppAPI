var faker = require('faker/locale/en');

exports.seed = function(knex, Promise) {
  // Inserts seed entries
  let models = [
    {
      id: 1,
      title: "Quels sont vos symptômes?",
      type: 1,
      choice: "Fièvre,Toux,Fatigue,Difficulté Respiratoire,Aucun,Autres",
    },
    {
      id: 2,
      title: "Depuis quand ressentez vous ces symptômes?",
      type: 2,
      choice: "Jours,Semaines,Mois,Année",
    },
    {
      id: 3,
      title: "Avez-vous une de ces pathologies ( Antécédent médical ) ci-dessous?",
      type: 1,
      choice: "HTA,Diabète,Asthme,Cancer,Aucun,Autres",
    },
    {
      id: 4,
      title: "Est-ce que vous avez un parent qui ont ou moins une de ces pathologies ci-dessous?",
      type: 1,
      choice: "HTA,Diabète,Asthme,Cancer,Aucun,Autres",
    },
    {
      id: 5,
      title: "Habitudes ( Avez-vous l’habitude de consommer ces substances)?",
      type: 1,
      choice: "Alcool,Tabac,Mariguana,Café,Aucun,Autres",
    },
    {
      id: 6,
      title: "Quel est votre groupe sanguin?",
      type: 2,
      choice: "A+, A-, B+, B-, AB+, AB-, O+, O-",
    },
    {
      id: 7,
      title: "Avez-vous une allergie ? si oui précisez ?",
      type: 3,
      choice: "",
    }
  ];

  return knex('questions').insert(models);
};
