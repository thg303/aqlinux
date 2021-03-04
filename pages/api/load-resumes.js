import dayjs from 'dayjs'

export default async function loadResumes() {
  const url = process.env.NEXT_PUBLIC_CMS_HOST + '/resumes?_sort=ended_at:desc'
  const res = await fetch(url)
  const resumes = await res.json()
  return resumes.map((item) => {
    const duration = `${dayjs(item.started_at).format('MMMM YYYY')} - ${
      item.ended_at ? dayjs(item.ended_at).format('MMMM YYYY') : 'Present'
    }`
    const shortDuration = dayjs(item.started_at).format('YYYY')
    return { ...item, duration: duration, shortDuration: shortDuration }
  })
}
