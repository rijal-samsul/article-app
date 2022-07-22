import Travel from "../assets/images/travel.jpg"
import Card from "../components/Card";
import Category from "../components/Category";

function Home() {
  return (
    <div>
      <div className='flex justify-end h-60 bg-cover bg-center' style={{backgroundImage: `url(${Travel})`}}>
        <div className='m-5'>
          <ul className='flex'>
            <li className='px-5 py-1 bg-white hover:bg-gray-100 text-[#6E85B7] mr-5 rounded-sm cursor-pointer'>Login</li>
            <li className='px-5 py-1 bg-[#6E85B7] hover:bg-[#6175a1] text-white rounded-sm cursor-pointer'>Register</li>
          </ul>
        </div>
      </div>

      <div className='container mx-auto px-4 mt-5'>

        <div className='flex justify-center'>
          <input type="text" id='search' className='p-2 bg-gray-100 w-full' />
          <label htmlFor="search" className='bg-[#6E85B7] px-10 py-3 text-white'>Search</label>
        </div>

        <Category />
        <Card />


      </div>
    </div>
  );
}

export default Home;
