/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              linkedin,
              medium,
              instagram,
              twitter,
              stackoverflow,
              github,
              codepen,
              devpost
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `linkedin:card`,
          content: `summary`,
        },
        {
          name: `linkedin:creator`,
          content: site.siteMetadata?.social?.linkedin || ``,
        },
        {
          name: `linkedin:title`,
          content: title,
        },
        {
          name: `linkedin:description`,
          content: metaDescription,
        },
        {
          name: `medium:card`,
          content: `summary`,
        },
        {
          name: `medium:creator`,
          content: site.siteMetadata?.social?.medium || ``,
        },
        {
          name: `medium:title`,
          content: title,
        },
        {
          name: `medium:description`,
          content: metaDescription,
        },
        {
          name: `instagram:card`,
          content: `summary`,
        },
        {
          name: `instagram:creator`,
          content: site.siteMetadata?.social?.instagram || ``,
        },
        {
          name: `instagram:title`,
          content: title,
        },
        {
          name: `instagram:description`,
          content: metaDescription,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `stackoverflow:card`,
          content: `summary`,
        },
        {
          name: `stackoverflow:creator`,
          content: site.siteMetadata?.social?.stackoverflow || ``,
        },
        {
          name: `stackoverflow:title`,
          content: title,
        },
        {
          name: `stackoverflow:description`,
          content: metaDescription,
        },
        {
          name: `github:card`,
          content: `summary`,
        },
        {
          name: `github:creator`,
          content: site.siteMetadata?.social?.github || ``,
        },
        {
          name: `github:title`,
          content: title,
        },
        {
          name: `github:description`,
          content: metaDescription,
        },
        {
          name: `codepen:card`,
          content: `summary`,
        },
        {
          name: `codepen:creator`,
          content: site.siteMetadata?.social?.codepen || ``,
        },
        {
          name: `codepen:title`,
          content: title,
        },
        {
          name: `codepen:description`,
          content: metaDescription,
        },
        {
          name: `devpost:card`,
          content: `summary`,
        },
        {
          name: `devpost:creator`,
          content: site.siteMetadata?.social?.devpost || ``,
        },
        {
          name: `devpost:title`,
          content: title,
        },
        {
          name: `devpost:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
