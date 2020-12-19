export const gqlFetch = async (uri, query) => {
  const response = await fetch(uri, {
    method: `POST`,
    headers: { 'Content-Type': `application/json` },
    body: JSON.stringify({ query }),
  })
  const { data, error } = await response.json()
  if (error) console.error(error)
  return data
}

const chaptersQuery = `{
  chapters: chapterCollection(where: { active: true }) {
    items {
      title
      slug
      coords {
        lat
        lng: lon
      }
    }
  }
}`

export async function fetchChapters(uri) {
  const data = await gqlFetch(uri, chaptersQuery)
  return data?.chapters?.items
}

const pageQuery = (slug) => `{
  pages: pageCollection(where: {slug: "${slug}"}) {
    items {
      title
      subtitle
      slug
      body
      cover {
        description
        url
        width
        height
      }
    }
  }
}`

export async function fetchPage(slug, uri) {
  const data = await gqlFetch(uri, pageQuery(slug))
  return data?.pages?.items[0]
}

const postQuery = (slug) => `{
  posts: contentType2WKn6YEnZewu2ScCkus4AsCollection
  ${slug ? `(where: {slug: "${slug}"})` : ``} {
    items {
      title
      slug
      date
      body
      cover {
        description
        url
        width
        height
      }
      author {
        name
        email
        homepage
        bio
        fieldOfStudy
        photo {
          title
          description
          url
        }
      }
    }
  }
}`

export async function fetchPost(slug, uri) {
  const data = await gqlFetch(uri, postQuery(slug))
  return data?.posts?.items[0]
}

export async function fetchPosts(uri) {
  const data = await gqlFetch(uri, postQuery())
  return data?.posts?.items
}

const jsonQuery = (title) => `{
  json: jsonCollection(where: {title: "${title}"}) {
    items {
      title
      data
      md
    }
  }
}`

export async function fetchJson(slug, uri) {
  const data = await gqlFetch(uri, jsonQuery(slug))
  return data?.json?.items[0]
}