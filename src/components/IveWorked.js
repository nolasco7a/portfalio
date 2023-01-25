import { Tabs } from 'antd';
import Icon, {SwapRightOutlined} from '@ant-design/icons'
import jobs from '../json/ivewokred.json'

const content = (objectJob, id) => {
  return(
    <div className='content-tab-custom' key={id}>
      <span className='type-company'>{objectJob.type}</span>
      <h3 className='name-company'>{objectJob.company}<span className='type-job'>@{objectJob.job}</span></h3>
      <p className='year'>{objectJob.year}</p>
      <ul>
        {objectJob.contributions.map((contribution, i) => <li key={i}><SwapRightOutlined className='mr-1' />{contribution}</li>)}
      </ul>
    </div>
  )
}

const IveWorked = () => {
  return (
    <>
      <Tabs
        tabPosition={'left'}
        items={jobs.map((job, i) => {
          return {
            label: `${job.company}`,
            key: i,
            children: content(job, i),
          };
        })}
      />
    </>
  );
};
export default IveWorked;