import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import HeadTeamArea from "@containers/team/layout-02";
import ExecutiveTeamArea from "@containers/team/layout-03";
import EmployeTeamArea from "@containers/team/layout-04";
import ContactArea from "@containers/contact/layout-01";

const LeadershipPage = ({ pageContext, location, data }) => {
    const content = normalizedData(data?.page?.content || []);
    const globalContent = normalizedData(data?.allGeneral.nodes || []);

    useEffect(() => { //Jump into the section
        window.addEventListener('locationchange', function () {
            if (window.location.hash) {
                window.scrollTo(0, document.getElementById(window.location.hash).offsetTop)
            }
        })
    }, []);

    return (
        <Layout location={location}>
            <Seo title="Team" />
            <Header
                data={{
                    ...globalContent["header"],
                    ...globalContent["menu"],
                }}
            />
            <main className="site-wrapper-reveal">
                <PageHeader
                    pageContext={pageContext}
                    location={location}
                    title="Team"
                />
                <div id="faculty-members">
                    <HeadTeamArea data={content["head-section"]} />
                </div>
                <div id="research-fellows">
                    <HeadTeamArea data={content["posdocs-section"]} />
                </div>

                {/* <ExecutiveTeamArea data={content["posdocs-section"]} /> */}
                <div id="phd">
                    <ExecutiveTeamArea data={content["phdstudent"]} />
                </div>
                <div id="assistants">
                    <ExecutiveTeamArea data={content["assistants"]} />
                </div>
                {/* <div id="projectstudents">
                    <ExecutiveTeamArea data={content["projectstudents"]} />
                </div> */}
                <div id="collaborators">
                    <HeadTeamArea data={content["collaborators"]} />
                </div>
                <div id="alumni">
                    <ExecutiveTeamArea data={content["alumni"]} />
                </div>

                {/* <EmployeTeamArea data={content["employee-section"]} /> */}
                {/* <ContactArea data={content["contact-section"]} /> */}
            </main>
            <Footer data={{ ...data.site.siteMetadata }} />
        </Layout>
    );
};

export const query = graphql`
    query LeadershipPageQuery {
        allGeneral {
            nodes {
                section
                ...HeaderOne
            }
        }
        site {
            ...Site
        }
        page(title: { eq: "leadership" }, pageType: { eq: "innerpage" }) {
            content {
                ...PageContent
            }
        }
    }
`;

LeadershipPage.propTypes = {
    pageContext: PropTypes.shape({}),
    location: PropTypes.shape({}),
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                contact: PropTypes.shape({}),
            }),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default LeadershipPage;
