import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Importing components
import Contact from '../Contact/Contact';

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
        <Contact />
    </Layout>
)

export default ContactPage;
