export default async function loadProjects() {
  const url = process.env.NEXT_PUBLIC_CMS_HOST + '/projects'
  const res = await fetch(url)
  return await res.json()
}
