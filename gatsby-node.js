exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
      if (page.path.match(/^\/product/)) {
      page.matchPath = "/product/*"
      createPage(page)
    }
  }







  const path = require('path');
// exports.createPages = async function ({ actions}) {

//     actions.createPage({
//         path: "createpage",
//         component: require.resolve("./src/templates/createpage.tsx"),
//         context: { 
//             // Data passed to context is available
//             // in pageContext props of the template component
//             name: "Salman",
//          },
//     });
//     console.log("End of Gatsby Node File");
// }

exports.createPages=async({actions,graphql})=>{
    const {createPage}=actions;
   const result=await graphql(`
        {
          allContentfulBlogPost {
            edges {
              node {
                title
                content {
                  json
                }
              }
            }
          }

        }
   `)
  // console.log("Result",result)
   result.data.allContentfulBlogPost.edges.forEach(data => {
       //console.log("Get Title",data.node.title)
         createPage({
           path:`/product/${data.node.title}`,
           component:path.resolve('./src/template/product.tsx'),
           context:{
                details:data
           }
         })
   });
}
