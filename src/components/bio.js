/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
/* import { ReactComponent as Linkedin } from "../images/social/Linkedin.svg";
import { ReactComponent as Codepen } from "../images/social/codepen.svg";
import { ReactComponent as Devpost } from "../images/social/devpost.svg";
import { ReactComponent as Githubactions } from "../images/social/Githubactions.svg";
import { ReactComponent as Instagram } from "../images/social/instagram.svg";
import { ReactComponent as Medium } from "../images/social/medium.svg";
import { ReactComponent as Stackoverflow } from "../images/social/stackoverflow.svg";
import { ReactComponent as Twitter } from "../images/social/twitter.svg"; */
import linkedin from "../images/social/linkedin.svg";
import codepen from "../images/social/codepen.svg";
import devpost from "../images/social/devpost.svg";
import githubactions from "../images/social/githubactions.svg";
import instagram from "../images/social/instagram.svg";
import medium from "../images/social/medium.svg";
import stackoverflow from "../images/social/stackoverflow.svg";
import twitter from "../images/social/twitter.svg";



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
          src="../images/profile-pic_julee_burdekin.png"
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
                                                                                        src={linkedin}/></a>
            <a href={`https://${social?.medium}.medium.com/` || ``} target='blank'><img
                                                                                        className="socialIcon"
                                                                                        alt="social icon for medium"
                                                                                        src={medium}/></a>
            <a href={`https://instagram.com/${social?.instagram || ``}`} target='blank'><img
                                                                                        className="socialIcon"
                                                                                        alt="social icon for instagram"
                                                                                        src={instagram}/></a>
            <a href={`https://twitter.com/${social?.twitter || ``}`} target='blank'><img
                                                                                        className="socialIcon"
                                                                                        alt="social icon for twitter"
                                                                                        src={twitter}/></a>
            <a href={`https://stackoverflow.com/${social?.stackoverflow || ``}`} target='blank'><img
                                                                                        className="socialIcon"
                                                                                        alt="social icon for stackoverflow"
                                                                                        src={stackoverflow}/></a>
            <a href={`https://github.com/${social?.github || ``}`} target='blank'><img
                                                                                        className="socialIcon"
                                                                                        alt="social icon for github"
                                                                                        src={githubactions}/></a>
            <a href={`https://codepen.com/${social?.codepen || ``}`} target='blank'><img
                                                                                        className="socialIcon"
                                                                                        alt="social icon for codepen"
                                                                                        src={codepen}/></a>
            <a href={`https://devpost.com/${social?.devpost || ``}`} target='blank'><img
                                                                                        className="socialIcon"
                                                                                        alt="social icon for devpost"
                                                                                        src={devpost}/></a>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Bio
