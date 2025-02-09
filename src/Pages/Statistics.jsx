import { useLoaderData } from 'react-router-dom';
import Rechart from './Rechart';

import Heading from '../Components/Heading';
import { Helmet } from 'react-helmet-async';

const Statistics = () => {
  const data = useLoaderData();

  
  const chartData = data.map(item => ({
    name: item.product_title, 
    price: item.price,         
  }));

  return (
    <div>
      <Helmet>
        <title>
        Statistics
        </title>
      </Helmet>
      <div className='bg-[#9538E2] h-[280px] flex items-center justify-center  rounded-xl mb-10'>
       <div className='flex justify-center text-center items-center text-white'>
       <Heading 
        title={"Statistics"}
        para={'Gadgets display summaries of Jira project and issue data on the dashboard. You can customize gadgets to display project and issue details relevant to particular ...'}
        ></Heading>
       </div>

      </div>
      <div>
        <Rechart data={chartData} />
      </div>
    </div>
  );
};

export default Statistics;












