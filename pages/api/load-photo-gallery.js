import fetchErrorHandler from '@/utils/fetch-error-handler'

export default async function loadPhotoGallery() {
  const url = process.env.NEXT_PUBLIC_CMS_HOST + '/photos'
  const res = await fetch(url)
  fetchErrorHandler(res)
  const allPhotos = await res.json()
  let i = 0
  let separatedPhotos = []
  while (i < allPhotos.length) {
    const sliced = allPhotos.slice(i, i + 6)
    separatedPhotos.push(sliced)
    i = i + sliced.length
  }
  return separatedPhotos
}
