
import SingleCategory from '@/components/SingleCategory'

export default function page({params}) {


  return (
    <div className='max-w-7xl mx-auto my-10'>
      <h2 className='text-4xl text-center my-10'>All {params.categoryName}</h2>
      <SingleCategory params={params.categoryName}> </SingleCategory>
    </div>
  )
}
