
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos, fetchGif } from '../api/mediaApi'
import { setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'

const ResultGrid = () => {

    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    useEffect(function () {
        // if(!query) return <div className=' h-full absolute top-1/2 left-[40%]'><p className='text-2xl font-semibold font-sans text-(--colorSecondary)'>kindly Search something above</p></div>
        if(!query) return ;
        const getData = async () => {
            try {
                dispatch(setLoading(true))
                let data = []
                if (activeTab == 'photos') {
                    let response = await fetchPhotos(query)                    
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url:item.links.html,
                        color:item.color,
                        height:item.height,
                        width:item.width,
                        download:item.links.download_location
                    }))
                    console.log(response)
                }
                if (activeTab == 'videos') {
                    let response = await fetchVideos(query)
                    

                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url:item.url
                    }))
                }
                    if (activeTab == 'gif') {
                    let response = await fetchGif(query)
                    

                       data = response.data.results.map((item) => ({
                        id: item.id,
                        title: item.title || 'GIF',
                        type: 'gif',
                        thumbnail: item.media_formats.tinygif.url,
                        src: item.media_formats.gif.url,
                        url:item.url
                    }))
                }
                
                dispatch(setResults(data))
               dispatch(setLoading(false))

            } catch (err) {
                dispatch(setError(err.message))
            }
        }
        getData()
    }, [query, activeTab,dispatch])
   
    if (error) return <h1>Error</h1>
    if (loading) return  <div className='absolute top-2/3 transition-transform  left-1/2 w-12 h-12 rounded-full  border-4 border-b-blue-700 border-l-red-600 border-t-green-800 animate-spin'></div>

    return (
        <div id='result' className='flex flex-wrap justify-between items-center w-full h-full gap-y-4 gap-x-2 overflow-auto px-10'>
            {results.map((item, idx) => {
                return <div key={idx}>
                    <ResultCard item={item} id={idx} />
                </div>
            })}
        </div>
    )
}

export default ResultGrid