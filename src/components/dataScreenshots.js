// import * as React from "react"
// import { useState, useEffect } from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

// const query = graphql`
//   {
//     allFile(filter: { relativeDirectory: { eq: "screenshots" } }) {
//       nodes {
//         name
//         childImageSharp {
//           gatsbyImageData(layout: CONSTRAINED, width: 600)
//         }
//       }
//     }
//   }
// `

// const DataScreenshots = () => {
//   const data = useStaticQuery(query)
//   const nodes = data.allFile.nodes

//   // const images = nodes.map(item => {
//   //   const pathToImage = getImage(item)
//   // })

//   const [index, setIndex] = useState(0)

//   useEffect(() => {
//     const lastIndex = images.length - 1
//     if (index < 0) {
//       setIndex(lastIndex)
//     }
//     if (index > lastIndex) {
//       setIndex(0)
//     }
//   }, [index, images])

//   return (
//     <>
//       <div>
//         <h1>App Screenshots</h1>
//         {nodes.map((image, imageIndex) => {
//           const { name } = image
//           const pathToImage = getImage(image)

//           let position = "nextSlide"
//           if (imageIndex === index) {
//             position = "activeSlide"
//           }
//           if (
//             imageIndex === index - 1 ||
//             (index === 0 && imageIndex === images.length - 1)
//           ) {
//             position = "lastSlide"
//           }

//           return (
//             <div className={position} key={imageIndex}>
//               <GatsbyImage image={pathToImage} alt={name} />
//             </div>
//           )
//         })}
//         <button className="prev" onClick={() => setIndex(index - 1)}>
//           <FiChevronLeft />
//         </button>
//         <button className="next" onClick={() => setIndex(index + 1)}>
//           <FiChevronRight />
//         </button>
//       </div>
//     </>
//   )
// }

// export default DataScreenshots
