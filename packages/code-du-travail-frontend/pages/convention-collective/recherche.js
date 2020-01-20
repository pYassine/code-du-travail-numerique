import React from "react";
import styled from "styled-components";
import { Container, PageTitle, Section, Wrapper } from "@socialgouv/react-ui";
import { Layout } from "../../src/layout/Layout";
import Metas from "../../src/common/Metas";
import ConventionForm from "../../src/conventions/Search/Form";
import { FocusRoot } from "../../src/a11y";

const SearchConvention = ({ ogImage, pageUrl }) => (
  <Layout currentPage="about">
    <Metas
      url={pageUrl}
      title="Recherche de convention collective"
      description="Recherchez une convention collective par Entreprise, SIRET, Nom ou numéro IDCC."
      image={ogImage}
    />
    <Section>
      <Container narrow>
        <FocusRoot>
          <PageTitle>Recherchez votre convention collective</PageTitle>
        </FocusRoot>
        <Wrapper variant="main">
          <StyledConventionForm />
        </Wrapper>
      </Container>
    </Section>
  </Layout>
);

export default SearchConvention;

const StyledConventionForm = styled(ConventionForm)`
  min-height: 30rem;
`;
