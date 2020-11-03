import React from 'react'
import Layout from '../components/Layout';
import {Link} from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
export default ({pageContext}) => {
    const {details}=pageContext;
    console.log("Details",details)
    // console.log("Details", documentToReactComponents(details.node.content.json))

    return (
        <Layout>
            <Link to={`/product/${details.node.title}`}>
                {details.node.title}
             </Link>
            <h1>{details.node.title}</h1>
           <h3>{documentToReactComponents(details.node.content.json)}</h3>
        </Layout>
    )
}
