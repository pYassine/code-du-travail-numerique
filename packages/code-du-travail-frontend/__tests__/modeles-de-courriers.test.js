import React from "react";
import { render } from "@testing-library/react";
import ModelesDeCourriers from "../pages/modeles-de-courriers/index";

describe("<ModelesDeCourriers />", () => {
  it("should render", () => {
    const data = [
      {
        title: "Rupture de période d’essai à l'initiative de l'employeur",
        source: "modeles_de_courriers",
        slug: "rupture-de-periode-dessai-a-linitiative-de-lemployeur",
        description:
          "Pendant la période d’essai, le contrat de travail peut être rompu librement par l'employeur. L'employeur doit dans ce cas informer le salarié et respecter un délai de prévenance.",
        breadcrumbs: [
          {
            title: "Embauche et contrat de travail",
            slug: "1-embauche-et-contrat-de-travail"
          },
          {
            title: "Embauche",
            slug: "11-embauche"
          },
          {
            title: "Période d'essai",
            slug: "113-periode-dessai"
          }
        ]
      },
      {
        title: "Demande de rendez-vous en vue d’une rupture conventionnelle",
        source: "modeles_de_courriers",
        slug: "demande-de-rendez-vous-en-vue-dune-rupture-conventionnelle",
        description:
          "La rupture conventionnelle individuelle est une modalité de rupture spécifique du CDI. Elle nécessite le consentement de l’employeur et du salarié, et son homologation par l’administration. La rupture ouvre droit à une indemnité de rupture conventionnelle. Ce modèle permet d’initier la procédure de rupture par l’invitation à un premier entretien.",
        breadcrumbs: [
          {
            title: "Départ de l'entreprise",
            slug: "8-depart-de-lentreprise"
          },
          {
            title: "Rupture conventionnelle",
            slug: "83-rupture-conventionnelle"
          },
          {
            title: "Rupture conventionnelle individuelle",
            slug: "831-rupture-conventionnelle-individuelle"
          }
        ]
      }
    ];
    const { container } = render(<ModelesDeCourriers data={data} />);
    expect(container).toMatchSnapshot();
  });
});
