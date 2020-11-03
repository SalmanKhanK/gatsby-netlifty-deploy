import React from "react";
import Layout from "../components/Layout";

export default ({pageContext}) => {
  return (
    <Layout>
      <div>Hello Dynamic Page from {pageContext.name}</div>
      <div>This page is create dynamically at Build Time</div>
    </Layout>
  )
}