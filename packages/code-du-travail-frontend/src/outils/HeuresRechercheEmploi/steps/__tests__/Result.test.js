import { StepResult } from "../Result";
import { renderForm } from "../../../../../test/renderForm";

const ccn86 = {
  convention: {
    id: "KALICONT000005635630",
    slug: "86-entreprises-de-la-publicite-et-assimilees",
    title:
      "Convention collective nationale de travail des cadres, techniciens et employés de la publicité française du 22 avril 1955. Étendue par arrêté du 29 juillet 1955 JORF 19 août 1955",
    shortTitle: "Entreprises de la publicité et assimilées",
    num: 86
  }
};

describe("<StepResult />", () => {
  it("should render with duration", () => {
    const { container } = renderForm(StepResult, {
      criteria: {
        "catégorie socio-professionnelle": "16| Employés",
        "type de rupture": "1| démission"
      },
      ccn: ccn86
    });
    expect(container).toMatchSnapshot();
  });

  it("should render no results", () => {
    const { container } = renderForm(StepResult, {
      criteria: {
        "catégorie socio-professionnelle": "16| Employés",
        "type de rupture": "3| licenciement",
        ancienneté: "38| 2 ans ou moins"
      },
      ccn: ccn86
    });
    expect(container).toMatchSnapshot();
  });
  it("should render with when no CC", () => {
    const { container } = renderForm(StepResult, {});
    expect(container).toMatchSnapshot();
  });

  it("should render with when unhandled CC", () => {
    const { container } = renderForm(StepResult, {
      ccn: {
        convention: {
          id: "KALICONT000005635662",
          slug: "1561-cordonnerie-multiservice",
          title:
            "Convention collective nationale de la cordonnerie multiservice du 7 août 1989. Elargie au secteur des cordonniers industriels ",
          shortTitle: "Cordonnerie multiservice",
          num: 1561
        }
      }
    });
    expect(container).toMatchSnapshot();
  });
});
