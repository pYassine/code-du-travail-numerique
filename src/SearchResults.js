import React from "react";
import styled from "styled-components";


const NoResultContainer = styled.div`margin-top: 20px;`;

class NoResult extends React.Component {
  render() {
    const source = this.props.source;
    return (
      <NoResultContainer className="notification error">
        <p>Pas de résultat dans {source}.</p>
      </NoResultContainer>
    )
  }
}


class ResultsCodeDuTravailContainer extends React.Component {

  render() {
    let data = this.props.data;
    if (data.hits.total === 0) {
      return (<NoResult source={'le Code du travail'}></NoResult>);
    }
    return (
      <div>
        <p>Environ {data.hits.total} résultats trouvés dans <em>le Code du travail</em> ({data.took / 1000} secondes)</p>
        {data.hits.hits.map(result => <ResultCodeDuTravail data={result} />)}
      </div>
    )
  }

}

class ResultCodeDuTravail extends React.Component {

  render() {

    let data = this.props.data;

    let tags = data._source.tags[0].split('/').join(' > ').substring(2);

    let legifranceBaseUrl = 'https://www.legifrance.gouv.fr/affichCodeArticle.do';
    let legifranceUrl = `${legifranceBaseUrl}?idArticle=${data._source.id}&cidTexte=${data._source.cid}`;

    let article = data._source.bloc_textuel;
    if (data.highlight) {
      let firstOjectKeyName = Object.keys(data.highlight)[0]
      article = data.highlight[firstOjectKeyName][0]; // Use 1st available highlight.
    }
    let trailingBrRegex = /^\s*(?:<br\s*\/?\s*>)+|(?:<br\s*\/?\s*>)+\s*$/gi;
    article = article.replace(trailingBrRegex, '');

    return (
      <article key={data._id} className={data._type}>
        <header>
          <h1>{data._source.titre}</h1>
          <p>{tags}</p>
        </header>
        <blockquote dangerouslySetInnerHTML={{__html:article}}></blockquote>
        <footer>
          <a href={legifranceUrl} target="_blank" rel="noopener noreferrer">Voir sur Legifrance</a>
        </footer>
      </article>
    )

  }

}


class ResultsFichesServicePublicContainer extends React.Component {

  render() {
    let data = this.props.data;
    if (data.hits.total === 0) {
      return (<NoResult source={'les fiches Service Public'}></NoResult>);
    }
    return (
      <div>
        <p>Environ {data.hits.total} résultats trouvés dans <em>les fiches Service Public</em> ({data.took / 1000} secondes)</p>
        {data.hits.hits.map(result => <ResultFicheServicePublic data={result} />)}
      </div>
    )
  }

}

class ResultFicheServicePublic extends React.Component {

  render() {
    let data = this.props.data;
    let firstOjectKeyName = Object.keys(data.highlight)[0]
    let highlight = data.highlight[firstOjectKeyName];
    return (
      <article key={data._id} className={data._type}>
        <header>
          <h1>{data._source.title}</h1>
        </header>
        <ul>
          {highlight.map(item => <li dangerouslySetInnerHTML={{__html:item}}></li>)}
        </ul>
        <footer>
          <a href={data._source.url} target="_blank" rel="noopener noreferrer">Voir la fiche sur Service Public</a>
        </footer>
      </article>
    )
  }

}


const ResultsContainer = styled.div`text-align: left;`;

class SearchResults extends React.Component {

  render() {

    let data = this.props.data;

    // No query.
    if (!data) {
      return null;
    }

    return (
      <ResultsContainer>
        <ResultsCodeDuTravailContainer data={data.code_du_travail.results} />
        <ResultsFichesServicePublicContainer data={data.fiches_service_public.results} />
      </ResultsContainer>
    );

  }

}

export default SearchResults;
