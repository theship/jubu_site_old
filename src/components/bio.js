/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Linkedin from "../images/social/Linkedin.svg";
import Codepen from "../images/social/codepen.svg";
import Devpost from "../images/social/devpost.svg";
import Githubactions from "../images/social/Githubactions.svg";
import Instagram from "../images/social/instagram.svg";
import Medium from "../images/social/medium.svg";
import Stackoverflow from "../images/social/stackoverflow.svg";
import Twitter from "../images/social/twitter.svg";


const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            linkedin
            medium
            instagram
            twitter
            stackoverflow
            github
            codepen
            devpost
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <div className="socialColumns"
        style={{
          display: `flex`,
          flexDirection: `column`,
          marginBottom: `1vh`,
        }}
      >
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic_julee_burdekin.jpg"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
        {author?.name && (
          <p>
            <strong>{author.name}</strong> {author?.summary || null}
            {` `}
            <a href={`https://twitter.com/${social?.twitter || ``}`} target='blank'>
              Follow them on Twitter.
            </a>
          </p>

        )}  
        <div
          style={{
            display: `flex`,
            marginBottom: `1vh`,
          }}
        >
          <div>
            <a href={`https://linkedin.com/${social?.linkedin || ``}`} target='blank'><img
                                                                                        className="socialIcon"
                                                                                        alt="social icon for linkedin"
                                                                                        formats={["auto", "svg"]}
                                                                                        src={Linkedin}/></a>
            <a href={`https://${social?.medium}.medium.com/`} target='blank'><img
                                                                                        className="socialIcon"
                                                                                        alt="social icon for medium"
                                                                                        formats={["auto", "svg"]}
                                                                                        src={Medium}/></a>
            <a href={`https://instagram.com/${social?.instagram || ``}`} target='blank'><img
                                                                                        className="socialIcon"
                                                                                        alt="social icon for instagram"
                                                                                        formats={["auto", "svg"]}
                                                                                        src={Instagram}/></a>
            <a href={`https://twitter.com/${social?.twitter || ``}`} target='blank'><img
                                                                                        className="socialIcon"
                                                                                        alt="social icon for twitter"
                                                                                        formats={["auto", "svg"]}
                                                                                        src={Twitter}/></a>
            <a href={`https://stackoverflow.com/${social?.stackoverflow || ``}`} target='blank'><img
                                                                                        className="socialIcon"
                                                                                        alt="social icon for stackoverflow"
                                                                                        formats={["auto", "svg"]}
                                                                                        src={Stackoverflow}/></a>
            <a href={`https://github.com/${social?.github || ``}`} target='blank'><img
                                                                                        className="socialIcon"
                                                                                        alt="social icon for github"
                                                                                        formats={["auto", "svg"]}
                                                                                        src={Githubactions}/></a>
            <a href={`https://codepen.com/${social?.codepen || ``}`} target='blank'><img
                                                                                        className="socialIcon"
                                                                                        alt="social icon for codepen"
                                                                                        formats={["auto", "svg"]}
                                                                                        src={Codepen}/></a>
            <a href={`https://devpost.com/${social?.devpost || ``}`} target='blank'><img
                                                                                        className="socialIcon"
                                                                                        alt="social icon for devpost"
                                                                                        formats={["auto", "svg"]}
                                                                                        src={Devpost}/></a>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Bio
