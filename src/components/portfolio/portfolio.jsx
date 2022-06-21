import './portfolio.scss';
import { portfolio } from '../../data';
import Work from './Work';

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className='container'>
        <ul className='worksList'>
          {Object.values(portfolio).map(work => {
            return (
              <li key={work.id}>
                <Work 
                {...work}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
