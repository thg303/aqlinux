export default async function loadProjects() {
  const url = process.env.NEXT_PUBLIC_CMS_HOST + '/projects?_sort=creation_date:desc'
  const res = await fetch(url)
  return await res.json()
}
