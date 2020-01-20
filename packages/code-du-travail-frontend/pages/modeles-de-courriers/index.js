import React from "react";
import getConfig from "next/config";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import {
  Container,
  FlatList,
  Tile,
  PageTitle,
  Section,
  theme
} from "@socialgouv/react-ui";

import { Layout } from "../../src/layout/Layout";
import Metas from "../../src/common/Metas";
import { FocusRoot } from "../../src/a11y";

const {
  publicRuntimeConfig: { API_URL }
} = getConfig();

class Modeles extends React.Component {
  static async getInitialProps() {
    const response = await fetch(`${API_URL}/modeles`);
    if (!response.ok) {
      return { statusCode: response.status };
    }
    const data = await response.json();
    return { data };
  }

  render() {
    const { data = { hits: {} }, pageUrl, ogImage } = this.props;
    return (
      <Layout>
        <Metas
          url={pageUrl}
          title="Modèles de courriers - Code du travail numérique"
          description="Retrouvez l'ensemble des modèles de courriers à votre disposition."
          image={ogImage}
        />
        <Section>
          <Container narrow>
            <FocusRoot>
              <PageTitle>
                Consultez et téléchargez nos modèles de documents
              </PageTitle>
            </FocusRoot>
            <StyledList>
              {data.hits.hits.map(({ _id, _source }) => (
                <StyledListItem key={_id}>
                  <Link
                    href="modeles-de-courriers/[slug]"
                    as={`modeles-de-courriers/${_source.slug}`}
                    passHref
                  >
                    <ModeleCourrier modele={_source} />
                  </Link>
                </StyledListItem>
              ))}
            </StyledList>
          </Container>
        </Section>
      </Layout>
    );
  }
}

const ModeleCourrier = ({ modele, ...props }) => {
  const { filename, title, author } = modele;
  const [, extension] = filename.split(/\.([a-z]{2,4})$/);
  return (
    <Tile wide {...props} title={title}>
      <Label>Source</Label>: <Label>{author}</Label>
      {extension && author ? " - " : null}
      <Value>{extension}</Value>
    </Tile>
  );
};

const { colors, spacings } = theme;

const StyledList = styled(FlatList)`
  margin: ${spacings.small} 0;
`;

const StyledListItem = styled.li`
  margin-bottom: ${spacings.medium};
`;

const Label = styled.span`
  color: ${colors.altText};
  font-weight: 700;
`;

const Value = styled.span`
  color: ${colors.altText};
  font-weight: 700;
  text-transform: uppercase;
`;

export default Modeles;
