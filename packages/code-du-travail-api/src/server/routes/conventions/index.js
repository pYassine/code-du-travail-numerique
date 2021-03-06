const Router = require("koa-router");
const { AGREEMENTS } = require("@cdt/data/indexing/esIndexName");

const getAgreementBody = require("./getAgreementBySlug.elastic");
const API_BASE_URL = require("../v1.prefix");
const elasticsearchClient = require("../../conf/elasticsearch.js");

const ES_INDEX_PREFIX = process.env.ES_INDEX_PREFIX || "cdtn";
const index = `${ES_INDEX_PREFIX}_${AGREEMENTS}`;

const router = new Router({ prefix: API_BASE_URL });

/**
 * Return the convention collective data that matches the given idcc and type
 *
 * @example
 * http://localhost:1337/api/v1/conventions/200/base
 *
 * @param {string} :idcc the IDCC number
 * @param {string} :type the type of texte requested (either none or "base", "attache", "salaire")
 * @returns {Object} some convention data.
 */
router.get("/conventions/:slug", async ctx => {
  const { slug } = ctx.params;
  const body = getAgreementBody({ slug });
  const response = await elasticsearchClient.search({ index, body });
  if (response.body.hits.total.value === 0) {
    ctx.throw(404, `agreement not found, no agreement match ${slug}`);
  }

  ctx.body = { ...response.body.hits.hits[0]._source };
});

module.exports = router;
